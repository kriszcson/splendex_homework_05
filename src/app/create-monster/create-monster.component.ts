import { Component, Input, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';
import { MonstersComponent } from '../monsters/monsters.component';

@Component({
  selector: 'create-monster',
  templateUrl: './create-monster.component.html',
  styleUrls: ['./create-monster.component.scss']
})
export class CreateMonsterComponent implements OnInit {
  @Input() monsters: Monster[];
  selectInt: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  selectElemental() {
    let selectOfFour = this.selectInt % 4;
    switch (selectOfFour) {
      case 0: return "../../assets/water.svg";
      case 1: return "../../assets/air.svg";
      case 2: return "../../assets/earth.svg";
      case 3: return "../../assets/fire.svg";
    }
  }
  clickLeftArrow($event) {
    this.selectInt--;
  }
  clickRightArrow($event) {
    this.selectInt++;
  }
}
