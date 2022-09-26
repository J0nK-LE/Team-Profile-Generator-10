const Manager = require("../lib/Manager")

describe('Manager', () => {
    
    describe('initialization', () => {
        // need an init function in the employee.js
        it('should get initialized correctly', () => {
            let newManager = new Manager("Sam", 4, "Sam@sidmail.com", "365")

            // Arrange
            // Act
            // Assert
            expect(newManager.name).toEqual("Sam")
            expect(newManager.id).toEqual(4)
            expect(newManager.email).toEqual("Sam@sidmail.com")
            expect(newManager.officeNumber).toEqual("365")

        })
    });

        
    describe('getRole', () => {
        it('should return Manager when asked what role', () => {
            let newManager = new Manager("Sam", 4, "Sam@sidmail.com", "365")

           expect(newManager.getRole()).toEqual("Manager")

        })
    
    });
});