const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    
    describe('initialization', () => {
        // need an init function in the employee.js
        it('should get initialized correctly', () => {
            let newEngineer = new Engineer("Johan", 2, "Johan@sidmail.com", "github.com/JohansGit")

            // Arrange
            // Act
            // Assert
            expect(newEngineer.name).toEqual("Johan")
            expect(newEngineer.id).toEqual(2)
            expect(newEngineer.email).toEqual("Johan@sidmail.com")
            expect(newEngineer.github).toEqual("github.com/JohansGit")

        })
    });

    describe('getGithub', () => {
        it('should return the Github given', () => {
            let newEngineer = new Engineer("Johan", 1, "Johan@sidmail.com", "github.com/JohansGit")

            // Arrange
            // Act
            // Assert
            
            expect(newEngineer.getGithub()).toEqual("github.com/JohansGit")
            
        })

    });
   
    

    describe('getRole', () => {
        it('should return engineer when asked what role', () => {
            let newEngineer = new Engineer("Johan", 1, "Johan@sidmail.com", "github.com/JohansGit")

           expect(newEngineer.getRole()).toEqual("Engineer")

        })
    
    });
});