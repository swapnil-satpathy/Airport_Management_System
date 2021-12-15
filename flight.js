
const Airport = require('./airport');

module.exports.flight=function Flight(flight_id,flight_company = null){
		this.flight_id = flight_id;
		this.flight_company = null;
		this.duration = null;
		this.dept_airport = new Airport()
		this.arrival_airport = new Airport();
	    this.seats = 	

}


class Seat(){
	constructor(){
	this.seatno = null;
	this.seat_class = null; //Seat class can be economy or business
  }
}

class FlightSeat extends Seat{
	constructor(){
		super();
		this.fare = null;
		this.book_status = null; //Can be Available or Booked
	}
}



module.exports.flight_schedule = function Flight_Schedule{
	this.flight = new Flight();
	this.depttime = null;
	this.gate = null;
}


function Airline(name = null, code = null){
	this.name = name;
	this.code = code;
	this.flights = null;
}

Airport.prototype.setflightsList = function(flights_list){
	this.flights=flights_list;
}
Airport.prototype.getFlightsList = function(){
	return this.flights;
}


