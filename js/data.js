/*
 * ============================================================
 *  SITE CONTENT — edit this file to update the website.
 * ============================================================
 *  You do not need to touch index.html, styles.css or main.js
 *  to change dates, deadlines, links or senior quotes.
 *
 *  Dates use the format "YYYY-MM-DDTHH:MM" (24-hour clock, local time).
 *  Example: "2027-05-28T18:00" = May 28, 2027 at 6:00 PM.
 *
 *  Any item marked `verify: true` shows a small "Confirm date" tag on
 *  the site. Remove it once you have confirmed the date with the
 *  official source.
 * ============================================================
 */

window.SITE_DATA = {
  school: {
    name: "Fond du Lac Ojibwe School",
    classYear: 2027,
    tagline: "One hub for our seniors, families, and staff.",
  },

  graduation: {
    // PLACEHOLDER — replace with the official date & time once announced.
    datetime: "2027-05-28T18:00",
    location: "Fond du Lac Ojibwe School",
    address: "49 University Rd, Cloquet, MN 55720",
    verify: true,
    notes: [
      "Seniors: arrive early for line-up — exact time will be announced.",
      "Cap & gown details will be shared by the senior advisors.",
    ],
  },

  /*
   * DEADLINES — shown on the deadline board, sorted by date.
   *  category: "fafsa" | "scholarship" | "college" | "school"
   *  opens:    optional date the application opens
   *  date:     the deadline itself
   */
  deadlines: [
    {
      title: "2027–28 FAFSA is open",
      category: "fafsa",
      date: "2026-10-01T00:00",
      kind: "opens",
      description: "File as early as you can — many grants and tribal funds are first-come, first-served.",
      link: "https://studentaid.gov/h/apply-for-aid/fafsa",
    },
    {
      title: "UMN Twin Cities — Early Action I",
      category: "college",
      date: "2026-11-01T23:59",
      description: "Decision by Jan 31. Also the deadline for direct-admit Nursing.",
      link: "https://admissions.tc.umn.edu",
    },
    {
      title: "UMN Twin Cities — Early Action II",
      category: "college",
      date: "2026-12-01T23:59",
      description: "Decision by Feb 15.",
      link: "https://admissions.tc.umn.edu",
    },
    {
      title: "UMN Duluth — Priority application",
      category: "college",
      date: "2026-12-15T23:59",
      description: "Apply by the priority date for best scholarship consideration. Rolling admission after.",
      link: "https://admissions.d.umn.edu",
      verify: true,
    },
    {
      title: "Cobell Scholarship opens",
      category: "scholarship",
      date: "2026-12-15T00:00",
      kind: "opens",
      description: "Undergraduate application opens in the OASIS portal.",
      link: "https://cobellscholar.org",
      verify: true,
    },
    {
      title: "UMN Twin Cities — Regular deadline",
      category: "college",
      date: "2027-01-01T23:59",
      description: "Decision by Mar 31.",
      link: "https://admissions.tc.umn.edu",
    },
    {
      title: "American Indian College Fund — Full Circle opens",
      category: "scholarship",
      date: "2027-02-01T00:00",
      kind: "opens",
      description: "One application covers many College Fund scholarships.",
      link: "https://collegefund.org/students/scholarships/",
      verify: true,
    },
    {
      title: "Cobell Scholarship deadline",
      category: "scholarship",
      date: "2027-03-31T23:59",
      description: "Undergraduate application closes.",
      link: "https://cobellscholar.org",
      verify: true,
    },
    {
      title: "American Indian College Fund — Priority deadline",
      category: "scholarship",
      date: "2027-05-31T23:59",
      description: "Applications are accepted after this date, but applying by May 31 gives the best chance of an award.",
      link: "https://collegefund.org/students/scholarships/",
      verify: true,
    },
    {
      title: "Minnesota Indian Scholarship — Priority deadline",
      category: "scholarship",
      date: "2027-07-01T23:59",
      description: "Applications accepted year-round, but funds are limited — apply early.",
      link: "https://ohe.mn.gov",
    },
    {
      title: "Federal FAFSA deadline (2027–28)",
      category: "fafsa",
      date: "2028-06-30T23:59",
      description: "Final federal deadline — but colleges and scholarships have much earlier priority dates.",
      link: "https://studentaid.gov/h/apply-for-aid/fafsa",
    },
  ],

  fafsa: {
    applyLink: "https://studentaid.gov/h/apply-for-aid/fafsa",
    fsaIdLink: "https://studentaid.gov/fsa-id/create-account/launch",
    dreamActLink: "https://www.ohe.state.mn.us/mPg.cfm?pageID=2297",
    steps: [
      "Create your StudentAid.gov account (FSA ID). A parent/contributor needs one too.",
      "Gather your Social Security number, 2025 tax information, and any tribal enrollment info.",
      "List every college you're considering — you can add up to 20 schools.",
      "Submit, then watch your email for your FAFSA Submission Summary.",
      "Check each college's financial aid portal for extra documents they request.",
    ],
  },

  scholarships: [
    {
      name: "Minnesota Indian Scholarship Program",
      org: "Minnesota Office of Higher Education",
      featured: true,
      amount: "Up to $4,000 / year (undergraduate)",
      deadline: "Priority: July 1 · accepted year-round",
      eligibility: "Minnesota residents of American Indian ancestry (tribal enrollment or descendancy) attending an eligible MN college. See OHE for full rules.",
      howTo: "Complete the FAFSA (or MN Dream Act), then apply through the MNAid student portal.",
      link: "https://ohe.mn.gov",
    },
    {
      name: "Cobell Scholarship",
      org: "Indigenous Education, Inc.",
      featured: true,
      amount: "Varies — renewable",
      deadline: "Opens Dec 15 · closes Mar 31",
      eligibility: "Enrolled members of a U.S. federally recognized tribe attending a nonprofit, accredited college full-time.",
      howTo: "Apply in the OASIS online portal. Have your FAFSA done and transcripts ready.",
      link: "https://cobellscholar.org",
    },
    {
      name: "American Indian College Fund — Full Circle",
      org: "American Indian College Fund",
      featured: true,
      amount: "Typically $2,000–$3,000",
      deadline: "Opens Feb 1 · priority May 31",
      eligibility: "Enrolled members or descendants of a federally or state-recognized tribe attending an accredited nonprofit college.",
      howTo: "One online application matches you to many College Fund scholarships.",
      link: "https://collegefund.org/students/scholarships/",
    },
    {
      name: "Minnesota State Grant",
      org: "Minnesota Office of Higher Education",
      amount: "Based on need",
      deadline: "Within 30 days of the start of your term",
      eligibility: "Minnesota residents attending an eligible MN college.",
      howTo: "Automatically considered when you file the FAFSA or MN Dream Act.",
      link: "https://ohe.mn.gov",
    },
    {
      name: "North Star Promise",
      org: "State of Minnesota",
      amount: "Covers remaining tuition & fees",
      deadline: "File FAFSA early",
      eligibility: "Minnesota residents with family income under $80,000 attending a MN public college or Tribal college.",
      howTo: "Automatically considered when you file the FAFSA or MN Dream Act.",
      link: "https://ohe.mn.gov",
    },
    {
      name: "Fond du Lac Band Higher Education",
      org: "Fond du Lac Band of Lake Superior Chippewa",
      amount: "Varies",
      deadline: "Check with the Education Division",
      eligibility: "Enrolled Fond du Lac Band members. Other students: contact your own tribe's education office.",
      howTo: "Ask your counselor or contact the FDL Education Division for the current application.",
      link: "https://www.fdlrez.com",
    },
  ],

  colleges: [
    {
      name: "Fond du Lac Tribal & Community College",
      location: "Cloquet, MN",
      type: "Tribal & community college",
      deadline: "Open admission · rolling",
      link: "https://fdltcc.edu",
    },
    {
      name: "University of Minnesota Duluth",
      location: "Duluth, MN",
      type: "4-year public university",
      deadline: "Priority Dec 15 · rolling after",
      promise: true,
      link: "https://admissions.d.umn.edu",
    },
    {
      name: "University of Minnesota Twin Cities",
      location: "Minneapolis, MN",
      type: "4-year public university",
      deadline: "Nov 1 · Dec 1 · Jan 1",
      promise: true,
      link: "https://admissions.tc.umn.edu",
    },
    {
      name: "Lake Superior College",
      location: "Duluth, MN",
      type: "Community & technical college",
      deadline: "Rolling",
      link: "https://www.lsc.edu",
    },
    {
      name: "Bemidji State University",
      location: "Bemidji, MN",
      type: "4-year public university",
      deadline: "Rolling",
      link: "https://www.bemidjistate.edu",
    },
    {
      name: "The College of St. Scholastica",
      location: "Duluth, MN",
      type: "4-year private university",
      deadline: "Rolling",
      link: "https://www.css.edu",
    },
    {
      name: "University of Wisconsin–Superior",
      location: "Superior, WI",
      type: "4-year public university",
      deadline: "Rolling",
      link: "https://www.uwsuper.edu",
    },
    {
      name: "Haskell Indian Nations University",
      location: "Lawrence, KS",
      type: "Tribal university",
      deadline: "See website",
      link: "https://www.haskell.edu",
    },
  ],

  essay: {
    tips: [
      { title: "Start early, write ugly", body: "Your first draft is supposed to be messy. Get ideas down, then shape them over a few weeks." },
      { title: "Tell a story only you can tell", body: "Pick one specific moment — a conversation, a challenge, a tradition — and show what it taught you." },
      { title: "Show, don't tell", body: "Instead of “I'm hardworking,” describe the 5 a.m. practice or the shift you worked before school." },
      { title: "Your culture & community count", body: "Family, language, ricing, powwow, helping elders — if it shaped you, it's worth writing about. Share only what you're comfortable sharing." },
      { title: "Answer the prompt", body: "Re-read the question before and after you write. Every paragraph should connect back to it." },
      { title: "Get a second (and third) reader", body: "Ask a teacher, counselor or family member to read it. Then read it out loud yourself." },
      { title: "Mind the word limit", body: "Common App essays max out at 650 words. Cut filler words so your story has room." },
      { title: "Reuse smartly", body: "One strong essay can be adapted for several scholarships — just tailor the opening and ending to each prompt." },
    ],
    resources: [
      { name: "Common App Essay Prompts", link: "https://www.commonapp.org/apply/essay-prompts" },
      { name: "BigFuture — College Essay Tips", link: "https://bigfuture.collegeboard.org" },
      { name: "Khan Academy — College Admissions", link: "https://www.khanacademy.org/college-careers-more/college-admissions" },
      { name: "Purdue OWL — Writing Help", link: "https://owl.purdue.edu" },
    ],
  },

  /*
   * SENIOR QUOTES — add one entry per senior.
   * These are sample placeholders. Replace with real quotes (with the
   * student's permission) before sharing the site.
   */
  quotes: [
    { name: "Senior Name", quote: "Add your senior quote here.", plans: "Future plans" },
    { name: "Senior Name", quote: "Add your senior quote here.", plans: "Future plans" },
    { name: "Senior Name", quote: "Add your senior quote here.", plans: "Future plans" },
  ],

  contact: {
    note: "Questions? Stop by the counseling office or talk with your senior advisor.",
  },
};
