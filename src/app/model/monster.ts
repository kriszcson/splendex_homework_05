export class Monster {
    name: string;
    elemental: ElementalEnum.Elemental;
    atk: number;
    def: number;
    visible: boolean;

    constructor(name: string, elemental: ElementalEnum.Elemental, atk: number, def: number, visible: boolean) {
        this.name = name;
        this.elemental = elemental;
        this.atk = atk;
        this.def = def;
        this.visible = visible;
    }
}
export namespace ElementalEnum {
    export enum Elemental {
        Air,
        Water,
        Fire,
        Earth
    }
}