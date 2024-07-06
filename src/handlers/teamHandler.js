"use strict";

import { buildTeam } from "../builders/TeamBuilder.js";
import { renderTeam, clearPreviousTeam } from "../views/render.js";

export const setupTeamButtonHandlers = () => {
  const buttons = document.querySelectorAll(".team-button");

  buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const teamId = event.target.dataset.teamId;

      try {
        const response = await fetch(`http://localhost:3000/teams/${teamId}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const team = buildTeam(data);

        clearPreviousTeam();
        renderTeam(team);
      } catch (error) {
        console.error("Error fetching team data:", error);
        document.getElementById("teamData").innerText =
          "Error fetching team data";
      }
    });
  });
};
