
module.exports = function Airport(airport_id = null, name = null,city = null){
   
       this.airport_id = airport_id;
       this.name = name;
       this.city = city;
       this.address = null;
       this.flights_lists = null;
   
}


Airport.prototype.setflightsList = function(flights_list){
	this.flights_lists=flights_list;
}
Airport.prototype.getFlightsList = function(){
	return this.flights_lists;
}










// class Employee{
// 	constructor(){
// 		this.employee_id = null;
// 		this.employee_type = null;
// 		this.employee_dets = {
// 			name : null;
// 			age : null;
// 			mobile  : null;
// 			email : null;
// 			username : null;
// 			address : null;

// 		}
// 	}
// }

// class ticket_booking{
// 	constructor(){
// 		this.ticket_booking_id = null;
// 		this.payment = null;
// 		this.ticket_booking_date = null;
// 	}
// }