const h = React.createElement;
const { useEffect, useState } = React;

const assets = {
  headshot: "assets/images/S__15753219.jpg",
  pintos: "assets/images/os_diagram.png",
  gitlet: "assets/images/gitlet.png",
  secureShare: "assets/images/cs161.jpg",
  pacman: "assets/images/pacman_game.gif",
  mapreduce: "assets/images/mapreduce.png",
  linkedinIcon: "assets/images/3536505.png",
  githubIcon: "assets/images/25657.png",
  emailIcon: "assets/images/5968534.png",
  resumeIcon: "assets/images/2195529.png",
  resume: "assets/files/Resume-Marvin.pdf",
  pintosThreads: "assets/files/Project_Threads_Design.pdf",
  pintosUserPrograms: "assets/files/Project_User_Programs_Design.pdf",
};

const profileLinks = [
  ["LinkedIn", "https://www.linkedin.com/in/cheng-ying-hsin/", "View LinkedIn profile", assets.linkedinIcon],
  ["GitHub", "https://github.com/marvinhsin?tab=repositories", "View GitHub repositories", assets.githubIcon],
  ["Email", "mailto:bdfb1997@berkeley.edu", "Send email", assets.emailIcon],
  ["Resume", assets.resume, "Open resume", assets.resumeIcon],
];

const education = [
  ["Bachelor Degree in Computer Science", "University of California-Berkeley, CA", "Dec 2023"],
];

const profileHighlights = [
  ["Recent Role", "Java Backend Engineer, Apple Calendar"],
  ["Focus", "Backend services, distributed systems, and AI-enabled full-stack products"],
  ["Education", "UC Berkeley Computer Science"],
];

const skills = [
  ["Languages", "Python, C/C++, Java, SQL, Ruby, JavaScript, Typescript, HTML/CSS, Golang, R, C#, RISC-V"],
  ["Libraries / Frameworks", "React, Tailwind CSS, Node.js, Spring Boot, Ruby on Rails, Django, LangChain, Pandas, Agile"],
  ["Tools", "Git, Linux, Sentry, Grafana, Prometheus, Docker, K8s, RabbitMQ, Kafka, Spark, AWS Lambda, ElasticSearch, CloudWatch"],
  ["Databases", "PostgreSQL, MySQL, MongoDB, Cassandra, Oracle DB, Redis, Amazon RDS"],
];

const highlightedTech = [
  "Java Spring Boot",
  "Python Django",
  "Tailwind CSS",
  "Apache Kafka",
  "Apache Spark",
  "AWS Lambda",
  "AWS S3",
  "GCP Compute Engine",
  "Spring Boot",
  "OpenSearch",
  "Kubernetes",
  "PostgreSQL",
  "Cassandra",
  "RabbitMQ",
  "LangChain",
  "WebSocket",
  "Spark/Hadoop",
  "Docker",
  "Kafka",
  "Oracle",
  "Redis",
  "Jenkins",
  "Splunk",
  "JUnit",
  "Mockito",
  "React",
  "YOLO",
];

