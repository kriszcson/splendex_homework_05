import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ElementalEnum, Monster } from '../model/monster';
import { MonstersComponent } from '../monsters/monsters.component';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})

export class MonsterComponent implements OnInit {
  @Input() monster: Monster;
  @Input() monsters: MonstersComponent;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  getLogo(m: Monster): string {
    switch (m.elemental) {
      case ElementalEnum.Elemental.Air: return "../../assets/air.svg";
      case ElementalEnum.Elemental.Earth: return "../../assets/earth.svg";
      case ElementalEnum.Elemental.Fire: return "../../assets/fire.svg";
      case ElementalEnum.Elemental.Water: return "../../assets/water.svg";
    }
  }

  onDeleteButtonClick($event, m: Monster) {
    this.delete.emit;
  }
}