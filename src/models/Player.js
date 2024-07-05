"use strict";

export class Player {
  constructor(type, fullName, playerNumber, age, height, health, position) {
    this.type = type;
    this.fullName = fullName;
    this.playerNumber = playerNumber;
    this.age = age;
    this.height = height;
    this.health = health;
    this.position = position;
  }

  train(skill, amount) {
    skill += amount;
  }

  recoverFromInjury() {
    this.health = 95;
  }

  updateStats(playerSkill, amount) {
    playerSkill += amount;
  }

  requestTransfer() {
    this.motivation -= 20;
  }
}
