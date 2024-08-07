import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Model from "./Model";
import { PLUS_ICN } from "../constants/icons";
import { dataContext } from "../context/store";

function StickyWall() {
  const [visibility,setVisibility] = useState(false)
  const {notes} = useContext(dataContext)
  const addNote = () => {
    setVisibility(true);
  };

  return (
    <>
      <Model visibility={visibility} setVisibility={setVisibility}/>
      <h1 className="text-3xl font-bold mb-3">Sticky Wall</h1>
      <div className="flex items-start gap-2 flex-wrap shadow-md border-[1px] rounded p-9 w-full">
        <div
          className="h-56 max-w-52 rounded text-slate-50 flex-1 flex items-center justify-center cursor-pointer bg-slate-500"
          onClick={addNote}
        >
          <PLUS_ICN size={100} className="font-thin" />
        </div>
        {
          notes.map((note)=><Card  key={note.id}  note={note} />)
        }
      </div>
    </>
  );
}

export default StickyWall;
