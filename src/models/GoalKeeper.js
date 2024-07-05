"use strict";

import { Player } from "./Player.js";
// import { randomUpTo } from "./../helpers.js";
import { randomUpTo } from "../helpers.js";

export class GoalKeeper extends Player {
  constructor(
    type,
    fullName,
    playerNumber,
    age,
    height,
    health,
    position,
    reflexes,
    bounce,
    oneOnOne
  ) {
    super(type, fullName, playerNumber, age, height, health, position);
    this.reflexes = reflexes;
    this.bounce = bounce;
    this.oneOnOne = oneOnOne;
  }

  // isSaveCorner() {
  //   return (this.reflexes + this.bounce) / 2 > randomUpTo(100);
  // }

  getPenaltyScore() {
    return (this.reflexes + this.bounce + this.oneOnOne) / 3;
  }

  getFreekickScore() {
    return (this.reflexes + this.bounce) / 2;
  }
}
