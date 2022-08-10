const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Steve', '1', 'steve@email.com');

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('steve@email.com');
});