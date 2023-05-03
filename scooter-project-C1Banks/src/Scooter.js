const User = require("./User");


class Scooter{
  
  // scooter code here
  constructor(station = null){
  const user = new User("C1Banks", "RoboPunk2", 21);

  
  this.station = station;
  this.user = null;
  this.serial = null;
  this.nextSerial = 1; 
  this.charge = 100;
  this.isBroken = false;

  }


  rent(user){
    if (this.charge > 20 && this.isBroken == false)
    {
      this.station = null;
      this.user = user;
      return;
    }
    else if(this.charge <= 20){
      return Error("scooter needs to charge")
    }
    else{
      return Error("scooter needs repair")
    }
  }

  dock(station){
    this.station = station;
    return this.user = null;
  }

}


module.exports = Scooter
