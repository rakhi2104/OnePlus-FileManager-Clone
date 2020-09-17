import { getRandomValue } from "../utils/fns";

const STATS = [
  {
    icon: "file-text",
    title: "Documents",
    color: "#fd8234",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
  {
    icon: "download",
    title: "Downloads",
    color: "#46c9d5",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
  {
    icon: "clock",
    title: "Recents",
    color: "#d3d925",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
  {
    icon: "image",
    title: "Images",
    color: "#4ec6d2",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
  {
    icon: "video",
    title: "Videos",
    color: "#5c82f2",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
  {
    icon: "music",
    title: "Audio",
    color: "#d9326f",
    value: getRandomValue(),
    size: getRandomValue(0, 64, 2),
  },
];

const USED_SIZE =
  Math.round(
    STATS.reduce((prev, item) => {
      console.log(item.size);
      return prev + Number(item.size);
    }, 0) * 100
  ) / 100;

const TOTAL = Math.pow(2, Math.round(Math.log2(USED_SIZE)) + 1);

const FILE_CATEGORIES = [
  {
    icon: "package",
    title: "Install packages",
    subtitle: getRandomValue(0, 120, 0) + " items",
  },
  {
    icon: "archive",
    title: "Archives",
    subtitle: getRandomValue(0, 120, 0) + " items",
  },
  {
    icon: "cloud",
    title: "Cloud Drive",
    subtitle: "Upload and store files in the cloud",
  },
  {
    icon: "database",
    title: "Favorites",
    subtitle: getRandomValue(0, 120, 0) + " items",
  },
  {
    icon: "package",
    title: "Large Items",
    subtitle: getRandomValue(0, 120, 0) + " items",
  },
  {
    icon: "lock",
    title: "Lockbox",
  },
];

export { FILE_CATEGORIES, STATS, USED_SIZE, TOTAL };
