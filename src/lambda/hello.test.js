const hello = require("./hello")
// @ponicode
describe("hello.handler", () => {
    test("0", () => {
        let callFunction = () => {
            hello.handler({ queryStringParameters: "DROP TABLE tmp;" }, "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            hello.handler({ queryStringParameters: "UPDATE Projects SET pname = %s WHERE pid = %s" }, "UPDATE Projects SET pname = %s WHERE pid = %s", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            hello.handler({ queryStringParameters: "UNLOCK TABLES;" }, "UPDATE Projects SET pname = %s WHERE pid = %s", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            hello.handler({ queryStringParameters: "DELETE FROM Projects WHERE pid = %s" }, "DELETE FROM Projects WHERE pid = %s", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            hello.handler({ queryStringParameters: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';" }, "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            hello.handler(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
