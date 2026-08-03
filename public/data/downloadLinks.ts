import { FaAndroid } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IconType } from "react-icons";

export type AppLinktype = {
  id: number;
  text: string;
  href: string;
  icon: IconType;
};

export  const  AppLinks: AppLinktype[] = [
  {
    id: 1,
    text: "نسخه اندروید",
    href: "https://piyaro.ir/piyaro.apk",
    icon: FaAndroid,
  },
  {
    id: 2,
    text: "نسخه PWA ایفون",
    href: "https://piyaro.ir/app",
    icon: FaAppStoreIos,
  },
];

