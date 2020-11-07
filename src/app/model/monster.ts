export class Monster {
    name: string;
    elemental: ElementalEnum.Elemental;
    atk: number;
    def: number;
    visible: boolean;
}

export namespace ElementalEnum {
    export enum Elemental {
        Air,
        Water,
        Fire,
        Earth
    }
}