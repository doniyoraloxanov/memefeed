import { Level } from "@prisma/client";

export const currency = "Br";
export const currencySign = "Br";
export const DEFAULT_TAX_PERCENTAGE = 15;

export const PROF_LEVEL_GUIDE =
  "https://medium.com/@memeprof/prof-the-meme-odyssey-your-journey-from-grifter-to-professor-on-memeprof-ee5e668fcc1f";

export const HOW_TO_EARN_POINTS =
  "https://medium.com/@memeprof/memeprof-points-quest-a-journey-of-creativity-and-connection-bda886d7dc2d";

export const MEME_PAPER_LINK =
  "https://drive.google.com/file/d/1CJI_3gRF5tTAUbKklLa7qHkwMSjPv04D/view?usp=sharing";

export const levels = [
  {
    id: 1,
    title: "🏆 The Professor",
    value: 5000000,
  },
  {
    id: 2,
    title: "🏆 Maestro",
    value: 2000000,
  },
  {
    id: 3,
    title: "🏆 Safecracker",
    value: 1000000,
  },
  {
    id: 4,
    title: "🏆 Infiltrator",
    value: 500000,
  },
  {
    id: 5,
    title: "🏆 Phantom",
    value: 200000,
  },
  {
    id: 6,
    title: "🏆 Cryptologist",
    value: 100000,
  },
  {
    id: 7,
    title: "🏆 Hacker",
    value: 75000,
  },
  {
    id: 8,
    title: "🏆 Wheelman",
    value: 50000,
  },
  {
    id: 9,
    title: "🏆 Plotter",
    value: 10000,
  },
  {
    id: 10,
    title: "🏆 Grifter",
    value: 1000,
  },
];

export const levelsMap = levels.reduce((acc, level) => {
  acc[level.value] = level.title;

  return acc;
}, {} as Record<number, string>);

export const levelMatcher = (points: number) => {
  const level = levels.find((l) => points >= l.value);

  return level?.title ?? Level.NOOB;
};

export const tabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "favs",
    name: "Favourites",
  },
  {
    id: "publ",
    name: "Published",
  },
  {
    id: "unpubl",
    name: "Unpublished",
  },
];

export const MainMenuContent = [
  {
    id: 1,
    title: "Profile",
    href: "/profile",
    icon: "/images/profile.png",
  },
  {
    id: 2,
    title: "Memes",
    href: "/memes",
    icon: "/images/memes.png",
  },
  {
    id: 3,
    title: "Referrals",
    href: "/referrals",
    icon: "/images/referrals.png",
  },
  {
    id: 4,
    title: "Text to Meme",
    href: "/text-to-meme",
    icon: "/images/textToMeme.png",
  },
  {
    id: 5,
    title: "Image to Meme",
    href: "/image-to-meme",
    icon: "/images/imageToMeme.png",
  },
  {
    id: 6,
    title: "Games",
    href: "/games",
    icon: "/images/games.png",
  },
  {
    id: 7,
    title: "Prof Trends",
    href: "/trending",
    icon: "/images/trending.png",
  },
];

export type Language =
  | "english"
  | "russian"
  | "french"
  | "spanish"
  | "hindi"
  | "chinese";

export type LanguageOption = {
  label: string;
  value: Language;
  id: string;
  subLabel: React.ReactNode;
};

export const languageOptions: LanguageOption[] = [
  {
    label: "English",
    value: "english",
    id: "english",
    subLabel: "English",
  },
  {
    label: "Russian",
    value: "russian",
    id: "russian",
    subLabel: "русский",
  },
  {
    label: "French",
    value: "french",
    id: "french",
    subLabel: "français",
  },
  {
    label: "Spanish",
    value: "spanish",
    id: "spanish",
    subLabel: "español",
  },
  { label: "Hindi", value: "hindi", id: "hindi", subLabel: "हिन्दी" },
  {
    label: "Chinese",
    value: "chinese",
    id: "chinese",
    subLabel: "中文",
  },
];

export const SUPPORT_BOT_LINK = `https://t.me/${process.env.NEXT_PUBLIC_SUPPORT_BOT}`;
export const PROFAPP_CHANNLE_LINK = `https://t.me/${process.env.NEXT_PUBLIC_CHANNEL_LINK}`;
