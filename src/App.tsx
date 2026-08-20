import { HashRouter, Routes, Route } from "react-router-dom";
import RiddleGate from "@/pages/RiddleGate";
import TeamPage from "@/pages/TeamPage";
import PrintIndex from "@/pages/PrintIndex";
import PrintTeamPage from "@/pages/PrintTeamPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RiddleGate />} />
        <Route path="/schedule" element={<TeamPage />} />
        <Route path="/print" element={<PrintIndex />} />
        <Route path="/print/:teamSlug" element={<PrintTeamPage />} />
      </Routes>
    </HashRouter>
  );
}
