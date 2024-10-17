var Theatre = /** @class */ (function () {
    function Theatre(tName, totalSeats) {
        this.tName = tName;
        this.seats = Array(totalSeats).fill(true);
    }
    Theatre.prototype.bookSeat = function (seatNumber) {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("invalid seat number");
            return false;
        }
        if (this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = false;
            console.log("Seat ".concat(seatNumber, " booked successfully"));
            return true;
        }
        else {
            console.log("Seat ".concat(seatNumber, " is already booked"));
            return false;
        }
    };
    Theatre.prototype.availableSeat = function () {
        return this.seats
            .map(function (isAvailable, index) { return (isAvailable ? index + 1 : null); })
            .filter(function (seat) { return seat !== null; });
    };
    Theatre.prototype.cancelSeats = function (seatNumber) {
        if (seatNumber < 1 || seatNumber > this.seats.length) {
            console.log("invalid seat");
            return false;
        }
        if (!this.seats[seatNumber - 1]) {
            this.seats[seatNumber - 1] = true;
            console.log("Booking cancelled sucecsfully");
            return true;
        }
        else {
            console.log("cancellation failed");
            return false;
        }
    };
    return Theatre;
}());
var theatre = new Theatre("Cinemas", 10);
console.log(theatre.availableSeat());
theatre.bookSeat(5);
theatre.bookSeat(2);
theatre.bookSeat(5);
console.log(theatre.availableSeat());
theatre.cancelSeats(5);
console.log(theatre.availableSeat());
theatre.bookSeat(5);
console.log(theatre.availableSeat());
