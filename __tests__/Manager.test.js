// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Kevin', 1, 'test@email.com', 2);
    
    expect(manager.officeNum).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Kevin', 1, 'test@email.com');

    expect(manager.getRole()).toEqual("Manager");
}); 