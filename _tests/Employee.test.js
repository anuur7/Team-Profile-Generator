const Employee = require ('../lib/Employee');


describe("Creates an Employee", () => {
    it ("Employee name should get printed", () => {
        const name = "Ayaanle";
        const Emp = new Employee(name);
        expect(Emp.name).toBe(name);
    })

    it ("Employee id gets printed", () => {
        const id = "112";
        const Emp = new Employee("Ayaanle", id);
        expect(Emp.id).toBe(id);
    })

    it ("Employee email gets printed", () => {
        const email = "ayaanle@gmail.com";
        const Emp = new Employee("Ayaanle", "112", email);
        expect(Emp.email).toBe(email);
    })
})