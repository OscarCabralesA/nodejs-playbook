const User = require('./User')
const Ride = require('./Ride')
const Travel = require('./Travel')

console.log("-Uber Model-")

console.log("User")
const user = new User("Oscar", "Cabrales", "pfp.png", "4455667788", "osc.cb455@gmail.com", "54das5646d54")
console.log(user)

console.log("Ride, Driver and Car")
const car = new Ride.Car("TOYOTA 32", "64SADAS")
const driver = new Ride.Driver("Tony")
driver.stars = 4.5
const ride = new Ride.Ride(driver, car)
console.log(ride)

console.log("Travel")
const travel = new Travel(user, ride, "Av. Independencia 21800", "Parque Metropolitano", 250, 20)
console.log(travel)