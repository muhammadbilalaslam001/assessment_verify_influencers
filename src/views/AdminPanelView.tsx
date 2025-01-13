import Header from "../pages/admin-panel/components/Header"
import InfluencerDiscovery from "../pages/admin-panel/components/InfluencerDiscovery";
import ResearchButton from "../pages/admin-panel/components/ResearchButton";
import ResearchCriteria from "../pages/admin-panel/components/ResearchCriteria";
import ResearchNotes from "../pages/admin-panel/components/ResearchNotes";
import ScientificJournal from "../pages/admin-panel/components/ScientificJournal";

const AdminPanelView=()=>{
    return (
      <div>
        <Header />
        <div className="pt-14 px-36 flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <p className="text-lg font-semibold text-[#67cb98] cursor-pointer">
              ← Back to Dashboard
            </p>
            <h1 className="text-4xl font-bold">Reserach Tasks</h1>
          </div>
          <div className="flex flex-col flex-grow p-3 border-2 border-[#374151] bg-[#17212F] rounded-md gap-4 pb-5">
            <p className="text-xl font-bold">Research Configuration</p>
            <InfluencerDiscovery />
            <ResearchCriteria />
            <ScientificJournal />
            <ResearchNotes />
            <ResearchButton />
          </div>
        </div>
      </div>
    );
}

export default AdminPanelView