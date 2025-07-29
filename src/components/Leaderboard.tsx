import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import CrownLogo from "@/assets/5.png";
import WAPLLogo from "@/assets/WAPL.png";
import { FaYoutube } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { DUMMY_TEAMS, table_header, sponsors } from "@/lib/constants";

interface TeamData {
  position: number;
  teamName: string;
  booyah: number;
  kills: number;
  place: number;
  total: number;
}

const Leaderboard = () => {
  // In the future, this will be replaced with an API call
  const teams: TeamData[] = DUMMY_TEAMS;

  return (
    <section className="min-h-screen px-6 py-8 md:px-12 lg:px-24 font-orbitron">
      <div className="mx-auto max-w-[1200px] space-y-12">
        {/* Logo Section */}
        <div className="flex justify-between items-center">
          <div className="size-20 md:size-24 lg:size-44">
            <img
              src={WAPLLogo}
              alt="WAPL Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Header Section */}
          <div className="flex flex-col items-center pt-16 px-8 space-y-0">
            <h1 className="text-2xl ml-10 tracking-wider text-white md:text-base lg:text-lg">
              WEST AFRICA PROFESSIONAL LEAGUE SEASON 2
            </h1>

            <div className="relative w-fit mx-auto">
              <h1 className="-mt-2 italic font-bebas font-bold text-3xl text-white backdrop-blu blur-l md:text-4xl lg:text-9xl z-10 relative">
                LEADERBOARD
              </h1>
              <div className="absolute bottom- inset-x-0 inset-y-0 bg-white opacity-30 blur-xl z-0" />
            </div>
          </div>

          <div className="size-20 md:size-24 lg:size-44">
            <img
              src={CrownLogo}
              alt="Crown Esports Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        <section className="space-y-2">
          {/* border-separate border-spacing-y-2 border-spacing-x-0 */}
          <Table className="border-separate border-spacing-y-2 border-spacing-x-0">
            <TableHeader className="[&_tr]:border-4">
              <TableRow className="bg-black hover:bg-black border-[#FFB800]">
                {table_header.map((item) => (
                  <TableHead
                    key={item}
                    className="py-3 text-center text-sm font-black md:text-lg uppercase bg-gradient-to-r from-white from-27% via-[#ffbb4d] to-[#ffffff] to-90% bg-clip-text text-transparent first:rounded-l-sm last:rounded-r-sm border-4 border-x-0 first:border-l-4 last:border-r-4 border-[#ffbb4d]"
                  >
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            {/* [&_tr:last-child]:border-4 */}
            <TableBody className="">
              {teams.map((team) => (
                <TableRow
                  key={team.position}
                  className="bg-transparent hover:bg-[#FFB800]/10 text-white text-center font-orbitron text-sm font-bold md:text-base border-b-0"
                >
                  <TableCell className="bg-black border-4 border-r-0 rounded-l-sm border-[#ffbb4d]">
                    {team.position}
                  </TableCell>
                  <TableCell className="border-4 border-r-0 border-[#ffbb4d]">
                    {team.teamName}
                  </TableCell>
                  <TableCell className="bg-black border-4 border-r-0 border-[#ffbb4d]">
                    {team.booyah}
                  </TableCell>
                  <TableCell className="border-4 border-r-0 border-[#ffbb4d]">
                    {team.kills}
                  </TableCell>
                  <TableCell className="bg-black border-4 border-r-0 border-[#ffbb4d]">
                    {team.place}
                  </TableCell>
                  <TableCell className="border-4 rounded-r-sm border-[#ffbb4d]">
                    {team.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Footer Section */}
        <div className="space-y-6 text-center px-8">
          <div className="inline-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Free_fire_logo.png"
              alt="Free Fire Logo"
              className="h-20 object-contain md:h-24"
            />
          </div>
          <div>
            <Badge className="px-6 py-3 text-sm bg-gradient-to-r from-[#56360d]/40 to-[#140604] text-white md:text-lg font-medium tracking-wider [&>svg]:size-5 cursor-pointer">
              WATCH ALL THE ACTION LIVE ON YOUTUBE{" "}
              <FaYoutube className="ml-2 text-white" /> 3CROWN ESPORTS
            </Badge>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex items-end justify-between px-8">
          <div className="gold-gradient-border">
            <h2 className="text-white text-sm px-4 py-1.5 md:text-base font-roboto bg-black">
              #3CROWNWAPLS2
            </h2>
          </div>

          <div className="flex justify-center items-center gap-4">
            {sponsors.map((sponsor, index) => (
                <img
                key={index  + 'w'}
                src={sponsor}
                alt={`${sponsor} logo`}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Leaderboard;

/* 
 <div
                key={index}
                className="h-10 w-10 rounded-lg bg-[#FFB800] text-xs font-bold text-black md:h-12 md:w-12 md:text-sm"
              >
                {sponsor}
              </div>
*/