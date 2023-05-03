class User {
  // User code here
  constructor(username, password, age){
    this.loggedIn = false;
    this.password = password;
    this.username = username;
    this.age = age;
  }
  login(password){
    if(this.password === password){

      return this.loggedIn = true;

    }
    else{

      return Error("incorrect password");

    }
  }

  logout(){
    return this.loggedIn = false;
  }
}

module.exports = User
