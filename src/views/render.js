"use strict";

// Elements
const teamInfoContainer = document.querySelector(".team-info");
const membersContainer = document.querySelector(".members");

// Functions
export const clearPreviousTeam = () => {
  teamInfoContainer.innerHTML = "";
  membersContainer.innerHTML = "";
};

export const renderManager = (manager) => {
  const html = `
              <div class="member-card manager-card">
                  <h2>Manager</h2>
                  <p><strong>Name:</strong> ${manager.fullName}</p>
                  <p><strong>Knowledge:</strong> ${manager.knowledge}</p>
                  <p><strong>Tactics:</strong> ${manager.tactics}</p>
                  <p><strong>Motivation:</strong> ${manager.motivation}</p>
                  <p><strong>Discipline:</strong> ${manager.discipline}</p>
              </div>    
      `;

  membersContainer.insertAdjacentHTML("beforeend", html);
};

export const renderGoalKeeper = (goalKeeper) => {
  const html = `
              <div class="member-card goalkeeper-card">
                  <h2>GoalKeeper</h2>
                  <p><strong>Name:</strong> ${goalKeeper.fullName}</p>
                  <p><strong>Player Number:</strong> ${goalKeeper.playerNumber}</p>
                  <p><strong>Age:</strong> ${goalKeeper.age}</p>
                  <p><strong>Height:</strong> ${goalKeeper.height} cm</p>
                  <p><strong>Health:</strong> ${goalKeeper.health}</p>
                  <p><strong>Position:</strong> ${goalKeeper.position}</p>
                  <p><strong>Reflexes:</strong> ${goalKeeper.reflexes}</p>
                  <p><strong>Bounce:</strong> ${goalKeeper.bounce}</p>
                  <p><strong>One on One:</strong> ${goalKeeper.oneOnOne}</p>
              </div>     
      `;

  membersContainer.insertAdjacentHTML("beforeend", html);
};

export const renderFootballer = (footballer) => {
  const html = `
              <div class="member-card footballer-card">
                  <h2>Footballer</h2>
                  <p><strong>Name:</strong> ${footballer.fullName}</p>
                  <p><strong>Player Number:</strong> ${footballer.playerNumber}</p>
                  <p><strong>Age:</strong> ${footballer.age}</p>
                  <p><strong>Height:</strong> ${footballer.height} cm</p>
                  <p><strong>Health:</strong> ${footballer.health}</p>
                  <p><strong>Position:</strong> ${footballer.position}</p>
                  <p><strong>Technique:</strong> ${footballer.technique}</p>
                  <p><strong>Speed:</strong> ${footballer.speed}</p>
                  <p><strong>Finishing:</strong> ${footballer.finishing}</p>
                  <p><strong>Shooting:</strong> ${footballer.shooting}</p>
                  <p><strong>Dribbling:</strong> ${footballer.dribbling}</p>
                  <p><strong>Defense:</strong> ${footballer.defense}</p>
                  <p><strong>Tackling:</strong> ${footballer.tackling}</p>
                  <p><strong>Aggression:</strong> ${footballer.aggression}</p>
                  <p><strong>Stamina:</strong> ${footballer.stamina}</p>
              </div>         
      `;

  membersContainer.insertAdjacentHTML("beforeend", html);
};

export const renderMembers = (membersData) => {
  membersData.map((member) => {
    if (member.type === "Manager") renderManager(member);
    if (member.type === "GoalKeeper") renderGoalKeeper(member);
    if (member.type === "Footballer") renderFootballer(member);
  });
};

export const renderTeam = (teamData) => {
  const members = [...[teamData.manager], ...teamData.players];

  const html = `
              <h1>${teamData.fullName}</h1>
              <h2>Attack: ${teamData.attack}</h2>
              <h2>Defense: ${teamData.defense}</h2>
              <p>Budget: ${teamData.budget}</p>
      `;

  teamInfoContainer.insertAdjacentHTML("beforeend", html);
  renderMembers(members);
};
