import { Payload } from './Payload';
import { Astronaut } from './Astronaut';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload[] = [];
    astronauts: Astronaut[] = []; 
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[]) : number {
        let sum: number = 0;
        for(const item of items) {
            sum += item.massKg;
        }
        return sum;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(cargoItems) 
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
 }