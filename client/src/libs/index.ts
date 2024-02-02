import {
  type Icon,
  Category,
  Briefcase,
  WalletMoney,
  MessageText,
  Personalcard,
  Notification1,
  Profile2User,
  ArchiveBook,
  TrendUp,
  Box,
  DiscountShape,
  InfoCircle,
  ArrowCircleRight2,
  Setting2,
  Logout,
  BoxTick,
  I3DRotate,
  ShoppingCart,
  Coin1,
  Message,
} from "iconsax-react";
import React from "react";

type SidebarProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};
interface ApexDataProps {
  name: string;
  data: number[];
}
export type UserProps = {
  id: number;
  name: string;
  status: string;
  avatar: string;
  date: string;
  amount: string;
};
export type TotalCardsProps = {
  id?: number;
  icon: Icon;
  image: string;
  title: string;
  totalValue: string;
  stockValue: string;
  stockLabel: string;
  isTrendup?: boolean;
  isTrenddown?: boolean;
};
interface ApexOptionsProps {
  xaxis: {
    categories: string[];
  };
  chart: {
    toolbar: {
      show: boolean;
    };
  };
  tooltip: {
    style: {
      fontSize?: string;
      fontFamily?: string;
      backgroundColor?: string;
    };
  };
}

export const SIDEBAR_LINKS: SidebarProps[] = [
  {
    id: 1,
    label: "Create Project",
    icon: Category,
    link: "dashboard/createProject",
  },

  {
    id: 2,
    label: "Total Projects",
    icon: TrendUp,
    link: "total-projects",
  },
  {
    id: 3,
    label: "Timer",
    icon: Profile2User,
    link: "dashboard/timer",
  },
  {
    id: 4,
    label: "Chats",
    icon: Message,
    link: "chat",
  },
  {
    id: 5,
    label: "Notification",
    icon: Notification1,
    link: "notification",
  },
  {
    id: 6,
    label: "settings",
    icon: Setting2,
    link: "settings",
  },
];

export const Button_Link: SidebarProps[] = [
  {
    id: 1,
    label: "Right",
    icon: ArrowCircleRight2,
    link: "Right",
  },

  {
    id: 2,
    label: "Logout",
    icon: Logout,
    link: "",
  },
];

export const USERS: UserProps[] = [
  {
    id: 1,
    name: "Marcus Bergson",
    status: "paid",
    avatar: "/users/person-1.webp",
    date: "Nov 15, 2023",
    amount: "$80,000",
  },
  {
    id: 2,
    name: "Jaydon Vaccaro",
    status: "refund",
    avatar: "/users/person-2.webp",
    date: "Nov 15, 2023",
    amount: "$150,000",
  },
  {
    id: 3,
    name: "Corey Schleifer",
    status: "paid",
    avatar: "/users/person-3.webp",
    date: "Nov 15, 2023",
    amount: "$87,000",
  },
  {
    id: 4,
    name: "Cooper Press",
    status: "refund",

    avatar: "/users/person-4.webp",
    date: "Nov 15, 2023",
    amount: "$100,000",
  },
  {
    id: 5,
    name: "Phillip Lubin",
    status: "paid",
    avatar: "/users/person-5.png",
    date: "Nov 15, 2023",
    amount: "$70,000",
  },
  {
    id: 6,
    name: "Marcus Bergson",
    status: "paid",
    avatar: "/users/person-1.webp",
    date: "Nov 15, 2023",
    amount: "$80,000",
  },
  {
    id: 7,
    name: "Jaydon Vaccaro",
    status: "refund",
    avatar: "/users/person-2.webp",
    date: "Nov 15, 2023",
    amount: "$150,000",
  },
  {
    id: 8,
    name: "Corey Schleifer",
    status: "paid",
    avatar: "/users/person-3.webp",
    date: "Nov 15, 2023",
    amount: "$87,000",
  },
  {
    id: 9,
    name: "Cooper Press",
    status: "refund",

    avatar: "/users/person-4.webp",
    date: "Nov 15, 2023",
    amount: "$100,000",
  },
  {
    id: 10,
    name: "Phillip Lubin",
    status: "paid",
    avatar: "/users/person-5.png",
    date: "Nov 15, 2023",
    amount: "$70,000",
  },
];

type SidebarFooterProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: "open-sidebar" | "logout";
};
export const SIDEBAR_FOO_LINKS: SidebarFooterProps[] = [
  {
    id: 1,
    label: "Open sidebar",
    icon: ArrowCircleRight2,
    link: "open-sidebar",
  },
  {
    id: 2,
    label: "Logout",
    icon: Logout,
    link: "logout",
  },
];

export const TYPESidebarLinks = SIDEBAR_LINKS.map((link) => link.link);
