class Theatre {
    tName: string;
    seats: boolean[];

    constructor( tName: string, totalSeats: number){
        this.tName = tName;
        this.seats = Array(totalSeats).fill(true);
    }

     bookSeat(seatNumber: number): boolean {
        if(seatNumber<1 || seatNumber> this.seats.length){
            console.log("invalid seat number");
            return false;
        }
        if(this.seats[seatNumber-1]){
            this.seats[seatNumber-1] = false;
            console.log(`Seat ${seatNumber} booked successfully`);
            return true;
        } else{
            console.log(`Seat ${seatNumber} is already booked`);
            return false;
        }
     }

     availableSeat(): number[] {
        return this.seats
            .map((isAvailable, index) => (isAvailable ? index+1 :null))
            .filter(seat => seat !==null) as number[];
     }

     cancelSeats(seatNumber: number): boolean{
        if(seatNumber<1||seatNumber>this.seats.length){
            console.log("invalid seat");
            return false;
        }
        if(!this.seats[seatNumber-1]){
            this.seats[seatNumber-1] = true;
            console.log(`Booking cancelled sucecsfully`);
            return true;
        } else{
            console.log("cancellation failed");
            return false;
        }
     }

}

const theatre = new Theatre("Cinemas", 10);
console.log(theatre.availableSeat());
theatre.bookSeat(5);
theatre.bookSeat(2);
theatre.bookSeat(5);

console.log(theatre.availableSeat());
theatre.cancelSeats(5);
console.log(theatre.availableSeat());
theatre.bookSeat(5);
console.log(theatre.availableSeat());
