import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
const { screenshots } = require('./screenshots');

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "athlife-website",
    companyName: "AthLife (Website)",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a fully responsive website along with a robust admin panel designed for seamless management. The system is powered by a secure and scalable API layer, ensuring smooth communication between the frontend and backend.",
    websiteLink: "https://athlifeperformance.com",
    techStack: [
      "Laravel",
      "Next.js",
      "React",
      "Typescript",
    ],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/athlife/logo.jpg",
    pagesInfoArr: [
      {
        title: "Screenshots",
        description:
          "Here are some screenshots of the website and admin panel.",
        imgArr: screenshots['athlife'],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As the sole developer, I architected and implemented the entire website using ReactJS version 14 for the frontend and Laravel for the backend. The frontend communicates securely with the backend via a robust API layer. Authentication is handled using Laravel Socialite, enabling users to sign in with Google and Apple accounts. This approach ensures both a seamless user experience and strong security across the platform.",
      ],
      bullets: [
        "Developed and optimized a high-performing website.",
        "Created an intuitive admin dashboard to efficiently manage members, website contents and many more.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Implemented secure authentication using Laravel Socialite with Google and Apple sign-in.",
        "Designed and maintained a scalable API for frontend-backend communication.",
      ],
    },
  },
  {
    id: "athlife-mobile",
    companyName: "AthLife (Mobile App)",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and published a cross-platform mobile app of AthLife using Flutter, delivering a seamless user experience on both Android and iOS. Successfully published the app on the Play Store and App Store, ensuring smooth performance and native integration across devices.",
    websiteLink:
      "https://apps.apple.com/us/app/athlife-performance/id6742935898",
    techStack: ["Flutter", "Firebase", "REST API"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/athlife-mobile/logo.jpg",
    pagesInfoArr: [
      {
        title: "Screenshots",
        description:
          "Here are some screenshots of the mobile app.",
        imgArr: screenshots['athlife-mobile'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        `Take full control of your fitness journey with the AthLife Performance app! Book classes, manage your account, check-in effortlessly, connect with friends, and enjoy exclusive perks—all in one place.
        `,
        `Experience seamless class bookings, real-time updates, and a vibrant community at your fingertips. `,
      ],
      bullets: [
        `BOOK CLASSES & SIGN UP FOR ATHLIFE COURSES - Use your Class Pack to reserve a spot in regular classes.`,
        `MANAGE YOUR CLASS PACKS - Need an extension? Control your Class Pack’s validity with flexible rollover options.`,
        `SOCIALIZE & STAY CONNECTED - Add friends, invite them to class, and stay updated on the latest news, promos, and community activities with AthLife!`,
        `SHARE CLASS PACKS WITH FRIENDS - Purchase a Share Pack, become the Pack Leader, and distribute sessions among your athletes.`,
        `CUSTOMIZE YOUR EXPERIENCE - Mark your favorite classes and instructors—get notified when your top picks are available.`,
        `RATE & REVIEW CLASSES - Provide feedback on instructors and share how you felt after class.`,
        `EARN ACHIEVEMENTS & BADGES - Hit milestones and unlock badges as you progress in your fitness journey.`,
      ],
    },
  },
  {
    id: "kalaiyaan-website",
    companyName: "Kalaiyaan Coast (Website)",
    type: "Professional",
    category: ["Web Dev", "UI/UX"],
    shortDescription: "A nature and camping resort in Laiya, Batangas, offering serene accommodations, mouthwatering dishes, and various recreational facilities.",
    websiteLink: "https://kalaiyaancoast.ph/",
    techStack: ["GatsbyJS", "React", "Typescript"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-30"),
    companyLogoImg: "/projects/kalaiyaan-website/logo.jpg",
    pagesInfoArr: [
      {
        title: "Resort Overview",
        description: "Showcases the resort's website which features nature-inspired accommodations and amenities.",
        imgArr: screenshots['kalaiyaan-website'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Kalaiyaan Coast is a luxurious nature and camping resort in Laiya, Batangas. Guests enjoy serene accommodations, delicious food, and a variety of recreational activities in a relaxing environment.",
      ],
      bullets: [
        "Responsive web design",
        "Fast and secure website",
        "Online booking integration",
        "Gallery of accommodations and amenities",
        "Interactive map and directions",
        "Contact and inquiry forms",
      ]
    }
  },
  {
    id: "kalaiyaan-pos",
    companyName: "Kalaiyaan POS System",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription: "POS system in Kalaiyaan Coast's resort, powered by NexoPOS",
    websiteLink: "https://pos.kalaiyaancoast.ph/",
    techStack: ["NexoPOS", "Laravel", "MySQL"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/kalaiyaan-pos/logo.jpg",
    pagesInfoArr: [
      {
        title: "POS System and Custom Reports Screenshots",
        description: "Point of Sale dashboard for managing transactions.",
      imgArr: screenshots['kalaiyaan-pos'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A robust POS system for Kalaiyaan Coast, handling sales and inventory management in the resort powered by NexoPOS with customizable reports and analytics.",
      ],
      bullets: [
        "Sales tracking",
        "Inventory management",
        "User authentication",
        "Customize reports and analytics",
        "Multi-location support",
        "Customizable receipts",
        "Multi-user roles and permissions",
        "Discount and promotion management",
        "Supplier and purchase order tracking",
        "Tax configuration and reporting",
      ]
    }
  },
  {
    id: "kalaiyaan-booking",
    companyName: "Kalaiyaan Booking System",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription: "Online booking system for Kalaiyaan Coast, allowing customers to select dates, rooms, and confirm bookings and staff to manage bookings, rooms and inventories.",
    websiteLink: "https://booking.kalaiyaancoast.ph/",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/kalaiyaan-booking/logo.jpg",
    pagesInfoArr: [
      {
        title: "Booking Flow",
        description: "Step-by-step booking process for guests.",
        imgArr: screenshots['kalaiyaan-booking'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A seamless online booking system for Kalaiyaan Coast, enabling guests to reserve rooms and manage their bookings online.",
      ],
      bullets: [
        "Date and room selection",
        "Guest information entry",
        "Booking confirmation"
      ]
    }
  },
  {
    id: "exodus-gym",
    companyName: "Exodus Gym (Gym Management System)",
    type: "Professional",
    category: ["Web Dev"],
    shortDescription: "Gym management system for Exodus Gym.",
    websiteLink: "https://exodusgym.gomicro.biz/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-10-30"),
    companyLogoImg: "/projects/exodus-gym/logo.png",
    pagesInfoArr: [
      {
        title: "Screenshots",
        description: "Screenshots of the gym management system.",
        imgArr: screenshots['exodus-gym'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A management system for Exodus Gym, providing tools for member and staff management.",
      ],
      bullets: [
        "Member management",
        "Staff management",
        "Attendance tracking"
      ]
    }
  },
  {
    id: "lto-montalban-payment",
    companyName: "LTO Montalban Centralize Payment System",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription: "Centralized payment system for LTO Montalban Office.",
    websiteLink: "https://ltoportal.gomicro.biz/",
    techStack: ["Laravel", "React", "MySQL"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-04-30"),
    companyLogoImg: "/projects/lto-montalban/logo.png",
    pagesInfoArr: [
      {
        title: "Screenshots",
        description: "Screenshots of the payment system.",
        imgArr: screenshots['lto-montalban'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A centralized payment system for LTO Montalban One Stop Shop, streamlining payment processes between LTO ancillary companies.",
      ],
      bullets: [
        "Payment processing",
        "Expenses management",
        "User authentication",
        "Transaction history",
        "Audit Reports"
      ]
    }
  },

  // --- That's Great News Ticketing System ---
  {
    id: "tgn-ticketing",
    companyName: "That's Great News Ticketing System",
    type: "Professional",
    category: ["Web Dev"],
    shortDescription: "Ticketing/helpdesk system for That's Great News.",
    websiteLink: "https://tgn.gomicro.biz/",
    techStack: ["FreeScout", "PHP", "MySQL"],
    startDate: new Date("2023-11-01"),
    endDate: new Date("2024-03-31"),
    companyLogoImg: "/projects/tgn/logo.png",
    pagesInfoArr: [
      {
        title: "Login Page",
        description: "User login for ticketing system.",
        imgArr: screenshots['tgn'],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A helpdesk and ticketing system for That's Great News, based on FreeScout.",
      ],
      bullets: [
        "Ticket management",
        "User support",
        "Email integration"
      ]
    }
  },

  // --- GEMA ---
  {
    id: "gema",
    companyName: "GEMA",
    type: "Professional",
    category: ["Web Dev"],
    shortDescription: "Web system for GEMA.",
    websiteLink: "https://gema.aplaya-laiya.ph/",
    techStack: ["PHP", "MySQL"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "",
    pagesInfoArr: [
      {
        title: "Main Page",
        description: "Main page for GEMA system.",
        imgArr: []
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A web system for GEMA. (No public info available)",
      ],
      bullets: [
        "Web management features"
      ]
    }
  },

  // --- NorthStar Solutions Inc. Sales Tracker System ---
  {
    id: "northstar-sales-tracker",
    companyName: "NorthStar Solutions Inc. Sales Tracker System",
    type: "Professional",
    category: ["Web Dev"],
    shortDescription: "Sales tracker system for NorthStar Solutions Inc.",
    websiteLink: "https://salestracker.northstarsolutionsph.com/",
    techStack: ["PHP", "MySQL"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "",
    pagesInfoArr: [
      {
        title: "Main Page",
        description: "Main page for sales tracker system.",
        imgArr: []
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "A sales tracker system for NorthStar Solutions Inc. (No public info available)",
      ],
      bullets: [
        "Sales tracking features"
      ]
    }
  },
];

export const featuredProjects = Projects.slice(0, 3);