const techPattern = new RegExp(
  `(${highlightedTech.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

const experience = [
  {
    company: "Apple Inc.",
    location: "Austin, TX",
    dates: "Apr 2025 - Mar 2026",
    role: "Java Backend Engineer - Apple Calendar team",
    bullets: [
      "Engineered high-consistency backend services using Java Spring Boot, improving Apple Calendar experiences across iOS, macOS, and iCloud with a focus on concurrency safety and distributed-system reliability.",
      "Developed and operated 5+ production-grade Calendar microservices supporting event synchronization, meeting transfers, and cross-platform notifications, leveraging Docker and Kubernetes for scalable and resilient deployments.",
      "Built and enhanced internal Calendar features including conference room booking, meeting drafting, and event transfer workflows, and re-architected the scheduling module from asynchronous to synchronous processing, delivering 10x faster booking performance for thousands of Apple employees.",
      "Designed and implemented an event-driven architecture using Apache Kafka for notifications, OpenSearch indexing, and workflow propagation, improving service decoupling and system throughput; optimized data access by reducing Oracle query latency by 40% through SQL tuning, connection pooling, and Redis caching.",
      "Established CI/CD pipelines with Jenkins and strengthened system observability using Splunk, reducing deployment time and debugging effort by 50%, and improved code reliability through comprehensive unit and integration testing with JUnit and Mockito.",
    ],
  },
  {
    company: "RemoteNC Inc.",
    location: "Taipei",
    dates: "Aug 2024 - Apr 2025",
    role: "Founding Full Stack Engineer",
    bullets: [
      "Developed a cloud-based AutoCAD management platform using Python Django for the backend and React v6 with Tailwind CSS for the frontend, supporting 2,000+ engineering users across multiple companies and improving collaboration efficiency for distributed design workflows.",
      "Built and integrated AI-powered agents and LLM-driven workflows with LangChain to automate engineering data interpretation and downstream task execution, streamlining in-app interactions for a smarter user experience.",
      "Designed and scaled a cloud-native CAD upload and processing pipeline using AWS S3, RabbitMQ, and AWS Lambda, supporting 15,000+ file uploads per day, decoupling ingestion from downstream compute, and improving average request latency by 30% while maintaining sub-second API responsiveness under load.",
      "Built distributed processing and event-driven workflows with Kafka, Apache Spark, and Hadoop, handling files up to 500MB+, reducing large-file transformation time by 50-60%, and enabling reliable lifecycle updates, real-time project notifications, and downstream AI-driven engineering metadata extraction.",
      "Configured and managed PostgreSQL and Cassandra for persistent data storage, and introduced Redis for frequently accessed metadata and query results, improving p95 response latency by 30-40% for user-facing operations.",
    ],
  },
  {
    company: "Global Key Advisors",
    location: "San Francisco, CA",
    dates: "Feb 2024 - Feb 2025",
    role: "Software Engineer Internship",
    bullets: [
      "Developed and optimized Spring Boot microservices supporting portfolio management, risk analytics, and trading workflows within the trading platform, improving Oracle query performance by 30%, reducing service latency by 20-25% during high-volume trading periods, and deploying high-throughput services on GCP Compute Engine to support millions of transactions per day with strong observability via Splunk.",
      "Maintained and optimized an event-driven and real-time analytics architecture using Kafka, WebSocket, and Spark/Hadoop, improving analytics data-processing throughput by 40% for distributed financial systems.",
    ],
  },
];

const projects = [
  {
    title: "PintOS: Uniprocessor Operating System",
    href: "https://cs162.org/static/proj/pintos-docs/",
    image: assets.pintos,
    imageAlt: "PintOS operating system diagram",
    summary:
      "Built a uniprocessor operating system in C and Assembly supporting multithreading, user programs, virtual memory, file-system operations, and strict priority scheduling.",
    highlights: [
      "Designed kernel modules for thread management, user programs, and virtual memory.",
      "Supported 15+ syscalls, floating-point operations, and file-system behavior.",
      "Wrote design documents for threads and user programs.",
    ],
    links: [
      ["Threads Design", assets.pintosThreads],
      ["User Programs Design", assets.pintosUserPrograms],
    ],
    tags: ["C", "Assembly", "Operating Systems"],
  },
  {
    title: "Gitlet: Version Control System",
    href: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/index.html",
    image: assets.gitlet,
    imageAlt: "Gitlet architecture diagram",
    summary:
      "Built a Java version-control system from scratch that mimics the core workflow of Git across commits, branches, checkout, logs, and merges.",
    highlights: [
      "Implemented 13 essential commands including add, commit, status, checkout, log, branch, and merge.",
      "Created a custom find command to search commit messages by keyword.",
      "Modeled persistent repository data across roughly 1,500 lines of Java.",
    ],
    tags: ["Java", "Data Structures", "Persistence"],
  },
  {
    title: "End-to-End Encrypted File Sharing System",
    href: "https://sp23.cs161.org/proj2/",
    image: assets.secureShare,
    imageAlt: "Hand-drafted workflow chart for encrypted file sharing",
    summary:
      "Built a Dropbox-like secure file sharing system in Go where the server cannot inspect or tamper with user data.",
    highlights: [
      "Designed login, upload, download, overwrite, append, share, and revoke flows.",
      "Implemented 8+ client APIs backed by cryptographic primitives.",
      "Applied data structures that reduce bandwidth use and keep file operations efficient.",
    ],
    tags: ["Go", "Cryptography", "Security"],
  },
  {
    title: "Pacman: AI Agent",
    href: "https://inst.eecs.berkeley.edu/~cs188/fa22/projects/",
    image: assets.pacman,
    imageAlt: "Pacman AI project animation",
    summary:
      "Applied AI techniques to Pacman agents across search, adversarial planning, probabilistic inference, reinforcement learning, and classification.",
    highlights: [
      "Implemented DFS, BFS, uniform-cost, A*, minimax, expectimax, and reinforcement-learning agents.",
      "Used Bayes nets, HMM inference, particle filtering, perceptrons, neural networks, and recurrent models.",
      "Reached 98% classification accuracy and about a 90% game win rate.",
    ],
    tags: ["Python", "AI", "Machine Learning"],
  },
  {
    title: "Fault-Tolerant MapReduce System",
    href: "https://cs162.org/static/hw/hw-map-reduce/",
    image: assets.mapreduce,
    imageAlt: "MapReduce system diagram",
    summary:
      "Implemented a distributed MapReduce system in C that handles multiple map and reduce tasks with RPC-style communication.",
    highlights: [
      "Used TCP/IP socket programming for scalable communication between workers.",
      "Added error handling and validation to protect data integrity.",
      "Modeled the core map and reduce workflow from the MapReduce paper.",
    ],
    tags: ["C", "Distributed Systems", "TCP/IP"],
  },
];

const coursework = [
  ["CS 161", "Computer Security", "Cryptography, operating-system security, network security, software security, defensive programming.", "C, Python, SQL", "https://www2.eecs.berkeley.edu/Courses/CS161/"],
  ["CS 162", "Operating Systems and System Programming", "Processes, synchronization, memory allocation, paging, loading, linking, scheduling, file systems, and I/O.", "C, Rust, RPC, TCP/IP, GCC", "https://www2.eecs.berkeley.edu/Courses/CS162/"],
  ["CS 169", "Software Engineering", "Designing, developing, testing, and maintaining large software systems.", "Ruby, JavaScript, Agile, Rails, Sinatra, RSpec", "https://www2.eecs.berkeley.edu/Courses/CS169/"],
  ["CS 188", "Introduction to Artificial Intelligence", "Search, game playing, inference, planning, uncertainty, machine learning, robotics, and perception.", "Python", "https://www2.eecs.berkeley.edu/Courses/CS188/"],
  ["CS 189/289A", "Introduction to Machine Learning", "Regression, classification, probabilistic models, density estimation, clustering, dimensionality reduction, and real-world applications.", "Python, TensorFlow", "https://www2.eecs.berkeley.edu/Courses/CS189/"],
  ["DATA 100/200", "Principles and Techniques of Data Science", "Data cleaning, EDA, visualization, inference, prediction, SQL, scalable processing, and decision-making.", "Python, SQL, Pandas", "https://data.berkeley.edu/education/courses/data-100"],
  ["CS 61A", "Structure and Interpretation of Computer Programs", "Programming and computer science through abstraction techniques for managing complexity.", "Python, SQL, Scheme", "https://www2.eecs.berkeley.edu/Courses/CS61A/"],
  ["CS 61B", "Data Structures", "Dynamic data structures, arrays, strings, hash tables, storage management, sorting, and searching.", "Java", "https://www2.eecs.berkeley.edu/Courses/CS61B/"],
  ["CS 61C", "Machine Structures", "Machine architecture, high-level language support, I/O, interrupts, memory management, and process switching.", "C, RISC-V, SIMD, GCC", "https://www2.eecs.berkeley.edu/Courses/CS61C/"],
  ["CS 70", "Discrete Mathematics and Probability Theory", "Logic, induction, modular arithmetic, polynomials, probability, independence, and Bayesian inference.", "LaTeX", "https://www2.eecs.berkeley.edu/Courses/CS70/"],
  ["EECS 16A/16B", "Designing Information Devices and Systems", "Machine learning, circuit design, control, signal processing, and linear algebra.", "Python, Launchpad", "https://www2.eecs.berkeley.edu/Courses/EECS16A/"],
];

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".content-scroll .section"));

    if (!("IntersectionObserver" in window)) {
      sections.forEach(section => section.classList.add("is-visible"));
      return undefined;
    }

    sections[0]?.classList.add("is-visible");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.01 }
    );

    sections.slice(1).forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canHover) {
      return undefined;
    }

    const cursor = document.createElement("div");
    cursor.className = "cursor-image";
    const trail = Array.from({ length: 4 }, (_, index) => {
      const item = document.createElement("div");
      item.className = `cursor-trail cursor-trail-${index + 1}`;
      document.body.appendChild(item);
      return item;
    });
    document.body.appendChild(cursor);

    const positions = trail.map(() => ({ x: -100, y: -100 }));
    const target = { x: -100, y: -100 };
    let frameId = 0;

    const animateTrail = () => {
      trail.forEach((item, index) => {
        const leader = index === 0 ? target : positions[index - 1];
        const point = positions[index];
        point.x += (leader.x - point.x) * 0.2;
        point.y += (leader.y - point.y) * 0.2;
        item.style.setProperty("--cursor-x", `${point.x}px`);
        item.style.setProperty("--cursor-y", `${point.y}px`);
      });

      frameId = window.requestAnimationFrame(animateTrail);
    };

    const moveCursor = event => {
      const clickable = event.target.closest("a, button, [role='button']");
      target.x = event.clientX;
      target.y = event.clientY;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.toggle("is-clickable", Boolean(clickable));
      cursor.classList.add("is-visible");
      trail.forEach(item => {
        item.classList.toggle("is-clickable", Boolean(clickable));
        item.classList.add("is-visible");
      });

      if (!frameId) {
        positions.forEach(point => {
          point.x = event.clientX;
          point.y = event.clientY;
        });
        frameId = window.requestAnimationFrame(animateTrail);
      }
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible");
      trail.forEach(item => item.classList.remove("is-visible"));
    };

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      window.cancelAnimationFrame(frameId);
      cursor.remove();
      trail.forEach(item => item.remove());
    };
  }, []);

  return h(
    React.Fragment,
    null,
    h(Header),
    h(
      "main",
      { className: "portfolio-shell" },
      h("aside", { className: "profile-rail" }, h(ProfileCard)),
      h("div", { className: "content-scroll" }, h(Hero), h(About), h(Projects), h(Coursework))
    ),
    h(Footer)
  );
}

function Header() {
  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand", href: "#top", "aria-label": "Marvin Hsin home" },
      "Marvin Hsin"
    ),
    h(
      "nav",
      { "aria-label": "Primary navigation" },
      h("a", { href: "#profile-details" }, "Profile"),
      h("a", { href: "#projects" }, "Projects"),
      h("a", { href: "#coursework" }, "Coursework"),
      h("a", { href: assets.resume, target: "_blank", rel: "noreferrer" }, "Resume")
    )
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero section", id: "top" },
    h(
      "div",
      { className: "hero-copy" },
      h("p", { className: "eyebrow" }, "Profile"),
      h("h2", null, "Building practical AI products and reliable systems."),
      h(
        "p",
        null,
        "Hi, I'm Marvin Hsin, a Software Engineer with a strong foundation in building impactful, AI-driven products and scalable backend systems."
      ),
      h(
        "p",
        null,
        "I graduated from UC Berkeley with a degree in Computer Science and have since built software across early-stage startup teams and FAANG-scale engineering environments."
      ),
      h(
        "div",
        { className: "profile-summary-grid" },
        h(SummaryBlock, { label: "Years of Experience", value: [h("span", { className: "tech-highlight", key: "years" }, "2+ years"), " across Apple Calendar backend services, RemoteNC full-stack product engineering, and financial trading systems."] }),
        h(SummaryBlock, { label: "Tech Stack", value: "Java Spring Boot, Python Django, React, TypeScript, Kafka, Docker, Kubernetes, AWS, PostgreSQL, Oracle DB, and Redis." })
      )
    )
  );
}

function ProfileCard() {
  return h(
    "div",
    { className: "hero-profile" },
    h(
      "div",
      { className: "portrait-frame" },
      h("img", { src: assets.headshot, alt: "Portrait of Cheng-Ying Hsin" })
    ),
    h("p", { className: "profile-kicker" }, "Cheng-Ying Hsin"),
    h("h1", null, "Marvin Hsin"),
    h("p", { className: "subtitle" }, "Software Engineer @ ex-Apple"),
    h("p", { className: "profile-email" }, "bdfb1997(at)berkeley.edu"),
    h(
      "dl",
      { className: "profile-facts" },
      profileHighlights.map(([label, value]) =>
        h(
          "div",
          { key: label },
          h("dt", null, label),
          h("dd", null, value)
        )
      )
    ),
    h(
      "div",
      { className: "link-row" },
      profileLinks.map(([label, href, description, icon]) =>
        h(
          "a",
          {
            key: label,
            href,
            target: href.startsWith("mailto:") ? undefined : "_blank",
            rel: "noreferrer",
            "aria-label": description,
            title: label,
          },
          h("img", { src: icon, alt: "", "aria-hidden": "true" })
        )
      )
    )
  );
}

function SummaryBlock({ label, value }) {
  return h(
    "section",
    { className: "summary-block" },
    h("h3", null, label),
    h("p", null, value)
  );
}

function About() {
  return h(
    "section",
    { className: "section profile-section" },
    h(
      "div",
      { className: "section-heading", id: "profile-details" },
      h("p", { className: "eyebrow" }, "Profile Details"),
      h("h2", null, "Backend depth with full-stack product execution.")
    ),
    h(
      "div",
      { className: "profile-detail-layout" },
      h(
        "div",
        { className: "profile-narrative" },
        h(
          "p",
          null,
          "At RemoteNC Inc., I led the development of AI-powered tools that streamlined manufacturing processes, leveraging Python Django, React, YOLO, and OpenAI APIs to reduce manual workflows and accelerate production quoting."
        ),
        h(
          "p",
          null,
          "Following that, I joined Apple on the Apple Calendar team. There, I developed and maintained high-performance backend services using Java Spring Boot, contributed to scalable API design, and worked to ensure a seamless and reliable calendar experience across iOS, macOS, and iCloud."
        ),
        h(
          "p",
          null,
          "My journey has taken me from maintaining trading system in finance during an internship at Global Key Advisors, to building full-stack systems in manufacturing industry at RemoteNC, and now to engineering large-scale services for Apple Calendar used by millions. Across it all, I've stayed passionate about building software that solves real-world problems with clarity and purpose."
        ),
        h(
          "p",
          null,
          "Across these roles, I care most about systems that are thoughtfully designed, dependable in production, and clear enough for people to trust and use every day."
        )
      ),
      h(
        "div",
        { className: "profile-side-panel" },
        h(
          "div",
          { className: "experience-list" },
          h("h3", null, "Experience"),
          experience.map(item => h(ExperienceItem, { item, key: `${item.company}-${item.role}` }))
        ),
        h(
          "div",
          { className: "info-grid" },
          h(InfoBlock, { title: "Education", items: education.map(([degree, school, date]) => [degree, date, school]) }),
          h(SkillsBlock),
          h(InfoBlock, { title: "Certification", items: ["AWS Certified Cloud Practitioner"] })
        )
      )
    )
  );
}

function ExperienceItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `experience-${item.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return h(
    "article",
    { className: `experience-item ${isOpen ? "is-open" : ""}` },
    h(
      "button",
      {
        className: "experience-heading",
        type: "button",
        "aria-expanded": isOpen,
        "aria-controls": panelId,
        onClick: () => setIsOpen(open => !open),
      },
      h(
        "div",
        null,
        h("p", { className: "experience-company" }, item.company),
        h("p", { className: "experience-role" }, item.role)
      ),
      h(
        "div",
        { className: "experience-meta" },
        h("span", null, item.location),
        h("span", null, item.dates)
      ),
      h("span", { className: "experience-toggle", "aria-hidden": "true" }, isOpen ? "Close" : "Details")
    ),
    isOpen
      ? h("ul", { id: panelId }, item.bullets.map(bullet => h("li", { key: bullet }, highlightTechTerms(bullet))))
      : null
  );
}

function highlightTechTerms(text) {
  return text.split(techPattern).map((part, index) =>
    highlightedTech.includes(part)
      ? h("span", { className: "tech-highlight", key: `${part}-${index}` }, part)
      : part
  );
}

function SkillsBlock() {
  return h(
    "section",
    { className: "info-block skills-block" },
    h("h3", null, "Technical Skills"),
    skills.map(([label, value]) =>
      h(
        "div",
        { className: "skill-row", key: label },
        h("p", null, label),
        h("span", null, value)
      )
    )
  );
}

function InfoBlock({ title, items }) {
  return h(
    "section",
    { className: "info-block" },
    h("h3", null, title),
    h(
      "div",
      { className: "info-plain-list" },
      items.map(item =>
        Array.isArray(item)
          ? h(
              "div",
              { className: "education-row", key: item.join("-") },
              h("p", null, `${item[0]}, ${item[1]}`),
              h("span", null, item[2])
            )
          : h("p", { key: item }, item)
      )
    )
  );
}

function Projects() {
  return h(
    "section",
    { className: "section", id: "projects" },
    h("div", { className: "section-heading" }, h("p", { className: "eyebrow" }, "Selected Work"), h("h2", null, "Projects")),
    h(
      "div",
      { className: "project-grid" },
      projects.map(project => h(ProjectCard, { key: project.title, project }))
    )
  );
}

function ProjectCard({ project }) {
  return h(
    "article",
    { className: "project-card" },
    h("a", { href: project.href, target: "_blank", rel: "noreferrer", className: "project-media" }, h("img", { src: project.image, alt: project.imageAlt })),
    h(
      "div",
      { className: "project-body" },
      h("div", { className: "tag-row" }, project.tags.map(tag => h("span", { key: tag }, tag))),
      h("h3", null, h("a", { href: project.href, target: "_blank", rel: "noreferrer" }, project.title)),
      h("p", null, project.summary),
      h("ul", null, project.highlights.map(item => h("li", { key: item }, item))),
      project.links
        ? h("div", { className: "doc-links" }, project.links.map(([label, href]) => h("a", { key: label, href, target: "_blank", rel: "noreferrer" }, label)))
        : null
    )
  );
}

function Coursework() {
  return h(
    "section",
    { className: "section", id: "coursework" },
    h("div", { className: "section-heading" }, h("p", { className: "eyebrow" }, "UC Berkeley"), h("h2", null, "Coursework")),
    h(
      "div",
      { className: "course-list" },
      coursework.map(([id, name, description, skills, href]) =>
        h(
          "article",
          { className: "course-row", key: id },
          h("a", { href, target: "_blank", rel: "noreferrer", className: "course-id" }, id),
          h("h3", null, name),
          h("p", null, description),
          h("span", null, skills)
        )
      )
    )
  );
}

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h("p", null, "© 2026 Marvin Hsin. All rights reserved."),
    h("a", { href: "mailto:bdfb1997@berkeley.edu" }, "bdfb1997@berkeley.edu")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
