"use strict";

import { Player } from "./Player.js";

export class Footballer extends Player {
  constructor(
    type,
    fullName,
    playerNumber,
    age,
    height,
    health,
    position,
    technique,
    speed,
    finishing,
    shooting,
    dribbling,
    defense,
    tackling,
    aggression,
    stamina
  ) {
    super(type, fullName, playerNumber, age, height, health, position);
    this.technique = technique;
    this.speed = speed;
    this.finishing = finishing;
    this.shooting = shooting;
    this.dribbling = dribbling;
    this.defense = defense;
    this.tackling = tackling;
    this.aggression = aggression;
    this.stamina = stamina;
  }

  getPenaltyScore() {
    return (this.technique + this.finishing + this.shooting) / 3;
  }

  getFreekickScore() {
    return (this.technique + this.shooting) / 2;
  }
}
