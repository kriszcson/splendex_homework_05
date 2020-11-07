import { Component, OnInit, Input } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';
import { MonstersComponent } from '../monsters/monsters.component';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})

export class MonsterComponent implements OnInit {
  @Input() monster: Monster;
  @Input() monsters: Monster[];

  constructor() { }

  ngOnInit(): void {
  }

  remove(m: Monster): void {
    for (let i = 0; i < this.monsters.length; i++) {
      if (m.name === this.monsters[i].name) {
        this.monsters.splice(i, 1);
      }
    }
  }

  getLogo(m: Monster): string {
    switch (m.elemental) {
      case ElementalEnum.Elemental.Air: return "../../assets/air.svg";
      case ElementalEnum.Elemental.Earth: return "../../assets/earth.svg";
      case ElementalEnum.Elemental.Fire: return "../../assets/fire.svg";
      case ElementalEnum.Elemental.Water: return "../../assets/water.svg";
    }
  }
}
