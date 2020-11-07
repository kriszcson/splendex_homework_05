import { Component, OnInit } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';

@Component({
  selector: 'monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})

export class MonstersComponent implements OnInit {
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
    this.newMonsters();
  }

  newMonsters() {
  }
}
