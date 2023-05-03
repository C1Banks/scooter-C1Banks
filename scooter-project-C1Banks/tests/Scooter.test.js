const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  const user = new User("C1banks", "RoboPunk2", 21);
  const scooter = new Scooter("dt")


  test('should create a scooter object', () => {
    // edit this to be a real test!
    expect(scooter).toBeInstanceOf(Scooter);
    expect(scooter.station).toBe("dt");
    expect(scooter.user).toBe(null);
    expect(scooter.serial).toBe(null);
    expect(scooter.nextSerial).toBe(1);
    //expect(scooter.nextSerial).toBe(1);
  }
)

  test("should remove scooter from station and assign it to User", () => {
      scooter.charge = 21;
      scooter.isBroken = false;
      scooter.user = user;

      scooter.rent(user)
      expect(scooter.user).toBe(user)

  })
})

//Method tests
//describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

//})
