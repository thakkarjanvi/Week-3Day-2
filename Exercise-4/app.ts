class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayCarInfo(): void {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

const car1 = new Car("Maruti Suzuki", "Breeza", 2018);
const car2 = new Car("TATA", "Punch", 2023);

car1.displayCarInfo();      
car2.displayCarInfo();  