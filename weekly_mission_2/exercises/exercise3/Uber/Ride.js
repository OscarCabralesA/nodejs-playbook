const { v4:uuidv4 } = require('uuid')

class Ride {
    constructor(driver, car) {
        this.driver = driver
        this.car = car
    }
}

class Driver {
    constructor(name) {
        this.id = uuidv4()
        this.name = name
        this.stars = 0
    }
}

class Car {
    constructor(model, plates) {
        this.model = model
        this.plates = plates
    }
}

module.exports.Ride = Ride
module.exports.Driver = Driver
module.exports.Car = Car