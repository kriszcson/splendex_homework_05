import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { stringify } from 'querystring';
import { ElementalEnum, Monster } from '../model/monster';
import { MonsterComponent } from '../monster/monster.component';

@Component({
  selector: 'create-monster',
  templateUrl: './create-monster.component.html',
  styleUrls: ['./create-monster.component.scss']
})
export class CreateMonsterComponent implements OnInit {
  @Output() monsters: Monster[];
  selectInt: number = 1;
  atk: number = 1;
  def: number = 1;
  /* @Output() newonster: Monster = new EventEmitter<{name: string, elemental: ElementalEnum.Elemental, atk:number, def:number, visible:boolean}>;*/

  constructor() { }

  ngOnInit(): void {
  }

  addMonster(name) {
    console.log(this.selectElemental());
    console.log(this.atk);
    console.log(this.def);
    console.log(true);
    let m = new Monster(name.value, this.selectElemental(), this.atk, this.def, true);
    console.log(m);
    this.monsters.push(m);
  }
  selectElementalLogo() {
    let selectOfFour = this.selectInt % 4;
    switch (selectOfFour) {
      case 0: return "../../assets/water.svg";
      case 1: return "../../assets/air.svg";
      case 2: return "../../assets/earth.svg";
      case 3: return "../../assets/fire.svg";
    }
  }
  selectElemental() {
    let selectOfFour = this.selectInt % 4;
    switch (selectOfFour) {
      case 0: return ElementalEnum.Elemental.Water;
      case 1: return ElementalEnum.Elemental.Air;
      case 2: return ElementalEnum.Elemental.Earth;
      case 3: return ElementalEnum.Elemental.Fire;
    }
  }

  clickLeftArrow($event) {
    if (this.selectInt > 0) {
      this.selectInt--;
    }
  }
  clickRightArrow($event) {
    this.selectInt++;
  }

  clickAtkPlus($event) {
    this.atk++;
  }
  clickAtkMinus($event) {
    if (this.atk > 0) {
      this.atk--;
    }
  }

  clickDefPlus($event) {
    this.def++;
  }

  clickDefMinus($event) {
    if (this.def > 0) {
      this.def--;
    }
  }
}
