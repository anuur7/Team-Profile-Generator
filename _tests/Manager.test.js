const Manager = require("../lib/Manager")

describe("Creates a Manager", () => {
    it ("Manager name should get printed", () => {
        const name = "John";
        const Emp = new Manager(name);
        expect(Emp.name).toBe(name);
    })

    it ("Manager id gets printed", () => {
        const id = "111";
        const Emp = new Manager("John", id);
        expect(Emp.id).toBe(id);
    })

    it ("Manager email gets printed", () => {
        const email = "john@yahoo.co.uk";
        const Emp = new Manager("John", "111", email);
        expect(Emp.email).toBe(email);
    })

    it ("Manager number gets printed", () => {
        const officeNumber = "0123456789";
        const Emp = new Manager("John", "111", "John@gmail.com", officeNumber);
        expect(Emp.getOfficeNumber()).toBe(officeNumber);
    })
})