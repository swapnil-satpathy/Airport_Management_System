class PaymentInterface{
	constructor(){
		this.pay_id = null;
		this.name = null;
	}

}

class Mobile_payment extends PaymentInterface{
	constructor(mobile_number){
		super();
		this.mobile_number = mobile_number;
	}
}

class Card_Payment extends PaymentInterface{
	constructor(card_number){
		super();
		this.card_number = card_number;
	}
}



class Notification{
	constructor(id=null,createdOn=null){
	this.id = id;
	this.createdOn = createdOn;
	this.content = null;
 }
}

Notification.prototype.send = function(){
	// Logic to send the notification to customer
}


class Email_Notification extends Notification{
	constructor(email){
		super();
		this.email = email;
 }

}


class SMS_Notification extends Notification{
	constructor(mob_no){
		super();
		this.mob_no = mob_no;
 }

}
