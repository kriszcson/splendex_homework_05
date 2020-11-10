import { Component, Input } from '@angular/core';
import { ElementalEnum, Monster } from './model/monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() newMonster: { name: string, elemental: ElementalEnum.Elemental, atk: number, def: number, visible: boolean };
  monsters: Monster[] = [
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
  constructor() { }

  ngOnInit(): void {
  }
  addMonster(name) {
    this.monsters.push(name);
  }


  getLogo(m: Monster): string {
    switch (m.elemental) {
      case ElementalEnum.Elemental.Air: return "../../assets/air.svg";
      case ElementalEnum.Elemental.Earth: return "../../assets/earth.svg";
      case ElementalEnum.Elemental.Fire: return "../../assets/fire.svg";
      case ElementalEnum.Elemental.Water: return "../../assets/water.svg";
    }
  }
  onDeleteButtonClick(name: string) {
    for (let i = 0; i < this.monsters.length; i++) {
      if (name === this.monsters[i].name) {
        console.log(name);
        this.monsters.splice(i, 1);
      }
    }
  }
}