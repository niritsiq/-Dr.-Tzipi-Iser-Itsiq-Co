// i18n translations
const i18n = {
  he: {
    dir: 'rtl', lang: 'he',
    // --- Navigation ---
    logo: 'ד"ר ציפי איסר איציק | Law & Regulation',
    navHome: 'דף הבית', navAbout: 'אודות', navExpertise: 'תחומי התמחות', navTeam: 'הצוות', navCareer: 'קריירה', navContact: 'צור קשר',
    navTzipi: 'ד"ר ציפי איסר איציק', navTal: 'טל גרנות', navSagi: 'שגיא אגמון',

    // --- HERO SECTION ("Ilan Sofer" Style) ---
    heroTitle: 'ד"ר ציפי איסר-איציק, עורכי דין',
    heroSub: `משרד ד"ר ציפי איסר איציק ושות' – משרד עורכי דין, הוקם על-ידי ד"ר ציפי איסר איציק, מהדמויות המובילות בישראל בתחום דיני הסביבה, האקלים ו-ESG, בעלת ניסיון מקצועי של למעלה מ-30 שנה בעריכת דין.
    המשרד הוקם לאחר פרישתה מפירמת Lipa & Co., שם כיהנה כשותפה בכירה וראש תחום סביבה ואקלים. קודם לכן כיהנה ד"ר איסר איציק כמנכ"לית אדם טבע ודין - האגודה הישראלית להגנת הסביבה, וצברה ניסיון ייחודי בהובלת מהלכים רגולטוריים, ניהול הליכים משפטיים מורכבים ועיצוב מדיניות סביבתית ואקלימית ברמה הלאומית והמקומית.
    המשרד נשען על צוות משפטי מנוסה ויציב, אשר פעל לאורך שנים בשיתוף פעולה מקצועי עם ד"ר איסר איציק, בין היתר במסגרת פעילות משפטית וציבורית בתחום ההגנה על הסביבה, ובעל ניסיון משמעותי בעבודה מול רגולטורים, משרדי ממשלה, רשויות מקומיות, גופים עסקיים וציבוריים, וכן בבתי המשפט ובערכאות מנהליות.
    המשרד מלווה תאגידים פרטיים וציבוריים, רשויות מקומיות וגופים מוסדיים בליווי משפטי ואסטרטגי מקיף, תוך שילוב מומחיות משפטית מעמיקה עם הבנה רגולטורית, כלכלית וניהולית רחבה. פעילות המשרד מונחית על-ידי מחויבות מלאה ללקוח ולצרכיו, חתירה לפתרונות משפטיים מדויקים, יישומיים וחדשניים, והתאמת האסטרטגיה המשפטית למאפייניו הייחודיים של כל מקרה.
    תחומי ההתמחות של המשרד כוללים דיני סביבה ואקלים, רגולציה ואכיפה סביבתית ESG וקיימות תאגידית, ליטיגציה מנהלית וציבורית, ייעוץ לפרויקטים ותשתיות, וליווי גופים עסקיים וציבוריים בהתמודדות עם אתגרים רגולטוריים, סביבתיים ואקלימיים מורכבים.`,
    cta: 'צור קשר',

    // --- Footer ---
    footer: '© ד"ר ציפי איסר איציק ושות\' | משרד עורכי דין',

    // --- HOME PAGE CARDS ---
    aboutTitle: 'אודות',
    aboutBody: 'משרד ד"ר ציפי איסר איציק ושות\' הוא משרד בוטיק מוביל בתחומי הסביבה והאקלים. המשרד הוקם על-ידי ד"ר ציפי איסר איציק, לשעבר מנכ"לית אדם טבע ודין, ומעניק ליווי משפטי ואסטרטגי לתאגידים, רשויות וגופים מוסדיים.',
    award: '🏆 פרס: עורכת הדין הסביבתית של השנה (אירופה)',
    phd: '🎓 ד״ר: מומחית לרגולציה סביבתית',
    lead: '🏛️ מנהיגות: לשעבר מנכ״לית אדם טבע ודין',

    expertiseTitle: 'תחומי התמחות',
    exp1Title: 'רגולציה סביבתית', exp1Body: 'ציות לתעשייה; רעלים, אוויר, פסולת; היתרים והתגוננות מול אכיפה.',
    exp2Title: 'אקלים ו-ESG', exp2Body: 'אסטרטגיית פחמן, דיווחי ESG, מסגרות בינ״ל (COP), סיכוני אקלים.',
    exp3Title: 'ליטיגציה מנהלית', exp3Body: 'עתירות, תובענות ייצוגיות, בג״ץ; אתגרי רגולציה.',
    exp4Title: 'קלינטק ואנרגיה', exp4Body: 'פרויקטי אנרגיה מתחדשת, כלכלה מעגלית, סטארטאפים ירוקים.',
    exp5Title: 'ניהול משברים', exp5Body: 'תגובה משפטית מידית לאירועי סביבה ולליכי אכיפה.',

    teamTitle: 'הצוות',
    teamBody: 'צוות משימתי בהובלת עו״ד ד״ר ציפי איסר איציק. עורכי דין ומתמחים מנוסים בדין מנהלי ומדעי הסביבה.',

    careerTitle: 'קריירה',
    careerBody1: 'אקדמיה: מרצה במכללה האקדמית נתניה; פרסומים בדיני סביבה ורגולציה מנהלית.',
    careerBody2: 'הזדמנויות: תמיד מחפשים משפטנים מצוינים. שלחו קורות חיים ל-Office@tii.com.',

    contactTitle: 'צור קשר',
    addr: 'כתובת: מנחם בגין 13, מגדל Icon, קומה 4, רמת גן, ישראל',
    phone: 'טלפון: +972-52-3520267',
    email: 'אימייל: Office@tii.com',
    mapNoteLabel: 'מפה:', mapNoteLink: 'Icon Tower - ניווט',
    fName: 'שם', fCompany: 'חברה', fEmail: 'אימייל', fPhone: 'טלפון', fMsg: 'הודעה', consent: 'אני מאשר/ת יצירת קשר.', send: 'שליחה',

    // --- TZIPI PROFILE ---
    tzipiName: 'ד"ר ציפי איסר איציק',
    tzipiTitle: 'עורכת דין, שותפה מייסדת',
    tzipiPhone: ' טלפון: 03-6070603',
    tzipiEmailLabel: ' דוא״ל: ',
    tzipiLinkedIn: 'LinkedIn',
    tzipiOffice: ' משרד: מגדל אייקון, דרך מנחם בגין 13, רמת גן',
    tzipiPracticeTitle: 'תחומי עיסוק',
    tzipiPracticeList: '<li>סביבה ואקלים</li><li>רגולציה ומשפט מנהלי</li><li>תובענות ייצוגיות ותביעות נגזרות</li>',
    tzipiExpTitle: 'ניסיון מקצועי',
    tzipiExpBody: 'ציפי הינה שותפה מייסדת ומנהלת מחלקת סביבה ואקלים. ציפי הינה בעלת ניסיון רב בקידומן של רפורמות רגולטוריות חדשניות בתחומי הגנת הסביבה ובליווי מאבקים משפטיים-סביבתיים, מתוקף תפקידה בעבר כמנכ"לית וכיועצת משפטית של אדם טבע ודין.',
    tzipiExpBody2: 'ציפי הינה חברת צוות המומחים ב"נבו בוררויות וגישורים", מתמחה ביישוב סכסוכים בתחומי הגנת הסביבה והאקלים. משמשת כמרצה בכירה במכללה האקדמית נתניה.',
    tzipiAwardsTitle: 'פרסים והוקרה',
    tzipiAwardsBody: 'זוכת פרס Environmental Lawyer of the Year לשנים 2023 ו-2024 (Women in Business Law / IFLR). מדורגת ב-Chambers & Partners וב-Legal 500 (Green Guide).',
    tzipiEduTitle: 'השכלה',
    tzipiEduList: '<li>תואר שלישי (דוקטורט) במשפטים – אוניברסיטת בר אילן (2015)</li><li>תואר שני במשפטים – אוניברסיטת תל אביב (1997)</li><li>תואר ראשון במשפטים – אוניברסיטת תל אביב (1993)</li>',
    tzipiBarTitle: 'הסמכה', tzipiBar: 'לשכת עורכי הדין בישראל, 1994',
    tzipiLangTitle: 'שפות', tzipiLang: 'עברית, אנגלית',

    // --- TAL GRANOT PROFILE ---
    talName: 'טל גרנות',
    talTitle: 'עורכת דין',
    talPhone: ' טלפון: 03-6070600',
    talEmailLabel: ' דוא״ל: ',
    talLinkedIn: 'LinkedIn | vCard | PDF',
    talOffice: ' משרד: מגדל אייקון, דרך מנחם בגין 13, רמת גן',
    talPracticeTitle: 'תחומי עיסוק',
    talPracticeList: '<li>משפט מנהלי</li><li>איכות הסביבה, קלינטק ואנרגיה</li>',
    talExpTitle: 'ניסיון מקצועי',
    talExpBody: 'עו"ד טל גרנות מתמחה בתחומי הגנת הסביבה, קלינטק, אנרגיה ומשפט מסחרי. טרם הצטרפותה למשרד, כיהנה כראש תחום בריאות וסביבה בארגון "אדם טבע ודין" והובילה הליכי ליטיגציה מורכבים וקידום חקיקה.',
    talExpBody2: 'ניסיונה המקצועי כולל גם עבודה בקידום זכויות בעמותת אלו"ט. טל ביצעה את התמחותה בפרקליטות מחוז מרכז (פלילי) ומשמשת כמרצה לרגולציה סביבתית.',
    talEduTitle: 'השכלה',
    talEduList: '<li>תואר שני (.LL.M) במשפט ציבורי (בהצטיינות) – אוניברסיטת תל אביב ואוניברסיטת נורת\'ווסטרן, שיקגו (2012)</li><li>תואר ראשון (.LL.B) – אוניברסיטת תל אביב (2008)</li>',
    talBarTitle: 'הסמכה', talBar: 'חברה בלשכת עורכי הדין בישראל, 2009',
    talLangTitle: 'שפות', talLang: 'עברית, אנגלית',

    // --- SAGI AGMON PROFILE ---
    sagiName: 'שגיא אגמון',
    sagiTitle: 'עורך דין',
    sagiPhone: ' טלפון: 03-6070604',
    sagiEmailLabel: ' דוא״ל: ',
    sagiLinkedIn: 'LinkedIn',
    sagiOffice: ' משרד: מגדל אייקון, דרך מנחם בגין 13, רמת גן',
    sagiPracticeTitle: 'תחומי עיסוק',
    sagiPracticeList: '<li>סביבה ואקלים</li><li>רגולציה ומשפט מנהלי</li><li>תובענות ייצוגיות</li>',
    sagiExpTitle: 'ניסיון מקצועי',
    sagiExpBody: 'שגיא הינו עורך דין במשרד, בעל ניסיון של למעלה מ-20 שנה במשפט מנהלי ותובענות ייצוגיות סביבתיות. שגיא התמחה בעמותת "אדם טבע ודין" ושימש יועץ משפטי לעמותות מובילות כגון "תנו לחיות לחיות" ו-"חדו"ש".',
    sagiExpBody2: 'במשרדנו מטפל שגיא בתובענות ייצוגיות מורכבות ומעניק שירותים משפטיים לרשויות מקומיות, חברות מובילות במשק וארגוני סביבה.',
    sagiEduTitle: 'השכלה',
    sagiEduList: '<li>תואר שני ביחסים בינלאומיים (M.A) – אוניברסיטת תל אביב (2009)</li><li>תואר ראשון במשפטים (LL.B) – אוניברסיטת חיפה (1999)</li>',
    sagiBarTitle: 'הסמכה', sagiBar: 'לשכת עורכי הדין בישראל, 2001',
    sagiLangTitle: 'שפות', sagiLang: 'עברית, אנגלית'
  },

  // --- ENGLISH TRANSLATIONS ---
  en: {
    dir: 'ltr', lang: 'en',
    logo: 'Dr. Tzipi Iser Itsiq | Law & Regulation',
    navHome: 'Home', navAbout: 'About', navExpertise: 'Expertise', navTeam: 'The Team', navCareer: 'Career', navContact: 'Contact',
    navTzipi: 'Dr. Tzipi Iser Itsiq', navTal: 'Tal Granot', navSagi: 'Sagi Agmon',

    // Hero ("Ilan Sofer" Style)
    heroTitle: 'Dr. Tzipi Iser Itsiq Law Firm',
    heroSub: `A boutique law firm specializing in Environmental Law, Climate Change, and Cleantech, with a focus on strategic excellence and personal counsel.
    We are dedicated to achieving the optimal outcome for our clients, tailoring precise regulatory solutions to the unique characteristics of every case and crisis.
    <strong>The firm is consistently ranked in the top tier ("Tier 1") by leading legal directories.</strong>`,
    cta: 'Contact Us',

    footer: '© Dr. Tzipi Iser Itsiq & Co. | Law Firm',

    // Home Page Cards
    aboutTitle: 'About',
    aboutBody: `Dr. Tzipi Iser Itsiq & Co. is a boutique law firm specializing in Environmental Law, Climate Regulation, and ESG, providing strategic legal counsel to corporations, public bodies, and international clients operating in complex regulatory environments.

The firm was founded by Dr. Tzipi Iser Itsiq, one of Israel’s leading experts in environmental and climate law, with over 30 years of professional experience. Dr. Iser Itsiq previously served as a Senior Partner and Head of the Environmental and Climate Practice at Lipa & Co., and as CEO of Adam Teva V’Din – the Israel Union for Environmental Defense, where she led high‑impact litigation, regulatory initiatives, and national environmental and climate policy processes.

The firm is supported by a highly experienced legal team that has worked closely with Dr. Iser Itsiq for many years, including in legal and public‑interest environmental work. The team brings substantial experience engaging with regulators, governmental bodies, municipalities, corporate entities, and courts across a wide range of complex environmental, climate, and ESG matters.

Combining deep legal expertise with a strategic understanding of regulatory systems, governance, and international sustainability standards, the firm provides practical, results‑oriented legal solutions tailored to the regulatory, commercial, and reputational needs of each client.

Areas of expertise include: environmental and climate law, environmental regulation and enforcement, ESG and corporate sustainability, administrative and public law litigation, infrastructure and energy projects, and advisory on cross‑border regulatory and climate‑related risks.`,
    award: '🏆 Award: Environmental Lawyer of the Year (Europe)',
    phd: '🎓 PhD: Environmental Regulation Expert',
    lead: '🏛️ Leadership: Former CEO, Israel Union for Environmental Defense',

    expertiseTitle: 'Expertise',
    exp1Title: 'Environmental Regulation', exp1Body: 'Compliance, toxins, air, waste; permitting and enforcement defense.',
    exp2Title: 'Climate & ESG', exp2Body: 'Carbon strategy, ESG reporting, international frameworks (COP), climate risk.',
    exp3Title: 'Administrative Litigation', exp3Body: 'Petitions, class actions, Supreme Court hearings; regulatory challenges.',
    exp4Title: 'Cleantech & Energy', exp4Body: 'Renewables, circular economy, green tech; permitting and structures.',
    exp5Title: 'Crisis Management', exp5Body: 'Immediate legal response to environmental incidents and enforcement actions.',

    teamTitle: 'The Team',
    teamBody: 'A dedicated task force led by Dr. Iser Itsiq. Senior attorneys and interns in administrative law and environmental sciences.',

    careerTitle: 'Career',
    careerBody1: 'Academic: Lecturer at Netanya Academic College; publications in environmental regulation.',
    careerBody2: 'Opportunities: Always seeking brilliant legal minds. Send your CV to Office@tii.com.',

    contactTitle: 'Contact Us',
    addr: 'Address: 13 Menachem Begin St, Icon Tower, 4th floor, Ramat Gan, Israel',
    phone: 'Phone: +972-52-3520267',
    email: 'Email: Office@tii.com',
    mapNoteLabel: 'Map:', mapNoteLink: 'Icon Tower - Navigation',
    fName: 'Name', fCompany: 'Company', fEmail: 'Email', fPhone: 'Phone', fMsg: 'Message', consent: 'I consent to being contacted.', send: 'Send',

    // Tzipi Profile
    tzipiName: 'Dr. Tzipi Iser Itsiq',
    tzipiTitle: 'Founding Partner',
    tzipiPhone: ' Phone: +972-3-6070603',
    tzipiEmailLabel: ' Email: ',
    tzipiLinkedIn: 'LinkedIn',
    tzipiOffice: ' Office: Icon Tower, 13 Menachem Begin Rd, Ramat Gan',
    tzipiPracticeTitle: 'Practice Areas',
    tzipiPracticeList: '<li>Environment & Climate Change</li><li>Regulation & Administrative Law</li><li>Class Actions</li>',
    tzipiExpTitle: 'Professional Experience',
    tzipiExpBody: 'Dr. Tzipi Iser Itsiq is the Founding Partner and Head of the Environment and Climate Department. Former CEO and Legal Counsel of "Adam Teva V\'Din".',
    tzipiExpBody2: 'She serves on the panel of experts at "Nevo Arbitration" and lectures on environmental regulation at Netanya Academic College.',
    tzipiAwardsTitle: 'Awards & Recognition',
    tzipiAwardsBody: 'Winner: "Environmental Lawyer of the Year" (2023 & 2024) by Women in Business Law (EMEA). Ranked by Chambers & Partners and Legal 500.',
    tzipiEduTitle: 'Education',
    tzipiEduList: '<li>Ph.D. in Law – Bar-Ilan University (2015)</li><li>LL.M. – Tel Aviv University (1997)</li><li>LL.B. – Tel Aviv University (1993)</li>',
    tzipiBarTitle: 'Bar Admission', tzipiBar: 'Israel Bar Association, 1994',
    tzipiLangTitle: 'Languages', tzipiLang: 'Hebrew, English',

    // Tal Granot Profile
    talName: 'Tal Granot',
    talTitle: 'Advocate',
    talPhone: ' Phone: +972-3-6070600',
    talEmailLabel: ' Email: ',
    talLinkedIn: 'LinkedIn | vCard | PDF',
    talOffice: ' Office: Icon Tower, 13 Menachem Begin Rd, Ramat Gan',
    talPracticeTitle: 'Practice Areas',
    talPracticeList: '<li>Administrative Law</li><li>Environmental Protection, Cleantech & Energy</li>',
    talExpTitle: 'Professional Experience',
    talExpBody: 'Adv. Tal Granot specializes in Environmental Protection, Cleantech, and Energy. Prior to joining the firm, she served as Head of the Health and Environment Department at "Adam Teva V’Din" (Israel Union for Environmental Defense), leading complex litigation and legislation.',
    talExpBody2: 'Her background includes working at ALUT (Autism Society) and interning at the Central District Attorney\'s Office (Criminal). Tal lectures on environmental regulation at academic institutions.',
    talEduTitle: 'Education',
    talEduList: '<li>LL.M. (Public Law), with Honors – Tel Aviv University & Northwestern University, Chicago (2012)</li><li>LL.B. – Tel Aviv University (2008)</li>',
    talBarTitle: 'Bar Admission', talBar: 'Israel Bar Association, 2009',
    talLangTitle: 'Languages', talLang: 'Hebrew, English',

    // Sagi Agmon Profile
    sagiName: 'Sagi Agmon',
    sagiTitle: 'Advocate',
    sagiPhone: ' Phone: +972-3-6070604',
    sagiEmailLabel: ' Email: ',
    sagiLinkedIn: 'LinkedIn',
    sagiOffice: ' Office: Icon Tower, 13 Menachem Begin Rd, Ramat Gan',
    sagiPracticeTitle: 'Practice Areas',
    sagiPracticeList: '<li>Environment & Climate</li><li>Regulation & Administrative Law</li><li>Class Actions</li>',
    sagiExpTitle: 'Professional Experience',
    sagiExpBody: 'Sagi is a senior attorney with over 20 years of experience in Administrative Law and Environmental Class Actions. He interned at "Adam Teva V\'Din" and served as legal counsel for leading NGOs including "Let the Animals Live".',
    sagiExpBody2: 'At the firm, Sagi handles complex environmental class actions and provides legal counsel to local authorities, major corporations, and environmental organizations.',
    sagiEduTitle: 'Education',
    sagiEduList: '<li>M.A. in International Relations – Tel Aviv University (2009)</li><li>LL.B. – University of Haifa (1999)</li>',
    sagiBarTitle: 'Bar Admission', sagiBar: 'Israel Bar Association, 2001',
    sagiLangTitle: 'Languages', sagiLang: 'Hebrew, English'
  }
};

// --- LOGIC ---
const elements = document.querySelectorAll('[data-i18n]');
const btnHe = document.getElementById('btn-he');
const btnEn = document.getElementById('btn-en');

function setLang(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = dict.lang;
  document.documentElement.dir = dict.dir;

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // Use innerHTML for fields that might contain HTML tags (lists, bold)
      if (key.includes('List') || key === 'heroSub' || key === 'aboutBody' || key.includes('ExpBody')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  if (btnHe && btnEn) {
    btnHe.classList.toggle('active', lang === 'he');
    btnEn.classList.toggle('active', lang === 'en');
  }
}

if (btnHe) btnHe.addEventListener('click', () => setLang('he'));
if (btnEn) btnEn.addEventListener('click', () => setLang('en'));

// Initialize
setLang('he');