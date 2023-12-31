import image1 from "../assets/images/paper-plane.png";
import image2 from "../assets/images/plane.png";
import image3 from "../assets/images/space-ship.png";
import avatar1 from "../assets/images/xs/avatar1.jpg";
import avatar2 from "../assets/images/xs/avatar2.jpg";
import avatar3 from "../assets/images/xs/avatar3.jpg";
import avatar4 from "../assets/images/xs/avatar4.jpg";
import avatar5 from "../assets/images/xs/avatar5.jpg";
import avatar6 from "../assets/images/xs/avatar6.jpg";
import avatar7 from "../assets/images/xs/avatar7.jpg";

export const PriceCardData1 = [
  {
    head: "Start",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$199",
    joined: false,
  },
  {
    head: "Good",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$299",
    joined: true,
  },
  {
    head: "Ultima",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$399",
    joined: false,
  },
  {
    head: "Vip",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$799",
    joined: false,
  },
];

export const PriceCardData2 = [
  {
    image: image1,
    head: "Start",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "Free",
    joined: false,
  },
  {
    image: image2,
    head: "Good",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$149",
    joined: true,
  },
  {
    image: image3,
    head: "Ultima",
    list: [
      "Responsive Design",
      "Color Customization",
      "HTML5 & CSS3",
      "Styled elements",
    ],
    price: "$349",
    joined: false,
  },
];

export const PriceCardData3 = [
  {
    image: "icon-screen-desktop",
    head: "Ui design",

    price: "149",
    joined: false,
  },
  {
    image: "icon-user",
    head: "Ux design",

    price: "249",
    joined: true,
  },
  {
    image: "icon-printer",
    head: "Print design",

    price: "349",
    joined: false,
  },
];

export const TeamsBoardData = [
  {
    teamName: "DS - Design Team",
    ranking: "2th",
    images: [avatar1, avatar2, avatar3, avatar4, avatar5],
    projects: "12",
    budget: "4,870",
    progress: 87,
    progressType: "success",
    isDropdown: false,
  },
  {
    teamName: "MT - Marketing Team",
    ranking: "4th",
    images: [avatar1, avatar2, avatar3],
    projects: "08",
    budget: "2,170",
    progress: 45,
    progressType: "info",
    isDropdown: false,
  },
  {
    teamName: "DT - Developers Team",
    ranking: "5th",
    images: [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7],
    projects: "23",
    budget: "8,000",
    progress: 52,
    progressType: "warning",
    isDropdown: false,
  },
  {
    teamName: "GT - Graphic Team",
    ranking: "2th",
    images: [avatar4, avatar5],
    projects: "02",
    budget: "3,370",
    progress: 65,
    progressType: "",
    isDropdown: false,
  },
  {
    teamName: "ST - Sales Team",
    ranking: "7th",
    images: [avatar1, avatar5],
    projects: "12",
    budget: "5,100",
    progress: 35,
    progressType: "secondary",
    isDropdown: false,
  },
  {
    teamName: "BD - Business Development",
    ranking: "8th",
    images: [avatar2, avatar3, avatar5, avatar7],
    projects: "23",
    budget: "11,000",
    progress: 15,
    progressType: "danger",
    isDropdown: false,
  },
];

export const ProjectsData = [
  {
    status: "Active",
    details: "InfiniO 4.1",
    date: "14.Mar.2018",
    Prograss: 48,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Active",
    details: "Many desktop publishing packages and web",
    date: "8.Mar.2018",
    Prograss: 78,
    team: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    status: "InActive",
    details: "iNext - One Page Responsive Template",
    date: "14.Mar.2018",
    Prograss: 29,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Active",
    details: "Oakleaf Admin - Bootstrap html5 with SASS",
    date: "14.Mar.2018",
    Prograss: 13,
    team: [avatar5, avatar6, avatar3],
  },
  {
    status: "Active",
    details: "InfiniO 4.1",
    date: "14.Mar.2018",
    Prograss: 48,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Active",
    details: "Many desktop publishing packages and web",
    date: "8.Mar.2018",
    Prograss: 78,
    team: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    status: "PENDING",
    details: "InfiniO 4.1",
    date: "14.Mar.2018",
    Prograss: 48,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Closed",
    details: "Massive Event - Conference and Event",
    date: "18.Mar.2018",
    Prograss: 100,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "PENDING",
    details: "Startup - OnePage Business Corporate Template",
    date: "14.Mar.2018",
    Prograss: 56,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Active",
    details: "Falcon - Bootstrap Admin Template + UI Kit",
    date: "18.Mar.2018",
    Prograss: 56,
    team: [avatar1, avatar2, avatar3],
  },
  {
    status: "Active",
    details: "Oreo Admin Bootstrap 4",
    date: "14.Mar.2018",
    Prograss: 56,
    team: [avatar1, avatar2, avatar3, avatar7],
  },
  {
    status: "Active",
    details: "Blazing Saddles Angular 5",
    date: "18.Mar.2018",
    Prograss: 56,
    team: [avatar1, avatar2, avatar3],
  },
];

export const TestimonialsCard2Data = [
  {
    image: avatar1,
    name: "Steve Jobs",
  },
  {
    image: avatar2,
    name: "Alizee Thomas",
  },
  {
    image: avatar3,
    name: "Hossein Shams",
  },
  {
    image: avatar4,
    name: "Maryam Amiri",
  },
];
