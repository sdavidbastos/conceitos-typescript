class Animal {
    constructor(protected name: string) {}

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Snake extends Animal {
    constructor(public name: string){
        super(name)
    }
    move(distance = 5){
        console.log("Slithering...")
        super.move(distance)
    }
}

class Horse extends Animal {
    constructor( public name: string){
        super(name)
    }
    move(distance = 45){
        console.log("Galloping...")
        super.move(distance)
    }
}

let sam = new Snake("Sammy the python")

sam.move()