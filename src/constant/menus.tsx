import {
  BellIcon,
  HomeIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const MENUS = [
  {
    id: 1,
    icon: <HomeIcon className="w-6 h-6" />,
    name: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: <PresentationChartBarIcon className="w-6 h-6" />,
    name: "Statistik Pusdiklat",
    path: "/",
  },
  {
    id: 3,
    icon: <PresentationChartLineIcon className="w-6 h-6" />,
    name: "Statistik Aplikasi",
    path: "/",
  },
  {
    id: 4,
    icon: <BellIcon className="w-6 h-6" />,
    name: "Notifikasi",
    path: "/",
  },
];

export default MENUS;
