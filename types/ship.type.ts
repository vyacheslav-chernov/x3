export enum ShipType {
    TS = 'TS',
    TL = 'TL',
    TM = 'TM',
    M1 = 'M1',
    M2 = 'M2',
    M3 = 'M3',
    M4 = 'M4',
    M5 = 'M5',
    M6 = 'M6',
    M7 = 'M7',
    M8 = 'M8',
}

export type ShipTypeKey = keyof typeof ShipType;
export type ShipTypeValue = typeof ShipType[ShipTypeKey];
