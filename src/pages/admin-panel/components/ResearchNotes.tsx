import { useState } from "react";

const ResearchNotes = () => {
  const [notes, setNotes] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <p>Notes for Research Assistant</p>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full h-28 p-3 border rounded resize-both overflow-auto bg-[#101827]"
        placeholder="Add any specific instruction or focus area..."
      />
    </div>
  );
};

export default ResearchNotes;
