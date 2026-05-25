package dev.marvin.portfolio;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;

public final class PortfolioServer {
  private static final Map<String, String> MIME_TYPES =
      Map.ofEntries(
          Map.entry(".html", "text/html; charset=utf-8"),
          Map.entry(".css", "text/css; charset=utf-8"),
          Map.entry(".js", "text/javascript; charset=utf-8"),
          Map.entry(".json", "application/json; charset=utf-8"),
          Map.entry(".png", "image/png"),
          Map.entry(".jpg", "image/jpeg"),
          Map.entry(".jpeg", "image/jpeg"),
          Map.entry(".gif", "image/gif"),
          Map.entry(".pdf", "application/pdf"));

  private PortfolioServer() {}

  public static void main(String[] args) throws IOException {
    int port = args.length > 0 ? Integer.parseInt(args[0]) : 8080;
    Path root = Path.of(".").toAbsolutePath().normalize();
    HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
    server.createContext("/", exchange -> serve(exchange, root));
    server.setExecutor(null);
    server.start();
    System.out.printf("Portfolio running at http://localhost:%d/%n", port);
  }

  private static void serve(HttpExchange exchange, Path root) throws IOException {
    if (!"GET".equals(exchange.getRequestMethod()) && !"HEAD".equals(exchange.getRequestMethod())) {
      send(exchange, 405, "Method not allowed".getBytes());
      return;
    }

    URI uri = exchange.getRequestURI();
    String rawPath = uri.getPath().equals("/") ? "/index.html" : uri.getPath();
    Path file = root.resolve(rawPath.substring(1)).normalize();
    if (Files.isDirectory(file)) {
      file = file.resolve("index.html").normalize();
    }

    if (!file.startsWith(root) || !Files.exists(file) || Files.isDirectory(file)) {
      send(exchange, 404, "Not found".getBytes());
      return;
    }

    byte[] body = Files.readAllBytes(file);
    exchange.getResponseHeaders().set("Content-Type", contentType(file));
    send(exchange, 200, body);
  }

  private static String contentType(Path file) {
    String name = file.getFileName().toString().toLowerCase();
    return MIME_TYPES.entrySet().stream()
        .filter(entry -> name.endsWith(entry.getKey()))
        .map(Map.Entry::getValue)
        .findFirst()
        .orElse("application/octet-stream");
  }

  private static void send(HttpExchange exchange, int status, byte[] body) throws IOException {
    boolean head = "HEAD".equals(exchange.getRequestMethod());
    exchange.sendResponseHeaders(status, head ? -1 : body.length);
    if (!head) {
      try (OutputStream output = exchange.getResponseBody()) {
        output.write(body);
      }
    }
  }
}
