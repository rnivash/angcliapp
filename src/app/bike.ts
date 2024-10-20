import { IProduct } from "./iproduct";

export class Bike implements IProduct {
    price!: number;
    cc!: number;
    torque!: number;
    torqueRpm!: number;
    maxPower!: number;
    maxPowerRpm!: number;
    speed!: number;
    gear!: number;
    tankCapacity!: number;
    image!: string

    constructor(public id: number, public name: string, 
        public description: string) { 

    }
}
