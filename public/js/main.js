(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const DAY = 86400000;

  // Parse "YYYY-MM-DDTHH:MM" as local time (avoids browser inconsistencies).
  function parseDate(str) {
    const [d, t = "00:00"] = str.split("T");
    const [y, m, day] = d.split("-").map(Number);
    const [hh, mm] = t.split(":").map(Number);
    return new Date(y, m - 1, day, hh, mm);
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const child of [].concat(children)) {
      if (child == null) continue;
      node.append(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }

  function externalLink(href, text, cls) {
    return el("a", { href, class: cls, target: "_blank", rel: "noopener" }, text);
  }

  const fmtDate = (d) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const fmtTime = (d) => d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  /* ---------- School info ---------- */
  $$("[data-class-year]").forEach((n) => (n.textContent = data.school.classYear));
  $$("[data-school-name]").forEach((n) => (n.textContent = data.school.name));
  document.title = `FDL Class of ${data.school.classYear}`;

  /* ---------- Ojibwe headings ---------- */
  const ojibwe = data.ojibwe || {};
  $$("[data-ojibwe]").forEach((n) => {
    const word = ojibwe[n.dataset.ojibwe];
    if (!word) return;
    n.textContent = word;
    n.lang = "oj";
    n.classList.add("is-ojibwe");
    n.hidden = false;
  });

  /* ---------- Graduation + countdown ---------- */
  const grad = data.graduation;
  const gradDate = parseDate(grad.datetime);
  $("[data-grad-date]").textContent = fmtDate(gradDate);
  const gradTime = grad.timeLabel || fmtTime(gradDate);
  $("[data-grad-time]").textContent = gradTime;
  $("[data-grad-location]").textContent = grad.location;
  $("[data-grad-address]").textContent = grad.address || "";

  const cd = {
    days: $('[data-cd="days"]'),
    hours: $('[data-cd="hours"]'),
    minutes: $('[data-cd="minutes"]'),
    seconds: $('[data-cd="seconds"]'),
  };
  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = gradDate - Date.now();
    if (diff <= 0) {
      $(".countdown").hidden = true;
      $(".cd-done").hidden = false;
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    cd.days.textContent = Math.floor(s / 86400);
    cd.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    cd.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    cd.seconds.textContent = pad(s % 60);
  }
  const timer = setInterval(tick, 1000);
  tick();

  /* ---------- Calendar export ---------- */
  const ymd = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const nextDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

  function calDetails(d) {
    return [d.description, d.link].filter(Boolean).join("\n\n");
  }

  function googleCalUrl(d) {
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: d.title,
      dates: `${ymd(d.when)}/${ymd(nextDay(d.when))}`,
      details: calDetails(d),
    });
    return `https://calendar.google.com/calendar/render?${params}`;
  }

  const icsEscape = (str) => String(str).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

  // Fold lines longer than 75 characters, as the iCalendar format requires.
  const icsFold = (line) => line.match(/.{1,74}/g).join("\r\n ");

  function icsEvent(d, stamp) {
    const uid = `${ymd(d.when)}-${d.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}@fdl-class-${data.school.classYear}`;
    return [
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${ymd(d.when)}`,
      `DTEND;VALUE=DATE:${ymd(nextDay(d.when))}`,
      `SUMMARY:${icsEscape(d.title)}`,
      d.description || d.link ? `DESCRIPTION:${icsEscape(calDetails(d))}` : null,
      d.link ? `URL:${d.link}` : null,
      "END:VEVENT",
    ].filter(Boolean).map(icsFold);
  }

  function downloadIcs(events, filename) {
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      `PRODID:-//FDL Class of ${data.school.classYear}//Senior Hub//EN`,
      "CALSCALE:GREGORIAN",
      ...events.flatMap((d) => icsEvent(d, stamp)),
      "END:VCALENDAR",
    ];
    const blob = new Blob([lines.join("\r\n") + "\r\n"], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = el("a", { href: url, download: filename });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const slug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function calendarMenu(d) {
    const ics = el("button", { type: "button", class: "cal-option" }, "Apple / Outlook (.ics)");
    ics.addEventListener("click", () => downloadIcs([d], `${slug(d.title)}.ics`));
    return el("details", { class: "cal" }, [
      el("summary", { class: "cal-toggle" }, "Add to calendar"),
      el("div", { class: "cal-menu" }, [
        externalLink(googleCalUrl(d), "Google Calendar", "cal-option"),
        ics,
      ]),
    ]);
  }

  // Close any open calendar menu when clicking elsewhere.
  document.addEventListener("click", (e) => {
    $$("details.cal[open]").forEach((menu) => {
      if (!menu.contains(e.target)) menu.open = false;
    });
  });

  /* ---------- Deadlines ---------- */
  const CATEGORY_LABEL = { fafsa: "FAFSA", scholarship: "Scholarship", college: "College App", school: "School" };

  const deadlines = data.deadlines
    .map((d) => ({ ...d, when: parseDate(d.date) }))
    .concat([{
      title: "Graduation Day 🎓",
      category: "school",
      when: gradDate,
      description: `${grad.location} · Time ${gradTime}`,
    }])
    .sort((a, b) => a.when - b.when);

  function startOfToday() {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }

  function status(d) {
    const today = startOfToday();
    const target = new Date(d.when.getFullYear(), d.when.getMonth(), d.when.getDate());
    const days = Math.round((target - today) / DAY);
    if (d.kind === "opens") {
      return days <= 0
        ? { key: "open", label: "Open now", days }
        : { key: "soon", label: days === 1 ? "Opens tomorrow" : `Opens in ${days} days`, days };
    }
    if (days < 0) return { key: "past", label: "Passed", days };
    if (days === 0) return { key: "urgent", label: "Due today", days };
    if (days <= 14) return { key: "urgent", label: days === 1 ? "1 day left" : `${days} days left`, days };
    if (days <= 45) return { key: "soon", label: `${days} days left`, days };
    return { key: "later", label: `${days} days left`, days };
  }

  const listEl = $("[data-deadline-list]");
  const emptyEl = $("[data-deadline-empty]");
  const showPastEl = $("[data-show-past]");
  let activeFilter = "all";

  function deadlineCard(d) {
    const st = status(d);
    const month = d.when.toLocaleDateString("en-US", { month: "short" });
    const year = d.when.getFullYear();
    return el("li", { class: `deadline deadline--${st.key}`, "data-category": d.category }, [
      el("div", { class: "deadline-date", "aria-hidden": "true" }, [
        el("span", { class: "dd-month", text: month }),
        el("span", { class: "dd-day", text: String(d.when.getDate()) }),
        el("span", { class: "dd-year", text: String(year) }),
      ]),
      el("div", { class: "deadline-body" }, [
        el("div", { class: "deadline-tags" }, [
          el("span", { class: `tag tag-${d.category}`, text: CATEGORY_LABEL[d.category] || d.category }),
          d.kind === "opens" ? el("span", { class: "tag tag-opens", text: "Opens" }) : null,
          d.verify ? el("span", { class: "tag tag-verify", text: "Confirm date" }) : null,
        ]),
        el("h3", { class: "deadline-title", text: d.title }),
        el("p", { class: "sr-only", text: fmtDate(d.when) }),
        d.description ? el("p", { class: "deadline-desc", text: d.description }) : null,
        el("div", { class: "deadline-actions" }, [
          d.link ? externalLink(d.link, "Go to site →", "deadline-link") : null,
          st.days >= 0 ? calendarMenu(d) : null,
        ]),
      ]),
      el("div", { class: `deadline-status status-${st.key}` }, [
        el("span", { class: "status-dot", "aria-hidden": "true" }),
        el("span", { text: st.label }),
      ]),
    ]);
  }

  function renderNextUp() {
    const box = $("[data-next-up]");
    box.replaceChildren();
    const upcoming = deadlines.filter((d) => d.kind !== "opens" && status(d).days >= 0);
    const next = upcoming[0];
    if (!next) return;
    const st = status(next);
    box.append(
      el("div", { class: "next-up-card" }, [
        el("div", {}, [
          el("p", { class: "next-up-label", text: "Next deadline" }),
          el("p", { class: "next-up-title", text: next.title }),
          el("p", { class: "next-up-date", text: fmtDate(next.when) }),
        ]),
        el("div", { class: "next-up-count" }, [
          el("span", { class: "next-up-num", text: String(st.days) }),
          el("span", { class: "next-up-unit", text: st.days === 1 ? "day left" : "days left" }),
        ]),
      ])
    );
  }

  function renderDeadlines() {
    listEl.replaceChildren();
    const showPast = showPastEl.checked;
    const items = deadlines.filter((d) => {
      if (activeFilter !== "all" && d.category !== activeFilter) return false;
      if (!showPast && d.kind !== "opens" && status(d).key === "past") return false;
      return true;
    });
    items.forEach((d) => listEl.append(deadlineCard(d)));
    emptyEl.hidden = items.length > 0;
  }

  $$("[data-filter]").forEach((btn) =>
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      $$("[data-filter]").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      renderDeadlines();
    })
  );
  showPastEl.addEventListener("change", renderDeadlines);
  $("[data-cal-all]").addEventListener("click", () => {
    const upcoming = deadlines.filter((d) => status(d).days >= 0);
    downloadIcs(upcoming, `fdl-class-of-${data.school.classYear}-deadlines.ics`);
  });
  renderNextUp();
  renderDeadlines();

  /* ---------- Checklist ---------- */
  const CHECK_KEY = `fdl-class-${data.school.classYear}-checklist`;
  function loadChecks() {
    try {
      return JSON.parse(localStorage.getItem(CHECK_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveChecks(checks) {
    try {
      localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
    } catch (e) {
      /* Storage unavailable (e.g. private browsing): progress just isn't saved. */
    }
  }

  const checks = loadChecks();
  const checkGrid = $("[data-checklist]");
  const checkboxes = [];
  data.checklist.forEach((group) => {
    checkGrid.append(
      el("div", { class: "card check-group" }, [
        el("h3", { text: group.group }),
        el("ul", { class: "check-items" }, group.items.map((item) => {
          const box = el("input", { type: "checkbox", id: `check-${item.id}` });
          box.checked = Boolean(checks[item.id]);
          box.addEventListener("change", () => {
            if (box.checked) checks[item.id] = true;
            else delete checks[item.id];
            saveChecks(checks);
            updateProgress();
          });
          checkboxes.push(box);
          return el("li", {}, [box, el("label", { for: `check-${item.id}`, text: item.text })]);
        })),
      ])
    );
  });

  function updateProgress() {
    const done = checkboxes.filter((b) => b.checked).length;
    const pct = checkboxes.length ? Math.round((done / checkboxes.length) * 100) : 0;
    $("[data-check-count]").textContent = done;
    $("[data-check-total]").textContent = checkboxes.length;
    const bar = $("[data-check-bar]");
    bar.setAttribute("aria-valuenow", String(pct));
    bar.firstElementChild.style.width = `${pct}%`;
  }
  $("[data-check-reset]").addEventListener("click", () => {
    if (!confirm("Clear all your check marks?")) return;
    checkboxes.forEach((b) => (b.checked = false));
    Object.keys(checks).forEach((k) => delete checks[k]);
    saveChecks(checks);
    updateProgress();
  });
  updateProgress();

  /* ---------- FAFSA ---------- */
  const f = data.fafsa;
  const steps = $("[data-fafsa-steps]");
  f.steps.forEach((s) => steps.append(el("li", { text: s })));
  $("[data-fafsa-apply]").href = f.applyLink;
  $("[data-fafsa-fsaid]").href = f.fsaIdLink;

  /* ---------- Scholarships ---------- */
  const schGrid = $("[data-scholarships]");
  data.scholarships.forEach((s) => {
    schGrid.append(
      el("article", { class: `card scholarship${s.featured ? " is-featured" : ""}` }, [
        s.featured ? el("span", { class: "ribbon", text: "Featured" }) : null,
        el("p", { class: "sch-org", text: s.org }),
        el("h3", { text: s.name }),
        el("dl", { class: "sch-meta" }, [
          el("div", {}, [el("dt", { text: "Award" }), el("dd", { text: s.amount })]),
          el("div", {}, [el("dt", { text: "Deadline" }), el("dd", { text: s.deadline })]),
        ]),
        el("p", { class: "sch-elig" }, [el("strong", { text: "Who: " }), s.eligibility]),
        el("p", { class: "sch-how" }, [el("strong", { text: "How: " }), s.howTo]),
        externalLink(s.link, "Visit site", "btn btn-blue btn-sm"),
      ])
    );
  });

  /* ---------- Colleges ---------- */
  const COLLEGE_GROUPS = [
    { region: "home", title: "Close to Home" },
    { region: "national", title: "Across the Country" },
  ];
  const colWrap = $("[data-colleges]");
  COLLEGE_GROUPS.forEach((g) => {
    const schools = data.colleges.filter((c) => (c.region || "home") === g.region);
    if (!schools.length) return;
    colWrap.append(
      el("h3", { class: "sub-head college-group", text: g.title }),
      el("div", { class: "college-grid" }, schools.map((c) =>
        el("article", { class: "card college" }, [
          el("div", { class: "college-top" }, [
            el("p", { class: "college-type", text: c.type }),
            c.promise ? el("span", { class: "tag tag-promise", text: "Promise" }) : null,
            c.waiver ? el("span", { class: "tag tag-promise", text: "Tuition Waiver" }) : null,
          ]),
          el("h3", { text: c.name }),
          el("p", { class: "college-loc", text: c.location }),
          c.note ? el("p", { class: "college-note", text: c.note }) : null,
          el("p", { class: "college-deadline" }, [el("span", { text: "Deadlines: " }), c.deadline]),
          externalLink(c.link, "Apply / learn more →", "college-link"),
        ])
      ))
    );
  });

  /* ---------- Essays ---------- */
  const tipsGrid = $("[data-essay-tips]");
  data.essay.tips.forEach((t, i) =>
    tipsGrid.append(
      el("div", { class: "tip" }, [
        el("span", { class: "tip-num", text: String(i + 1).padStart(2, "0") }),
        el("h3", { text: t.title }),
        el("p", { text: t.body }),
      ])
    )
  );
  const resList = $("[data-essay-resources]");
  data.essay.resources.forEach((r) => resList.append(externalLink(r.link, r.name + " ↗", "resource")));

  /* ---------- Letters of recommendation ---------- */
  $("[data-letters-intro]").textContent = data.letters.intro;
  const lettersGrid = $("[data-letters-tips]");
  data.letters.tips.forEach((t, i) =>
    lettersGrid.append(
      el("div", { class: "tip" }, [
        el("span", { class: "tip-num", text: String(i + 1).padStart(2, "0") }),
        el("h3", { text: t.title }),
        el("p", { text: t.body }),
      ])
    )
  );

  /* ---------- Quotes ---------- */
  const quoteGrid = $("[data-quotes]");
  const quoteEmpty = $("[data-quotes-empty]");
  const quoteCards = data.quotes.map((q) => {
    const card = el("figure", { class: "quote" }, [
      el("blockquote", {}, [el("p", { text: q.quote })]),
      el("figcaption", {}, [
        el("span", { class: "quote-name", text: q.name }),
        q.plans ? el("span", { class: "quote-plans", text: q.plans }) : null,
      ]),
    ]);
    card.dataset.search = `${q.name} ${q.quote} ${q.plans || ""}`.toLowerCase();
    quoteGrid.append(card);
    return card;
  });
  $("[data-quote-filter]").addEventListener("input", (e) => {
    const term = e.target.value.trim().toLowerCase();
    let shown = 0;
    quoteCards.forEach((c) => {
      const match = !term || c.dataset.search.includes(term);
      c.hidden = !match;
      if (match) shown++;
    });
    quoteEmpty.hidden = shown > 0;
  });

  /* ---------- Contact card ---------- */
  const contact = data.contact;
  const contactRows = [
    ["Email", contact.email && el("a", { href: `mailto:${contact.email}`, text: contact.email })],
    ["Phone", contact.phone && el("a", { href: `tel:${contact.phone.replace(/[^\d+]/g, "")}`, text: contact.phone })],
    ["Room", contact.room],
    ["Office hours", contact.hours],
  ].filter(([, v]) => v);
  if (contact.name || contactRows.length) {
    $("[data-contact-title]").textContent = contact.title || "Senior Advisor";
    $("[data-contact-name]").textContent = contact.name || "";
    const list = $("[data-contact-list]");
    contactRows.forEach(([k, v]) => list.append(el("div", {}, [el("dt", { text: k }), el("dd", {}, [v])])));
    $("#contact").hidden = false;
  }

  /* ---------- Footer ---------- */
  $("[data-contact-note]").textContent = contact.note;
  if (data.lastUpdated) {
    const updated = parseDate(data.lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    $("[data-last-updated]").textContent = `Last updated ${updated}`;
  }

  /* ---------- Mobile nav ---------- */
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  $$("a", nav).forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    })
  );

  // Refresh deadline statuses when the day rolls over.
  let lastDay = startOfToday().getTime();
  setInterval(() => {
    const now = startOfToday().getTime();
    if (now !== lastDay) {
      lastDay = now;
      renderNextUp();
      renderDeadlines();
    }
  }, 60000);
})();
