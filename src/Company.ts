import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class Company implements Mappeable {
    companyName: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    }
    constructor(){
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        }
    }
    markerContent(): string {
        return `
        <>
            <h1> Company Name: ${this.companyName} </h1>
            <p>Catchprase: ${this.catchPhrase} </p>
        </>
        `
    } 
}