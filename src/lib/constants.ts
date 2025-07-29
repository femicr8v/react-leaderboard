import IceLogo from "@/assets/ice.png";
import MlnLogo from "@/assets/mln.png";
import EsportLogo from "@/assets/esport-africa.png";

export interface TeamData {
  position: number;
  teamName: string;
  booyah: number;
  kills: number;
  place: number;
  total: number;
}

export const table_header: string[] = [
  "POS",
  "TEAM NAME",
  "BOOYAH",
  "KILLS",
  "PLACE",
  "TOTAL",
];

export const DUMMY_TEAMS: TeamData[] = [
  {
    position: 1,
    teamName: "Crown Esports",
    booyah: 3,
    kills: 45,
    place: 89,
    total: 134,
  },
  {
    position: 2,
    teamName: "Team Elite",
    booyah: 2,
    kills: 38,
    place: 82,
    total: 120,
  },
  {
    position: 3,
    teamName: "Phoenix Force",
    booyah: 2,
    kills: 35,
    place: 78,
    total: 113,
  },
  {
    position: 4,
    teamName: "Shadow Squad",
    booyah: 1,
    kills: 32,
    place: 75,
    total: 107,
  },
  {
    position: 5,
    teamName: "Viper Gaming",
    booyah: 1,
    kills: 30,
    place: 72,
    total: 102,
  },
  {
    position: 6,
    teamName: "Dragon Warriors",
    booyah: 1,
    kills: 28,
    place: 70,
    total: 98,
  },
  {
    position: 7,
    teamName: "Storm Riders",
    booyah: 1,
    kills: 25,
    place: 68,
    total: 93,
  },
  {
    position: 8,
    teamName: "Titan Gaming",
    booyah: 0,
    kills: 22,
    place: 65,
    total: 87,
  },
  {
    position: 9,
    teamName: "Nova Esports",
    booyah: 0,
    kills: 20,
    place: 62,
    total: 82,
  },
  {
    position: 10,
    teamName: "Apex Legends",
    booyah: 0,
    kills: 18,
    place: 60,
    total: 78,
  },
  {
    position: 11,
    teamName: "Rebel Gaming",
    booyah: 0,
    kills: 15,
    place: 58,
    total: 73,
  },
  {
    position: 12,
    teamName: "Omega Squad",
    booyah: 0,
    kills: 12,
    place: 55,
    total: 67,
  },
];

export const sponsors = [
  EsportLogo,
  IceLogo,
  MlnLogo
]