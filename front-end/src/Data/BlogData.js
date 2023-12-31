import Image1 from "../assets/images/blog/blog-page-1.jpg";
import Image2 from "../assets/images/blog/blog-page-2.jpg";
import Image3 from "../assets/images/blog/blog-page-3.jpg";
import Image4 from "../assets/images/blog/blog-page-4.jpg";
import Insta1 from "../assets/images/blog/05-img.jpg";
import Insta2 from "../assets/images/blog/06-img.jpg";
import Insta3 from "../assets/images/blog/07-img.jpg";
import Insta4 from "../assets/images/blog/08-img.jpg";
import Insta5 from "../assets/images/blog/09-img.jpg";
import Insta6 from "../assets/images/blog/10-img.jpg";
import Insta7 from "../assets/images/blog/11-img.jpg";
import Insta8 from "../assets/images/blog/12-img.jpg";
import Insta9 from "../assets/images/blog/13-img.jpg";
import Comm1 from "../assets/images/sm/avatar2.jpg";
import Comm2 from "../assets/images/sm/avatar3.jpg";
import Comm3 from "../assets/images/sm/avatar4.jpg";

export const blogListCardData = [
  {
    ImageUrl: `${Image1}`,
    HeaderText: "ALL PHOTOGRAPHS ARE ACCURATE",
    Details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    ImageUrl: `${Image2}`,
    HeaderText: "ALL PHOTOGRAPHS ARE ACCURATE",
    Details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    ImageUrl: `${Image3}`,
    HeaderText: "ALL PHOTOGRAPHS ARE ACCURATE",
    Details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    ImageUrl: `${Image4}`,
    HeaderText: "ALL PHOTOGRAPHS ARE ACCURATE",
    Details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
];

export const blogAdsCardData = [
  {
    HeaderText: "Categories Clouds",
    RefLink: [
      {
        link: "#",
        name: "eCommerce",
      },
      {
        link: "#",
        name: "Microsoft Technologies",
      },
      {
        link: "#",
        name: "Creative UX",
      },
      {
        link: "#",
        name: "Wordpress",
      },
      {
        link: "#",
        name: "Angular JS",
      },
      {
        link: "#",
        name: "Enterprise Mobility",
      },
      {
        link: "#",
        name: "Website Design",
      },
      {
        link: "#",
        name: "HTML5",
      },
      {
        link: "#",
        name: "Infographics",
      },
      {
        link: "#",
        name: "Wordpress Development",
      },
    ],
  },
  {
    HeaderText: "Popular Posts",
    PostList: [
      {
        Ads: "Apple Introduces Search Ads Basic",
        Date: "jun 22, 2018",
        ImageUrl: `${Image2}`,
      },
      {
        Ads: "new rules, more cars, more races",
        Date: "jun 8, 2018",
        ImageUrl: `${Image3}`,
      },
    ],
  },
  {
    HeaderText: "Instagram Post",
    ImageList: [
      {
        ImageUrl: `${Insta1}`,
      },
      {
        ImageUrl: `${Insta2}`,
      },
      {
        ImageUrl: `${Insta3}`,
      },
      {
        ImageUrl: `${Insta4}`,
      },
      {
        ImageUrl: `${Insta5}`,
      },
      {
        ImageUrl: `${Insta6}`,
      },
      {
        ImageUrl: `${Insta7}`,
      },
      {
        ImageUrl: `${Insta8}`,
      },
      {
        ImageUrl: `${Insta9}`,
      },
    ],
  },
  {
    HeaderText: "Email Newsletter",
    HeaderDetails:
      "Get our products/news earlier than others, let’s get in touch.",
    EmailFeedbackBar: true,
  },
];

export const blogDetailsCardData = {
  ImageUrl: `${Image1}`,
  HeaderText: "ALL PHOTOGRAPHS ARE ACCURATE",
  Details:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

export const componentCardData = {
  HeaderText: "Comments 3",
  CommentsList: [
    {
      ImageUrl: `${Comm1}`,
      Name: "Gigi Hadid",
      comment:
        "Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem.",
      Date: "Mar 09 2018",
    },
    {
      ImageUrl: `${Comm2}`,
      Name: "Christian Louboutin",
      comment:
        "Great tutorial but few issues with it? If i try open post i get following errors. Please can you help me?",
      Date: "Mar 12 2018",
    },
    {
      ImageUrl: `${Comm3}`,
      Name: "Kendall Jenner",
      comment:
        "Very nice and informative article. In all the years I've done small and side-projects as a freelancer, I've ran into a few problems here and there.",
      Date: "Mar 20 2018",
    },
  ],
};
