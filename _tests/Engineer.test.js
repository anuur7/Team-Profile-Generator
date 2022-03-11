const Engineer = require("../lib/Engineer")

describe("Create an Engineer", () => {
    it ("Engineer name should get printed", () => {
        const name = "Sara";
        const Emp = new Engineer(name);
        expect(Emp.name).toBe(name);
    })

    it ("Engineer id gets printed", () => {
        const id = "012";
        const Emp = new Engineer("Sara", id);
        expect(Emp.id).toBe(id);
    })

    it ("Engineer email gets printed", () => {
        const email = "sara@gmail.com";
        const Emp = new Engineer("Sara", "123", email);
        expect(Emp.email).toBe(email);
    })

    
    it ("Engineer github username gets printed", () => {
        const github = "sara33";
        const Emp = new Engineer("Sara", "123", "sara@gmail.com", github);
        expect(Emp.getGithub()).toBe(github);
    })
})