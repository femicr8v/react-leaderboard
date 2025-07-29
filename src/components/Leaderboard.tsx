import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamData {
  position: number;
  teamName: string;
  booyah: number;
  kills: number;
  place: number;
  total: number;
}

const Leaderboard = () => {
  // Sample data - replace with actual data
  const teams: TeamData[] = Array(12)
    .fill(null)
    .map((_, index) => ({
      position: index + 1,
      teamName: `Team ${index + 1}`,
      booyah: 0,
      kills: 0,
      place: 0,
      total: 0,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 p-6">
      <div className="container mx-auto space-y-8">
        {/* Logo Section */}
        <div className="flex justify-between">
          <div className="h-20 w-20 rounded-full border-2 border-amber-500 bg-amber-500/10 p-4">
            <div className="flex h-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-xs font-bold">
              LOGO
            </div>
          </div>
          <div className="h-20 w-20 rounded-full border-2 border-amber-500 bg-amber-500/10 p-4">
            <div className="flex h-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-xs font-bold">
              LOGO
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-black italic tracking-wider text-white md:text-5xl lg:text-6xl">
            WEST AFRICA PROFESSIONAL LEAGUE
            <span className="block text-amber-500">SEASON 2</span>
          </h1>
          <h2 className="mt-4 text-xl font-bold tracking-wide text-amber-500 md:text-2xl">
            LEADERBOARD
          </h2>
        </div>

        {/* Leaderboard Table */}
        <Card className="border-2 border-amber-500 bg-black/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-amber-500 bg-gradient-to-r from-amber-500 to-amber-400 hover:bg-amber-400">
                  <TableHead className="text-center font-bold text-black">
                    POS
                  </TableHead>
                  <TableHead className="text-center font-bold text-black">
                    TEAM NAME
                  </TableHead>
                  <TableHead className="text-center font-bold text-black">
                    BOOYAH
                  </TableHead>
                  <TableHead className="text-center font-bold text-black">
                    KILLS
                  </TableHead>
                  <TableHead className="text-center font-bold text-black">
                    PLACE
                  </TableHead>
                  <TableHead className="text-center font-bold text-black">
                    TOTAL
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teams.map((team) => (
                  <TableRow
                    key={team.position}
                    className="border-b border-amber-500/30 transition-colors hover:bg-amber-500/10"
                  >
                    <TableCell className="text-center font-semibold text-white">
                      {team.position}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-white">
                      {team.teamName}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-white">
                      {team.booyah}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-white">
                      {team.kills}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-white">
                      {team.place}
                    </TableCell>
                    <TableCell className="text-center font-semibold text-white">
                      {team.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Footer Section */}
        <div className="text-center space-y-4">
          <div className="inline-block transform perspective-100 rotate-x-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-4 rounded-lg border-2 border-amber-600 shadow-lg hover:scale-105 transition-transform">
            <span className="text-2xl font-black italic text-black">
              FREE FIRE
            </span>
          </div>
          <div>
            <Badge
              variant="outline"
              className="px-6 py-2 text-base bg-amber-500/10 border-amber-500 text-white"
            >
              WATCH ALL THE ACTION LIVE ON YOUTUBE @3CROWN ESPORTS
            </Badge>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end mt-8">
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            #3CROWNWAPLS2
          </Badge>
          <div className="flex gap-4">
            {["S1", "S2", "S3"].map((sponsor, index) => (
              <div
                key={index}
                className="h-10 w-10 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-xs font-bold text-black"
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
