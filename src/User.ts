import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class User implements Mappeable {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    }
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        }
    }
    markerContent(): string {
        return `User Name: ${this.name}`
    }  
}


