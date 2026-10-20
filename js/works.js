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
      "Designed a config-driven registry that defines all 25 content block types in one JSON file, so a new block type ships with no migration, model, or table.",
      "Implemented token-based auth, Google Sign-In, and a hand-written RFC 6238 TOTP multi-factor flow with trusted-device tracking and per-route rate limiting.",
      "Made every page paint from its last payload while revalidating behind it, served repeat public visits within 5 minutes without an API call, and dropped a creator's cached page on every successful write through one global middleware.",
      "Shipped a bilingual EN/ID interface with drag-and-drop link reordering.",
      "Covered it with 1,390+ automated tests: 60+ Go tests on the API, including authentication, validation, and security-hardening checks, and 1,330+ on the React app.",
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
    slug: "snapshore",
    title: "Snapshore",
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
      "Moves photos from a phone to a laptop over a data cable or the same Wi-Fi, with no account or cloud, then deletes from the phone only what is proven safe on the laptop.",
    overview:
      "Snapshore moves photos and videos from a phone to a laptop over a data cable or the same Wi-Fi, then, if you want, deletes from the phone what is proven safe on the laptop. There is no account, no internet and no cloud in between. It is three native apps sharing one brand and one protocol: a Go and Wails desktop app for Windows and macOS, an Android app in Kotlin and Jetpack Compose, and an iPhone app in SwiftUI. The phone serves and the laptop fetches, so a hotspot or a picky network never blocks the transfer. On the laptop, the moved photos become a library to browse: a timeline, a world map of where they were taken, favourites and albums, all read from the files on disk.",
    contributions: [
      "Designed a versioned HTTPS protocol in which the phone serves its library and the laptop fetches it, with phones found by mDNS, a USB-tethering gateway probe, usbmux for iPhones on a cable, or a typed address.",
      "Built pairing on a typed code that both sides prove with PBKDF2 and HMAC, over self-signed TLS that the laptop pins after the first pairing.",
      "Streamed every file in chunks of at most 1 MiB with resume, flushed it to disk and matched its SHA-256 against the phone's before it counts as safe; only safe photos ever reach the system Trash or Recently Deleted, and only after the person confirms.",
      "Kept the phone side inside a 4 GB-RAM budget: 12,000 photos and a 3.75 GB 4K video moved off the emulator with the app peaking at 81.5 MB, every hash matching, and interrupted runs resuming without re-sending what was already copied.",
      "Turned the laptop into a photo library with a timeline that stays smooth across tens of thousands of photos and videos, and places read from each photo's GPS data and named offline from a city list bundled with the app.",
      "Covered the engine, the desktop UI and both phone apps with 680+ automated tests in Go, TypeScript, JUnit and XCTest, with the engine run against a fake phone that is the protocol's reference implementation.",
    ],
    stack:
      "Go · Wails · React · TypeScript · Kotlin · Jetpack Compose · Swift · SwiftUI · TLS · mDNS",
    insight:
      "The feature people want is the delete, and the delete is the dangerous part. Every design choice here exists so that a partial file or a wrong hash can never cost someone a photo.",
    cover: "img/works/project-snapshore",
    coverSize: "2608x1944",
    live: "https://snapshore.samz.my.id/",
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
      "Shipped it as a single Docker Compose stack that generates its own secrets and applies migrations on boot, covered by 150+ automated tests.",
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

  var scrollBeforeOpen = 0;

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
    scrollBeforeOpen = window.pageYOffset || document.documentElement.scrollTop || 0;
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

  // Closing the popup leaves the visitor where they were; only the contact
  // button in the popup jumps elsewhere.
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
    if (target) {
      goTo(target);
      return;
    }
    if (window.lenis && window.lenis.scrollTo) {
      window.lenis.scrollTo(scrollBeforeOpen, { immediate: true });
    } else {
      window.scrollTo(0, scrollBeforeOpen);
    }
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
