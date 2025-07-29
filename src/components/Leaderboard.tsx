import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import WAPLLogo from "@/assets/WAPL.png";
import CrownLogo from "@/assets/5.png";
import { DUMMY_TEAMS, table_header } from "@/lib/constants";

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
    <div className="min-h-screen bg-[#2A1810] px-6 py-8 md:px-12 lg:px-24 font-orbitron">
      <div className="mx-auto max-w-[1200px] space-y-12">
        {/* Logo Section */}
        <div className="flex justify-between px-8 items-center">
          <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
            <img
              src={WAPLLogo}
              alt="WAPL Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Header Section */}
          <div className="text-center px-8 space-y-0">
            <h1 className="text-2xl tracking-wider text-white md:text-base lg:text-base">
              WEST AFRICA PROFESSIONAL LEAGUE SEASON 2
            </h1>
            {/* <h2 className="-mt-4 italic font-bebas font-bold text-3xl text-white backdrop-blur-2xl md:text-4xl lg:text-[10rem]">
              LEADERBOARD
            </h2> */}

            <div className="relative w-fit mx-auto">
              <h1 className="-mt-4 italic font-bebas font-bold text-3xl text-white backdrop-blu blur-l md:text-4xl lg:text-[10rem] z-10 relative">
                LEADERBOARD
              </h1>
              <div className="absolute bottom- inset-x-0 inset-y-0 bg-white opacity-30 blur-xl z-0" />
            </div>
          </div>

          <h2 className="text-lg font-bold uppercase bg-gradient-to-r from-white via-[#fddc78] via-[#fbb03b] via-[#a8711f] to-[#ffdba5] bg-clip-text text-transparent">
            TEAM NAME
          </h2>

          <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
            <img
              src={CrownLogo}
              alt="Crown Esports Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        {/* <Card className="p-0 mx-4 overflow-hidden border-none border-[#FFB800] bg-black/40 backdrop-blur-sm">
          <CardContent className="p-0"> */}
        <section className="">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-[#FFB800] bg-gradient-to-r from-[#FFB800] to-[#CC9200]">
                {table_header.map((item) => (
                  <TableHead
                    key={item}
                    className="h-12 text-center text-sm font-black text-black md:text-base"
                  >
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {teams.map((team) => (
                <TableRow
                  key={team.position}
                  className="border-b border-[#FFB800]/30 bg-[#4A2810]/40 transition-colors hover:bg-[#FFB800]/10"
                >
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.position}
                  </TableCell>
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.teamName}
                  </TableCell>
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.booyah}
                  </TableCell>
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.kills}
                  </TableCell>
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.place}
                  </TableCell>
                  <TableCell className="h-10 text-center text-sm font-bold text-[#FFB800] md:text-base">
                    {team.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        {/* </CardContent>
        </Card> */}

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
            <Badge
              variant="outline"
              className="px-6 py-2 text-sm bg-[#4A2810]/40 border-[#FFB800] text-white md:text-base"
            >
              WATCH ALL THE ACTION LIVE ON YOUTUBE 3CROWN ESPORTS
            </Badge>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex items-end justify-between px-8">
          <Badge
            variant="outline"
            className="text-[#FFB800] border-[#FFB800] text-sm px-4 py-1.5 md:text-base"
          >
            #3CROWNWAPLS2
          </Badge>
          <div className="flex gap-4">
            {["S1", "S2", "S3"].map((sponsor, index) => (
              <div
                key={index}
                className="h-10 w-10 rounded-lg bg-[#FFB800] flex items-center justify-center text-xs font-bold text-black md:h-12 md:w-12 md:text-sm"
              >
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
