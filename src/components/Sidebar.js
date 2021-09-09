import React, { useState, useEffect } from "react";

function Sidebar() {
  const [saveNewSlot, setSaveNewSlot] = useState(false);
  const [openList, setOpenList] = useState(false);

  return (
    <form className="side-bar" onSubmit="">
      <ul>
        <li className="active">
          <span role="img" aria-label="home">
            🏚
          </span>
          Save and Battle
        </li>
        <li>
          <span role="img" aria-label="plus" onClick="">
            ➕
          </span>
          Party Slots
        </li>
        <div className="team-slots">
          <li class="active" onClick="">
            Team Slot 1
          </li>
          <li onClick="">Team Slot 2</li>
          <li onClick="">Team Slot 3</li>
          <li onClick=""> Team Slot 4</li>
        </div>
      </ul>
    </form>
  );
}

export default Sidebar;
