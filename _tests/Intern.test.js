const Intern = require("../lib/Intern")

describe("Creates an Intern", () => {
    it ("Intern name gets printed", () => {
        const name = "Jake";
        const Emp = new Intern(name);
        expect(Emp.name).toBe(name);
    })

    it ("Intern id gets printed", () => {
        const id = "133";
        const Emp = new Intern("Jake", id);
        expect(Emp.id).toBe(id);
    })

    it ("Intern email gets printed", () => {
        const email = "jake@gmail.com";
        const Emp = new Intern("Jake", "133", email);
        expect(Emp.email).toBe(email);
    })

    it ("Intern school gets printed", () => {
        const school = "Matthew boulton";
        const Emp = new Intern("Jake", "133", "jake@gmail.com", school);
        expect(Emp.getSchool()).toBe(school);
    })
})
