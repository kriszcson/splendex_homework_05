import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';
@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})

export class MonsterComponent implements OnInit {

  monsters: Monster[];
  constructor() { }

  ngOnInit(): void {
    this.monsters = [
      {
        name: "kriszcs",
        elemental: ElementalEnum.Elemental.Earth,
        atk: 21,
        def: 10,
        visible: true
      },
      {
        name: "YoZsI",
        elemental: ElementalEnum.Elemental.Fire,
        atk: 1,
        def: 100,
        visible: true
      },
      {
        name: "Gofri",
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

  getLogo(m: Monster): string {
    switch (m.elemental) {
      case ElementalEnum.Elemental.Air: return "../../assets/air.svg";
      case ElementalEnum.Elemental.Earth: return "../../assets/earth.svg";
      case ElementalEnum.Elemental.Fire: return "../../assets/fire.svg";
      case ElementalEnum.Elemental.Water: return "../../assets/water.svg";
    }
  }

}