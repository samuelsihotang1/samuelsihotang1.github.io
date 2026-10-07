// ------------------------------------------------
// File name: works.js
// Single source of truth for the portfolio.
// Renders the card grid (#worksGrid) and the
// case study popup (#workModal) on index.html.
// ------------------------------------------------

var WORKS = [
  {
    slug: "siniaja",
    title: "SiniAja!",
    type: "Link-in-Bio Platform",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "REST API",
      "Auth & Security",
      "Bilingual UI",
      "Automated Testing",
    ],
    summary:
      "A link-in-bio platform for creators and small businesses, with a public page and a no-code dashboard for links, media, a mini-shop, and polls.",
    overview:
      "A link-in-bio platform for creators, small businesses, and freelancers. Every user gets a public page plus a no-code dashboard to manage links, media, a mini-shop, and polls. It is built as an API-only Go (Gin) backend paired with a React and TypeScript single-page app, so the public page and the dashboard consume exactly the same contract.",
    contributions: [
      "Built an API-only Go backend with Gin and GORM serving 79 REST endpoints across 10 database tables.",
      "Designed a config-driven block registry that renders every content block from polymorphic models, so new block types ship without schema changes.",
      "Implemented token-based auth, Google Sign-In, and a hand-written RFC 6238 TOTP multi-factor flow with trusted-device tracking and per-route rate limiting.",
      "Cut repeated database work on public profile loads with a settle-period payload cache invalidated by global write middleware.",
      "Shipped a bilingual EN/ID interface with drag-and-drop link reordering.",
      "Covered the backend with 65 automated Go tests, including authentication, validation, and security-hardening checks.",
    ],
    stack:
      "Go · Gin · GORM · React · TypeScript · Vite · Tailwind CSS · MySQL",
    insight:
      "This build is where I care most about contracts. One API, two very different consumers, and a test suite that lets me change the schema without guessing what breaks.",
    cover: "img/works/project-siniaja",
    coverSize: "1304x972",
    live: "https://siniaja.samz.my.id/",
    repo: null,
  },
  {
    slug: "photopho",
    title: "Photopho",
    type: "Phone-to-Laptop Photo Transfer",
    role: "Software Engineer",
    categories: [
      "Cross-Platform Apps",
      "Network Protocol",
      "Security & Pairing",
      "Data Integrity",
      "Automated Testing",
    ],
    summary:
      "Moves photos from a phone to a laptop over a data cable or the same Wi-Fi, then deletes from the phone only what is proven safe on the laptop.",
    overview:
      "Photopho moves photos and videos from a phone to a laptop over a data cable or the same Wi-Fi, then, if you want, deletes from the phone what is proven safe on the laptop. It is three native apps sharing one brand and one protocol: a Go and Wails desktop app for Windows and macOS, an Android app in Kotlin and Jetpack Compose, and an iPhone app in SwiftUI. The phone serves and the laptop fetches, so a hotspot or a picky network never blocks the transfer.",
    contributions: [
      "Designed a versioned HTTPS protocol in which the phone serves its library and the laptop fetches it, with phones found by mDNS, a USB-tethering gateway probe, usbmux for iPhones on a cable, or a typed address.",
      "Built pairing on a typed code that both sides prove with PBKDF2 and HMAC, over self-signed TLS that the laptop pins after the first pairing.",
      "Streamed every file in chunks of at most 1 MiB with resume, flushed it to disk and matched its SHA-256 against the phone's before it counts as safe; only safe photos ever reach the system Trash or Recently Deleted, and only after the person confirms.",
      "Kept the phone side inside a 4 GB-RAM budget: 12,000 photos and a 3.75 GB 4K video moved off the emulator with the app peaking at 81.5 MB, every hash matching, and interrupted runs resuming without re-sending what was already copied.",
      "Covered the engine and both phone servers with 180+ automated tests in Go, JUnit and XCTest, against a fake phone that is the protocol's reference implementation.",
    ],
    stack:
      "Go · Wails · React · TypeScript · Kotlin · Jetpack Compose · Swift · SwiftUI · TLS · mDNS",
    insight:
      "The feature people want is the delete, and the delete is the dangerous part. Every design choice here exists so that a partial file or a wrong hash can never cost someone a photo.",
    cover: "img/works/project-photopho",
    coverSize: "2608x1944",
    live: "https://photopho.samz.my.id/",
    repo: null,
  },
  {
    slug: "habit-shaper",
    title: "Habit Shaper",
    type: "Habit Tracker Web App",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "REST API",
      "Auth & Security",
      "Containerization",
      "Automated Testing",
    ],
    summary:
      "A lightweight habit tracker for building good habits and breaking bad ones, with daily check-ins, streaks, clean streaks, and goals.",
    overview:
      "A lightweight web app for building positive habits and breaking negative ones through daily tracking. Habits to build get a check-in streak and a weekly completion rate; habits to break get a clean streak that counts up on its own until a relapse is logged; goals ride on a habit's streak. It is a Fastify and TypeScript API behind a React single-page app, and the whole stack starts with one docker compose up.",
    contributions: [
      "Built a Fastify and TypeScript REST API and a React 19 SPA, served on one origin by nginx so the API needs no CORS setup.",
      "Derived streaks, clean streaks, and weekly completion rates from a per-day log in each user's own time zone, so a relapse or a back-dated check-in is a single row change, never a drifting counter.",
      "Implemented email-first sign-in, hand-written RFC 6238 TOTP two-factor authentication with replay protection and trusted browsers, and password reset proven by an authenticator code.",
      "Hardened the API with argon2id password hashing, AES-256-GCM encrypted secrets, Redis-backed rate limits, and per-user query scoping on every read and write.",
      "Shipped it as a single Docker Compose stack that generates its own secrets and applies migrations on boot, covered by 130+ automated tests.",
    ],
    stack:
      "React 19 · TypeScript · Vite · Tailwind CSS · Node.js · Fastify · MySQL · Redis · Docker · nginx",
    insight:
      "The point was to keep a small product honest: nothing stored that can be derived, and the rule that keeps one account out of another's data pinned by tests proven to fail with the rule removed.",
    cover: "img/works/project-habit-shaper",
    coverSize: "2608x1944",
    live: "https://habit.samz.my.id/",
    repo: null,
  },
  {
    slug: "mavie-cinema",
    title: "Mavie Cinema",
    type: "Cinema Booking Platform",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "Payments & Subscriptions",
      "Containerization",
      "Performance",
    ],
    summary:
      "A cinema website with subscription and payment gateway features, modernised to Laravel 12 and served through Laravel Octane on FrankenPHP.",
    overview:
      "A cinema website equipped with subscription and payment gateway features. The application is built with the Laravel Framework and React, containerised with Docker, and served through Laravel Octane on FrankenPHP so that repeat requests skip the usual PHP bootstrap cost.",
    contributions: [
      "Upgraded the system from Laravel 9 to Laravel 12 for modernization.",
      "Fully containerized the application with Docker for scalable, portable deployment.",
      "Improved system performance with Laravel Octane and FrankenPHP integration.",
      "Developed a subscription feature enabling recurring billing and user plan management.",
      "Developed an integrated payment gateway supporting secure and reliable transactions.",
    ],
    stack:
      "Laravel · PHP · React · Vite · Docker · Laravel Octane · FrankenPHP · MySQL",
    insight:
      "Most of the value here came from the runtime, not the features. Moving the app onto Octane and FrankenPHP changed how the whole product felt under load.",
    cover: "img/works/project1",
    coverSize: "1304x972",
    live: null,
    repo: "https://github.com/samuelsihotang1/Mavie-Cinema",
  },
  {
    slug: "transaction-w-auth",
    title: "Transaction w Auth",
    type: "Transaction & Auth System",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "REST API",
      "Auth & Security",
      "CI/CD",
    ],
    summary:
      "A transaction platform on a .NET Core backend with a React frontend, managing products, orders, and user authentication end to end.",
    overview:
      "A transaction platform with an ASP.NET Core backend written in C# and a React, Vite, and Tailwind CSS frontend. The system manages products, orders, and user authentication end to end, and both halves of the stack ship through their own deployment pipeline.",
    contributions: [
      "Developed an ASP.NET Core backend API with a modular architecture of controllers, models, DTOs, DAOs, and interfaces for maintainability and scalability.",
      "Integrated authentication and authorization middleware to secure API endpoints.",
      "Implemented Entity Framework Core with migrations for database schema management and persistence.",
      "Built a React and Vite frontend with Tailwind CSS, delivering a responsive and modern interface.",
      "Configured CI/CD pipelines, with Vercel for the frontend and a .NET build pipeline for the backend.",
    ],
    stack:
      "ASP.NET Core · C# · Entity Framework Core · React · Vite · Tailwind CSS · SQL Server · JWT",
    insight:
      "A deliberate exercise in layering. Keeping controllers, DTOs, and data access separate is what made the auth middleware easy to slot in later.",
    cover: "img/works/project5",
    coverSize: "2608x1944",
    live: "https://netcore-app-samz.vercel.app",
    repo: "https://github.com/samuelsihotang1/transaction-w-auth",
  },
  {
    slug: "bebras-help-desk",
    title: "Bebras Help Desk Application",
    type: "Discussion Forum for Educators",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "Community Forum",
      "Notifications",
      "Admin Panel",
    ],
    summary:
      "A website-based forum where educators discuss topics, share knowledge, and answer each other's questions, with moderation tooling behind it.",
    overview:
      "A website-based forum that assists educators in discussing various topics, sharing knowledge, and engaging in mutual question-and-answer sessions. Alongside the public forum it carries the moderation tooling an open community needs: reporting, search, and an admin panel over everything members post.",
    contributions: [
      "Implemented CRUD functionality for questions, answers, and comments to support dynamic user interactions.",
      "Developed follow and unfollow for users, plus topic associations for personalized engagement.",
      "Developed an upvote and downvote system, a reporting mechanism, and question search.",
      "Built notification and profile management modules with real-time website alerts and email delivery.",
      "Developed an admin panel for managing user-generated content across questions, answers, and topics.",
    ],
    stack: "Laravel · PHP · Livewire · Alpine.js · Bootstrap · MySQL",
    insight:
      "Community products live or die on moderation. Building the admin side with the same care as the public side is the part that made this one usable.",
    cover: "img/works/project2",
    coverSize: "1304x972",
    live: null,
    repo: "https://github.com/samuelsihotang1/Bebras-Help-Desk-Application",
  },
  {
    slug: "laundry-del",
    title: "Laundry Del",
    type: "Laundry Management System",
    role: "Full Stack Developer",
    categories: [
      "Full-Stack Build",
      "Role-Based Access",
      "Admin Panel",
      "Responsive UI",
    ],
    summary:
      "A website that helps students and laundry staff track every order and clothing item, behind a single login that switches between both roles.",
    overview:
      "A website that helps students and laundry staff find out information about all orders and student clothes. Students submit and manage their own items, staff see every record, and both enter through one login page that toggles between the two roles without a redirect.",
    contributions: [
      "Developed a laundry listing feature allowing students to submit and manage their clothing items.",
      "Built an admin panel enabling laundry staff to access all student laundry records.",
      "Developed a unified login page with toggle-based role switching for students and staff, with no page redirection.",
      "Implemented the entire front-end interface with Tailwind CSS for a responsive, modern UI.",
    ],
    stack: "Laravel · PHP · Livewire · Tailwind CSS · MySQL",
    insight:
      "Two audiences, one door. Collapsing the sign-in flow into a single toggled page removed the most common support question before it existed.",
    cover: "img/works/project3",
    coverSize: "1304x972",
    live: null,
    repo: "https://github.com/samuelsihotang1/Laundry-Del",
  },
  {
    slug: "cafetaria",
    title: "Cafetaria",
    type: "Cafeteria Menu Rating App",
    role: "Full Stack Developer",
    categories: ["Full-Stack Build", "Voting System", "Livewire Components"],
    summary:
      "A website that helps cafeteria operators work out how their food menus are rated, with every interaction handled without a page refresh.",
    overview:
      "A website that assists cafeteria operators in determining the ratings of the food menus they offer. Operators manage the menu, diners vote on it, and every interaction runs through Livewire components so the page never has to reload.",
    contributions: [
      "Implemented create and delete functionality for food items to allow flexible content management.",
      "Developed a food voting system with create and edit capabilities to enable user-driven ranking.",
      "Integrated all interaction processes into Livewire components for a seamless experience without page refreshes.",
    ],
    stack: "Laravel · PHP · Livewire · Tailwind CSS · MySQL",
    insight:
      "A small product, but a clean demonstration of server-driven interactivity: no separate frontend, and still nothing reloads.",
    cover: "img/works/project4",
    coverSize: "1304x972",
    live: null,
    repo: "https://github.com/samuelsihotang1/Cafetaria",
  },
];

