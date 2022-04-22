class Travel {
    constructor(requester, ride, pickupPoint, destination, cost, estimatedArrivalTime) {
        this.requester = requester
        this.ride = ride
        this.pickupPoint = pickupPoint
        this.destination = destination
        this.cost = cost
        this.estimatedArrivalTime = estimatedArrivalTime
    }
}

module.exports = Travel