import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';
@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})

export class MonsterComponent implements OnInit {
  @Input() newMonster: { name: string, elemental: ElementalEnum.Elemental, atk: number, def: number, visible: boolean };
  monsters: Monster[];
  constructor() { }

  ngOnInit(): void {
    this.monsters = [
      {
        name: "kriszke",
        elemental: ElementalEnum.Elemental.Earth,
        atk: 21,
        def: 10,
        visible: true
      },
      {
        name: "jozsi",
        elemental: ElementalEnum.Elemental.Fire,
        atk: 1,
        def: 100,
        visible: true
      },
      {
        name: "asd",
        elemental: ElementalEnum.Elemental.Air,
        atk: 123,
        def: 321,
        visible: true
      },
      {
        name: "Margit",
        elemental: ElementalEnum.Elemental.Fire,
        atk: 645,
        def: 75,
        visible: true
      }
    ]
  }
  addMonster(name) {
    this.monsters.push(this.newMonster);
  }

  getLogo(m: Monster): string {
    switch (m.elemental) {
      case ElementalEnum.Elemental.Air: return "../../assets/air.svg";
      case ElementalEnum.Elemental.Earth: return "../../assets/earth.svg";
      case ElementalEnum.Elemental.Fire: return "../../assets/fire.svg";
      case ElementalEnum.Elemental.Water: return "../../assets/water.svg";
    }
  }
  onDeleteButtonClick(m: Monster) {
    console.log("HEHEHE");
    console.log(m);

  }
}