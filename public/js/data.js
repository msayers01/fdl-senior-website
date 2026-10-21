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
  },

  graduation: {
    // PLACEHOLDER — replace with the official date & time once announced.
    datetime: "2027-05-28T18:00",
    // Shown instead of the time from `datetime`. Delete this line once the
    // official time is set (the countdown still uses the time above).
    timeLabel: "TBA",
    location: "Fond du Lac Ojibwe School",
    address: "49 University Rd, Cloquet, MN 55720",
  },

  /*
   * DEADLINES — shown on the deadline board, sorted by date.
   *  category: "fafsa" | "scholarship" | "college" | "school"
   *  opens:    optional date the application opens
   *  date:     the deadline itself
   */
  /*
   *  SCHOOL EVENTS: add senior events here with category: "school" once the
   *  school confirms them (e.g. cap & gown order deadline, senior pictures).
   *  They show up under the "School" filter. Example:
   *
   *    {
   *      title: "Cap & gown order deadline",
   *      category: "school",
   *      date: "2027-02-01T23:59",
   *      description: "Order through the senior advisor.",
   *    },
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
      howTo: "Complete the FAFSA, then apply through the MNAid student portal.",
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
      howTo: "Automatically considered when you file the FAFSA.",
      link: "https://ohe.mn.gov",
    },
    {
      name: "North Star Promise",
      org: "State of Minnesota",
      amount: "Covers remaining tuition & fees",
      deadline: "File FAFSA early",
      eligibility: "Minnesota residents with family income under $80,000 attending a MN public college or Tribal college.",
      howTo: "Automatically considered when you file the FAFSA.",
      link: "https://ohe.mn.gov",
    },
    {
      name: "Fond du Lac Band Higher Education",
      org: "Fond du Lac Band of Lake Superior Chippewa",
      amount: "Varies",
      deadline: "Check with the Education Division",
      eligibility: "Enrolled Fond du Lac Band members. Other students: contact your own tribe's education office.",
      howTo: "Ask your counselor or contact the FDL Education Division for the current application.",
      link: "https://www.fdlband.org/community/scholarships/index.php",
    },
  ],

  /*
   * COLLEGES: `region` is "home" (Close to Home) or "national" (Across the
   * Country). `note` is an optional extra line on the card.
   */
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
      name: "University of Minnesota Morris",
      location: "Morris, MN",
      type: "4-year public liberal arts college",
      deadline: "See website",
      waiver: true,
      link: "https://morris.umn.edu",
    },
    {
      name: "Lake Superior College",
      location: "Duluth, MN",
      type: "Community & technical college",
      deadline: "Rolling",
      link: "https://www.lsc.edu",
    },
    {
      name: "Minnesota North College – Hibbing",
      location: "Hibbing, MN",
      type: "Community college (formerly Hibbing Community College)",
      deadline: "Rolling",
      link: "https://minnesotanorth.edu/admissions/",
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
      name: "Brown University",
      location: "Providence, RI",
      type: "4-year private university",
      region: "national",
      deadline: "Early Decision Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://admission.brown.edu",
    },
    {
      name: "California Institute of Technology (Caltech)",
      location: "Pasadena, CA",
      type: "4-year private university",
      region: "national",
      deadline: "Restrictive Early Action Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://www.admissions.caltech.edu",
    },
    {
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      type: "4-year private university",
      region: "national",
      deadline: "Early Decision early Nov · Regular early Jan",
      link: "https://admission.enrollment.cmu.edu",
    },
    {
      name: "Columbia University",
      location: "New York, NY",
      type: "4-year private university",
      region: "national",
      deadline: "Early Decision Nov 1 · Regular Jan 1",
      note: "Meets full demonstrated financial need",
      link: "https://undergrad.admissions.columbia.edu",
    },
    {
      name: "Cornell University",
      location: "Ithaca, NY",
      type: "4-year private university",
      region: "national",
      deadline: "Early Decision Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://admissions.cornell.edu",
    },
    {
      name: "Dartmouth College",
      location: "Hanover, NH",
      type: "4-year private college",
      region: "national",
      deadline: "Early Decision Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://admissions.dartmouth.edu",
    },
    {
      name: "Harvard University",
      location: "Cambridge, MA",
      type: "4-year private university",
      region: "national",
      deadline: "Restrictive Early Action Nov 1 · Regular Jan 1",
      note: "Meets full demonstrated financial need",
      link: "https://college.harvard.edu/admissions",
    },
    {
      name: "Haskell Indian Nations University",
      location: "Lawrence, KS",
      type: "Tribal university",
      region: "national",
      deadline: "See website",
      link: "https://www.haskell.edu",
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, MA",
      type: "4-year private university",
      region: "national",
      deadline: "Early Action Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://mitadmissions.org",
    },
    {
      name: "Princeton University",
      location: "Princeton, NJ",
      type: "4-year private university",
      region: "national",
      deadline: "Single-Choice Early Action Nov 1 · Regular Jan 1",
      note: "Meets full demonstrated financial need",
      link: "https://admission.princeton.edu",
    },
    {
      name: "Stanford University",
      location: "Stanford, CA",
      type: "4-year private university",
      region: "national",
      deadline: "Restrictive Early Action Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://admission.stanford.edu",
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      type: "4-year public university",
      region: "national",
      deadline: "UC Application: Oct 1 – Nov 30",
      link: "https://admissions.berkeley.edu",
    },
    {
      name: "University of California, Los Angeles (UCLA)",
      location: "Los Angeles, CA",
      type: "4-year public university",
      region: "national",
      deadline: "UC Application: Oct 1 – Nov 30",
      link: "https://admission.ucla.edu",
    },
    {
      name: "University of Chicago",
      location: "Chicago, IL",
      type: "4-year private university",
      region: "national",
      deadline: "Early Action / Early Decision I Nov 1 · Regular early Jan",
      note: "Meets full demonstrated financial need",
      link: "https://collegeadmissions.uchicago.edu",
    },
    {
      name: "University of Wisconsin–Madison",
      location: "Madison, WI",
      type: "4-year public university",
      region: "national",
      deadline: "Early Action Nov 1 · Regular Jan 15",
      link: "https://admissions.wisc.edu",
    },
    {
      name: "Yale University",
      location: "New Haven, CT",
      type: "4-year private university",
      region: "national",
      deadline: "Single-Choice Early Action Nov 1 · Regular Jan 2",
      note: "Meets full demonstrated financial need",
      link: "https://admissions.yale.edu",
    },
  ],

  essay: {
    tips: [
      { title: "Start early, write ugly", body: "Your first draft is supposed to be messy. Get ideas down, then shape them over a few weeks." },
      { title: "Tell a story only you can tell", body: "Pick one specific moment — a conversation, a challenge, a tradition — and show what it taught you." },
      { title: "Show, don't tell", body: "Instead of “I'm hardworking,” describe the 5 a.m. practice or the shift you worked before school." },
      { title: "Your culture & community count", body: "Share how your culture has shaped who you are." },
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

  letters: {
    intro: "Most colleges and many scholarships ask for 1–3 letters of recommendation.",
    tips: [
      { title: "Ask the right people", body: "Pick teachers, coaches, employers or community members who know you well and can share specific examples." },
      { title: "Ask early", body: "Give them at least 3–4 weeks before the deadline. Asking in person first is a nice touch." },
      { title: "Make it easy", body: "Share a short résumé or brag sheet, the deadline, what the letter is for, and how to submit it." },
      { title: "Follow up & say thanks", body: "Send a friendly reminder a week before the deadline, then a thank-you note once it's in." },
    ],
  },

  /*
   * SENIOR CHECKLIST: students' check marks are saved in their own browser.
   * Each `id` must stay unique and should not change once published, or
   * students lose that check mark.
   */
  checklist: [
    {
      group: "Financial aid",
      items: [
        { id: "fsa-id", text: "Create my StudentAid.gov account (FSA ID)" },
        { id: "parent-fsa-id", text: "Parent/contributor creates their FSA ID" },
        { id: "fafsa", text: "Submit the 2027–28 FAFSA" },
        { id: "fafsa-summary", text: "Review my FAFSA Submission Summary" },
      ],
    },
    {
      group: "Tribal enrollment",
      items: [
        { id: "enrollment", text: "Request proof of tribal enrollment from my tribe's enrollment office" },
      ],
    },
    {
      group: "College applications",
      items: [
        { id: "college-list", text: "Make my list of colleges" },
        { id: "essay", text: "Write my personal essay" },
        { id: "letters", text: "Ask for letters of recommendation" },
        { id: "transcripts", text: "Request transcripts be sent" },
        { id: "applications", text: "Submit my college applications" },
        { id: "umn-scholars", text: "Submit the UMN American Indian Scholars application (if applying to UMN)" },
      ],
    },
    {
      group: "Scholarships",
      items: [
        { id: "misp", text: "Minnesota Indian Scholarship" },
        { id: "cobell", text: "Cobell Scholarship" },
        { id: "aicf", text: "American Indian College Fund — Full Circle" },
        { id: "fdl-band", text: "Fond du Lac Band Higher Education" },
      ],
    },
    {
      group: "After acceptance",
      items: [
        { id: "compare-aid", text: "Compare financial aid offers" },
        { id: "commit", text: "Accept my offer and confirm enrollment" },
        { id: "final-transcript", text: "Send my final transcript after graduation" },
      ],
    },
  ],

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
    note: "Questions? Contact senior advisor",
    // Fill these in to show a contact card. Leave any blank ("") to hide it.
    title: "Senior Advisor",
    name: "",
    email: "",
    phone: "",
    room: "",
    hours: "",
  },

  // Shown in the footer. Update whenever you change this file.
  lastUpdated: "2026-10-21",

  /*
   * OJIBWE SECTION HEADINGS: shown above each English heading.
   * Please have FDL's Ojibwe language staff review these before relying on
   * them. Leave a section blank ("") to show the English label instead.
   */
  ojibwe: {
    hero: "Boozhoo!",          // Hello / greetings
    scholarships: "Zhooniyaa", // money
    colleges: "Gabe-gikendaasoowigamig", // college / university
    essays: "Ozhibii'igewin",  // writing
    quotes: "Ikidowinan",      // words
    deadlines: "",
    checklist: "",
    fafsa: "",
    promise: "",
  },
};
