const Airport = require('./airport');
const Flight = require('./flight');

class People{
	constructor(){
		this.id = null;
		this.details = {
			name : null;
			age : null;
			mobile  : null;
			email : null;
			username : null;
			password : null;
			address : null;
		}
		
	}
}

class Crew extends People{
	constructor(){
		super();
		this.crew_type = null // Either cabin-crew or pilot
		this.flight = new Flight.flight();
		this.dept_airport = new Airport()
		this.arrival_airport = new Airport();
    }
}

// This is the major class for booking of ticket by a Customer...This is done because the flight cost for different dates may be different
class FlightReservation(){
	constructor(reservation_no = null,creation_date = null){
		this.reservation_no = reservation_no;
		this.creation_date = creation_date;
		this.status_of_booking = null; 
		this.schedule = new Flight.flight_schedule;
		// Need to create a map of Customer and Flight Seat and have it as a member here

	}
}