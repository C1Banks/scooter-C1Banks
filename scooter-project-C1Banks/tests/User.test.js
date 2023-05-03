const User = require('../src/User')

    describe("User", ()=>{
        const user = new User("C1Banks", "RoboPunk2", 21);
        //create a user instance
        it("should create a user with a username, password and age.", ()=>{
            expect(user).toBeInstanceOf(User);
            expect(user.username).toBe("C1Banks");
            expect(user.password).toBe("RoboPunk2");
            expect(user.age).toBe(21);
        })

        //test user methods (login, logout)
        it("should log in a user", () => {
            user.login("RoboPunk2")
            expect(user.loggedIn).toBe(true);

        })

        it("should log out a user", () => {
            user.logout()
            expect(user.loggedIn).toBe(false);
        })
    })
// User tests here

// test username

// test password

// test age

// test login

// test logout
