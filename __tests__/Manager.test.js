
const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const engineer = new Manager('Christopher', '5678', 'christopher@email.com', '10');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.officeNumber).toEqual(expect.any(String));
});