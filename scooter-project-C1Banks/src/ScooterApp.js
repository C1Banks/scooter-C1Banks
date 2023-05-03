const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  
  // ScooterApp code here
  constructor(){
    this.stations = [];
    this.registeredUsers = [];

  }
  registerUser(username, password, age){
    if(age >= 18 && !this.registeredUsers.includes(username)){
      this.registeredUsers.push(username);
      this.registeredUsers.push(password);
      console.log("user has been registered");
      return User;
    }
    else if ( age < 18 ){
      return Error ("user is too young")
    }
    else if (this.registeredUsers.includes(username)){
      return Error("already registered")
    }
  }

  loginUser(username, password){

    if(registeredUsers.includes(username) && this.registeredUsers.includes(password))
    {
    
      this.loginUser = true;
    
    return this.username;
    }
    
  }

}

module.exports = ScooterApp
