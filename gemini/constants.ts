import { SiteContent } from './types';

export const CONTENT: Record<string, SiteContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      team: "The Team",
      expertise: "Expertise",
      career: "Career",
      contact: "Contact"
    },
    hero: {
      title: "Adv. Dr. Tzipi Iser Itsiq",
      subtitle: "Leading the Future of Energy, Infrastructure, and Regulatory Law.",
      cta: "Contact Us"
    },
    about: {
      title: "About Dr. Tzipi Iser Itsiq",
      subtitle: "Partner, Head of Energy & Regulation Department",
      body: [
        "Dr. Tzipi Iser Itsiq is a renowned legal expert and a leading figure in the fields of Energy, Infrastructure, and Regulation in Israel. She serves as a Partner and Head of the Energy, Cleantech and Regulation Department at Lipa Meir & Co.",
        "With a distinguished career spanning decades, Dr. Iser Itsiq formerly served as the Chairwoman of the Public Utility Authority – Electricity (PUA), where she led significant reforms in the Israeli electricity market. Her unique perspective combines deep regulatory knowledge with commercial acumen.",
        "She holds a Ph.D. in Law and is widely recognized for her strategic counsel to major corporations, government entities, and international investors navigating the complex regulatory landscape of Israel."
      ],
      stats: [
        { label: "Years Experience", value: "25+" },
        { label: "Expertise Areas", value: "5" },
        { label: "Major Reforms Led", value: "3" }
      ]
    },
    team: {
      title: "Our Team",
      subtitle: "Excellence driven by experience and dedication.",
      members: [
        {
          name: "Adv. Dr. Tzipi Iser Itsiq",
          role: "Partner & Head of Department",
          image: "https://lipameir.co.il/wp-content/uploads/2021/01/Tzipi-Iser-Itzik-1.jpg", // Note: Using a placeholder in real rendering if this specific URL fails, but keeping it for context
          bio: "Former Chair of the Electricity Authority. Specializes in energy regulation, antitrust, and litigation."
        },
        {
          name: "Legal Team Associates",
          role: "Attorneys",
          image: "https://picsum.photos/id/1/400/400",
          bio: "A dedicated group of skilled attorneys specializing in environmental law, administrative litigation, and project finance."
        }
      ]
    },
    expertise: {
      title: "Areas of Expertise",
      subtitle: "Comprehensive legal solutions for complex sectors.",
      items: [
        {
          title: "Energy & Infrastructure",
          description: "Guidance on power plant projects, renewable energy (solar, wind), natural gas, and complex infrastructure tenders.",
          iconName: "Zap"
        },
        {
          title: "Regulation & Administrative Law",
          description: "Representing clients before regulatory bodies, government ministries, and legislative committees.",
          iconName: "Scale"
        },
        {
          title: "Environment & Cleantech",
          description: "Advising on environmental compliance, waste management, and innovative green technologies.",
          iconName: "Leaf"
        },
        {
          title: "Antitrust & Competition",
          description: "Strategic advice on mergers, acquisitions, and monopoly regulations within the energy sector.",
          iconName: "ShieldCheck"
        },
        {
          title: "Project Finance",
          description: "Financial closing and legal structuring for large-scale energy and infrastructure projects.",
          iconName: "CircleDollarSign"
        },
        {
          title: "Litigation",
          description: "Representation in the Supreme Court and administrative courts regarding tenders and regulatory disputes.",
          iconName: "Gavel"
        }
      ]
    },
    career: {
      title: "Career Opportunities",
      subtitle: "Join a leading legal team shaping the energy market.",
      openings: [
        {
          title: "Associate Attorney - Energy Dept",
          location: "Tel Aviv",
          type: "Full-time",
          description: "We are looking for an ambitious lawyer with 1-3 years of experience in commercial or administrative law."
        },
        {
          title: "Legal Intern",
          location: "Tel Aviv",
          type: "Internship",
          description: "Seeking top-tier law students for a challenging and rewarding internship in our regulation department."
        }
      ],
      cta: "Send CV"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for legal consultation.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      }
    },
    footer: {
      rights: "All Rights Reserved to Dr. Tzipi Iser Itsiq Law Firm."
    }
  },
  he: {
    nav: {
      home: "בית",
      about: "אודות",
      team: "הצוות",
      expertise: "תחומי עיסוק",
      career: "קריירה",
      contact: "צור קשר"
    },
    hero: {
      title: "עו״ד ד״ר ציפי איסר-איציק",
      subtitle: "מובילים את עתיד ענף האנרגיה, התשתיות והרגולציה בישראל.",
      cta: "צור קשר"
    },
    about: {
      title: "אודות ד״ר ציפי איסר-איציק",
      subtitle: "שותפה, ראש מחלקת אנרגיה, קלינטק ורגולציה",
      body: [
        "ד״ר ציפי איסר-איציק היא מומחית משפטית בעלת שם ודמות מובילה בתחומי האנרגיה, התשתיות והרגולציה בישראל. היא מכהנת כשותפה וראש מחלקת אנרגיה, קלינטק ורגולציה במשרד ליפא מאיר ושות׳.",
        "עם קריירה עשירה המשתרעת על פני עשורים, ד״ר איסר-איציק כיהנה בעבר כיו״ר רשות החשמל, שם הובילה רפורמות משמעותיות במשק החשמל הישראלי. נקודת המבט הייחודית שלה משלבת ידע רגולטורי מעמיק עם הבנה מסחרית רחבה.",
        "היא בעלת תואר דוקטור למשפטים ומוכרת בזכות הייעוץ האסטרטגי שהיא מעניקה לחברות ענק, גופים ממשלתיים ומשקיעים בינלאומיים המנווטים בסביבה הרגולטורית המורכבת של ישראל."
      ],
      stats: [
        { label: "שנות ניסיון", value: "+25" },
        { label: "תחומי התמחות", value: "5" },
        { label: "רפורמות מרכזיות", value: "3" }
      ]
    },
    team: {
      title: "הצוות שלנו",
      subtitle: "מצוינות המונעת מניסיון ומסירות.",
      members: [
        {
          name: "עו״ד ד״ר ציפי איסר-איציק",
          role: "שותפה וראש מחלקה",
          image: "https://lipameir.co.il/wp-content/uploads/2021/01/Tzipi-Iser-Itzik-1.jpg",
          bio: "לשעבר יו״ר רשות החשמל. מתמחה ברגולציה בתחום האנרגיה, הגבלים עסקיים וליטיגציה."
        },
        {
          name: "צוות עורכי דין",
          role: "עורכי דין",
          image: "https://picsum.photos/id/1/400/400",
          bio: "קבוצה מסורה של עורכי דין מיומנים המתמחים בדיני איכות הסביבה, ליטיגציה מנהלית ומימון פרויקטים."
        }
      ]
    },
    expertise: {
      title: "תחומי עיסוק",
      subtitle: "פתרונות משפטיים מקיפים למגזרים מורכבים.",
      items: [
        {
          title: "אנרגיה ותשתיות",
          description: "ליווי פרויקטים של תחנות כוח, אנרגיה מתחדשת (סולארי, רוח), גז טבעי ומכרזי תשתיות מורכבים.",
          iconName: "Zap"
        },
        {
          title: "רגולציה ומשפט מנהלי",
          description: "ייצוג לקוחות מול גופים רגולטוריים, משרדי ממשלה וועדות הכנסת.",
          iconName: "Scale"
        },
        {
          title: "איכות סביבה וקלינטק",
          description: "ייעוץ בנושאי ציות סביבתי, טיפול בפסולת וטכנולוגיות ירוקות חדשניות.",
          iconName: "Leaf"
        },
        {
          title: "הגבלים עסקיים ותחרות",
          description: "ייעוץ אסטרטגי במיזוגים, רכישות ורגולציית מונופולים בתחום האנרגיה.",
          iconName: "ShieldCheck"
        },
        {
          title: "מימון פרויקטים",
          description: "סגירות פיננסיות והבניה משפטית לפרויקטים רחבי היקף בתחום האנרגיה והתשתיות.",
          iconName: "CircleDollarSign"
        },
        {
          title: "ליטיגציה",
          description: "ייצוג בבית המשפט העליון ובבתי משפט לעניינים מנהליים במכרזים ובסכסוכים רגולטוריים.",
          iconName: "Gavel"
        }
      ]
    },
    career: {
      title: "קריירה",
      subtitle: "הצטרפו לצוות משפטי מוביל המעצב את משק האנרגיה.",
      openings: [
        {
          title: "עורך דין - מחלקת אנרגיה",
          location: "תל אביב",
          type: "משרה מלאה",
          description: "אנו מחפשים עורך דין שאפתן עם 1-3 שנות ניסיון במשפט מסחרי או מנהלי."
        },
        {
          title: "מתמחה למשפטים",
          location: "תל אביב",
          type: "התמחות",
          description: "מחפשים סטודנטים מצטיינים למשפטים להתמחות מאתגרת ומספקת במחלקת הרגולציה שלנו."
        }
      ],
      cta: "שלח קורות חיים"
    },
    contact: {
      title: "צור קשר",
      subtitle: "פנו אלינו לייעוץ משפטי.",
      addressLabel: "כתובת",
      phoneLabel: "טלפון",
      emailLabel: "דוא״ל",
      form: {
        name: "שם מלא",
        email: "כתובת דוא״ל",
        subject: "נושא",
        message: "הודעה",
        submit: "שלח הודעה"
      }
    },
    footer: {
      rights: "כל הזכויות שמורות למשרד עו״ד ד״ר ציפי איסר-איציק."
    }
  }
};