(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Covers ship as <cover>-640.webp and <cover>-1280.webp (see coverSize for the ratio).
  // The image stays hidden over a shimmering skeleton until it has loaded.
  function coverImg(work, alt, sizes, lazy) {
    var size = work.coverSize.split("x");
    var height = Math.round((640 * size[1]) / size[0]);
    return (
      '<img class="skeleton-img" src="' +
      escapeHtml(work.cover) +
      '-640.webp" srcset="' +
      escapeHtml(work.cover) +
      "-640.webp 640w, " +
      escapeHtml(work.cover) +
      '-1280.webp 1280w" sizes="' +
      sizes +
      '" width="640" height="' +
      height +
      '" alt="' +
      escapeHtml(alt) +
      '"' +
      (lazy ? ' loading="lazy"' : "") +
      ' decoding="async" />'
    );
  }

  function findWork(slug) {
    for (var i = 0; i < WORKS.length; i++) {
      if (WORKS[i].slug === slug) {
        return i;
      }
    }
    return -1;
  }


  // --------------------------------------------- //
  // Works Grid Start
  // --------------------------------------------- //
  function renderWorksGrid() {
    var grid = document.getElementById("worksGrid");
    if (!grid) {
      return;
    }

    grid.innerHTML = WORKS.map(function (work) {
      return (
        '<article class="col-12 col-xl-6 grid-item work-card animate-card-2">' +
        '<div class="work-card__inner">' +
        '<button class="work-card__cover" type="button" data-work-open="' +
        escapeHtml(work.slug) +
        '" aria-label="View project details: ' +
        escapeHtml(work.title) +
        '">' +
        coverImg(
          work,
          work.title + " project cover",
          "(min-width: 1200px) 30vw, 100vw",
          true
        ) +
        '<span class="work-card__arrow" aria-hidden="true"><i class="ph-bold ph-arrow-up-right"></i></span>' +
        "</button>" +
        '<div class="work-card__body">' +
        '<p class="work-card__kicker">' +
        escapeHtml(work.categories.join(" · ")) +
        "</p>" +
        '<h3 class="work-card__title">' +
        escapeHtml(work.title) +
        "</h3>" +
        '<p class="small work-card__summary">' +
        escapeHtml(work.summary) +
        "</p>" +
        '<div class="work-card__actions">' +
        '<button class="btn btn-default btn-hover btn-hover-accent work-card__btn" type="button" data-work-open="' +
        escapeHtml(work.slug) +
        '">' +
        '<span class="btn-caption">View Project</span>' +
        '<i class="ph-bold ph-arrow-right"></i></button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }
  // --------------------------------------------- //
  // Works Grid End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Work Case Study Popup Start
  // --------------------------------------------- //
  function metaRow(label, value) {
    return (
      '<div class="work-case__meta-row">' +
      '<span class="work-case__meta-label">' +
      escapeHtml(label) +
      "</span>" +
      '<span class="work-case__meta-value">' +
      escapeHtml(value) +
      "</span>" +
      "</div>"
    );
  }

  function navLink(work, label, direction) {
    return (
      '<button class="work-case__nav-link work-case__nav-link--' +
      direction +
      '" type="button" data-work-open="' +
      escapeHtml(work.slug) +
      '">' +
      '<span class="work-case__nav-label">' +
      escapeHtml(label) +
      "</span>" +
      '<span class="work-case__nav-title">' +
      escapeHtml(work.title) +
      "</span>" +
      "</button>"
    );
  }

  function caseStudyMarkup(index) {
    var work = WORKS[index];
    var previous = WORKS[(index - 1 + WORKS.length) % WORKS.length];
    var next = WORKS[(index + 1) % WORKS.length];

    var badges = work.categories
      .map(function (category) {
        return (
          '<span class="rounded-tag tag-outline">' +
          escapeHtml(category) +
          "</span>"
        );
      })
      .join("");

    // one overlay action on the screenshot: the live site if it exists,
    // otherwise the repository.
    var visit = work.live
      ? { url: work.live, label: "Visit live" }
      : work.repo
      ? { url: work.repo, label: "View source" }
      : null;
    var visitBtn = visit
      ? '<a class="work-case__visit" href="' +
        escapeHtml(visit.url) +
        '" target="_blank" rel="noopener">' +
        "<span>" +
        escapeHtml(visit.label) +
        "</span>" +
        '<i class="ph-bold ph-arrow-up-right"></i></a>'
      : "";

    return (
      '<div class="work-case__hero">' +
      '<div class="work-case__hero-info">' +
      '<p class="work-case__kicker">' +
      escapeHtml(work.type) +
      "</p>" +
      '<h3 class="work-case__title" id="workModalTitle">' +
      escapeHtml(work.title) +
      "</h3>" +
      '<p class="work-case__role">' +
      escapeHtml(work.role) +
      "</p>" +
      '<div class="work-case__badges">' +
      badges +
      "</div>" +
      '<button class="work-case__cta" type="button" data-work-contact>' +
      "<span>Work with me</span>" +
      '<i class="ph-bold ph-arrow-right"></i></button>' +
      "</div>" +
      '<figure class="work-case__media">' +
      coverImg(
        work,
        work.title + " screenshot",
        "(min-width: 1200px) 60vw, 100vw",
        false
      ) +
      visitBtn +
      "</figure>" +
      "</div>" +
      '<div class="work-case__section">' +
      "<h4>About this project</h4>" +
      '<p class="work-case__lead">' +
      escapeHtml(work.overview) +
      "</p>" +
      "</div>" +
      '<div class="work-case__section">' +
      "<h4>What I built</h4>" +
      '<ul class="work-case__list">' +
      work.contributions
        .map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="work-case__section">' +
      "<h4>Project details</h4>" +
      '<div class="work-case__meta">' +
      metaRow("Role", work.role) +
      metaRow("Project type", work.type) +
      metaRow("Services", work.categories.join(" · ")) +
      metaRow("Technology", work.stack) +
      "</div>" +
      "</div>" +
      '<div class="work-case__section">' +
      "<h4>How this fits my work</h4>" +
      '<p class="work-case__lead">' +
      escapeHtml(work.insight) +
      "</p>" +
      "</div>" +
      '<nav class="work-case__nav" aria-label="Project navigation">' +
      navLink(previous, "Previous project", "prev") +
      navLink(next, "Next project", "next") +
      "</nav>"
    );
  }

  var modal = document.getElementById("workModal");
  var modalBody = document.getElementById("workModalBody");

  function openWork(slug) {
    if (!modal || !modalBody) {
      return;
    }
    var index = findWork(slug);
    if (index === -1) {
      return;
    }

    modalBody.innerHTML =
      '<div class="work-case__inner">' + caseStudyMarkup(index) + "</div>";
    modalBody.scrollTop = 0;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("work-modal-is-open");
    if (window.lenis) {
      window.lenis.stop();
    }

    var closeBtn = modal.querySelector(".work-modal__close");
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  // Closing the popup always drops the visitor back at the top of the page.
  function closeWork(target) {
    if (!modal || !modal.classList.contains("is-open")) {
      return;
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalBody.innerHTML = "";
    document.body.classList.remove("work-modal-is-open");
    if (window.lenis) {
      window.lenis.start();
    }
    goTo(target || "#home");
  }

  function goTo(selector) {
    var section = document.querySelector(selector);
    var top = section ? section.offsetTop : 0;

    if (window.lenis && window.lenis.scrollTo) {
      window.lenis.scrollTo(top);
      return;
    }
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  document.addEventListener("click", function (event) {
    var opener = event.target.closest
      ? event.target.closest("[data-work-open]")
      : null;
    if (opener) {
      event.preventDefault();
      openWork(opener.getAttribute("data-work-open"));
      return;
    }

    if (event.target.closest && event.target.closest("[data-work-contact]")) {
      event.preventDefault();
      closeWork("#contact");
      return;
    }

    if (event.target.closest && event.target.closest("[data-work-close]")) {
      event.preventDefault();
      closeWork();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      closeWork();
    }
  });
  // --------------------------------------------- //
  // Work Case Study Popup End
  // --------------------------------------------- //

  // Drop the skeleton once a cover has loaded (or failed, so it never shimmers forever).
  function revealImage(event) {
    var img = event.target;
    if (img.classList && img.classList.contains("skeleton-img")) {
      img.classList.add("is-loaded");
    }
  }
  document.addEventListener("load", revealImage, true);
  document.addEventListener("error", revealImage, true);

  renderWorksGrid();
})();
