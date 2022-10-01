const Intern = require("../lib/Intern")

describe('Intern', () => {

    describe('initialization', () => {
        it('should get initialized correctly', () => {
            let newIntern = new Intern("Jon", 3, "Jon@sidmail.com", "OU")

            expect(newIntern.name).toEqual("Jon")
            expect(newIntern.id).toEqual(3)
            expect(newIntern.email).toEqual("Jon@sidmail.com")
            expect(newIntern.school).toEqual("OU")

        })
    });

    describe('getSchool', () => {
        it('should return the school given', () => {
            let newIntern = new Intern("Jon", 3, "Jon@sidmail.com", "OU")

            expect(newIntern.getSchool()).toEqual("OU")

        })

    });



    describe('getRole', () => {
        it('should return Intern when asked what role', () => {
            let newIntern = new Intern("Jon", 3, "Jon@sidmail.com", "OU")

            expect(newIntern.getRole()).toEqual("Intern")

        })

    });
});