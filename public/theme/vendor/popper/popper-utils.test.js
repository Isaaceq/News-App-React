const rewire = require("rewire")
const popper_utils = rewire("./popper-utils")
const isIE = popper_utils.__get__("isIE")
const isOffsetContainer = popper_utils.__get__("isOffsetContainer")
const getRoot = popper_utils.__get__("getRoot")
const findCommonOffsetParent = popper_utils.__get__("findCommonOffsetParent")
const getSize = popper_utils.__get__("getSize")
const getFixedPositionOffsetParent = popper_utils.__get__("getFixedPositionOffsetParent")
const getArea = popper_utils.__get__("getArea")
const microtaskDebounce = popper_utils.__get__("microtaskDebounce")
const taskDebounce = popper_utils.__get__("taskDebounce")
const find = popper_utils.__get__("find")
const getOppositePlacement = popper_utils.__get__("getOppositePlacement")
const getWindow = popper_utils.__get__("getWindow")
const attachToScrollParents = popper_utils.__get__("attachToScrollParents")
// @ponicode
describe("popper_utils.getStyleComputedProperty", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: 2, ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } } }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: 0, ownerDocument: { defaultView: { getComputedStyle: () => "Elio" } } }, "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: 987650, ownerDocument: { defaultView: { getComputedStyle: () => "Dillenberg" } } }, "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: 1, ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } } }, "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: 1, ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } } }, "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getStyleComputedProperty({ nodeType: NaN, ownerDocument: {} }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getParentNode", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getParentNode({ nodeName: "UPDATE Projects SET pname = %s WHERE pid = %s", parentNode: "Janet Homenick", host: "smtp.gmail.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getParentNode({ nodeName: "HTML", parentNode: "Ronald Keeling", host: "smtp.gmail.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getParentNode({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", parentNode: "Maurice Purdy", host: "smtp-relay.sendinblue.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getParentNode({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", parentNode: "Janet Homenick", host: "smtp-relay.sendinblue.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getParentNode({ nodeName: "HTML", parentNode: "Janet Homenick", host: "smtp.gmail.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getParentNode(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getScrollParent", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getScrollParent({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: { body: "Michael" }, body: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getScrollParent({ nodeName: "DELETE FROM Projects WHERE pid = %s", ownerDocument: { body: "Jean-Philippe" }, body: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getScrollParent({ nodeName: "HTML", ownerDocument: { body: "Michael" }, body: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getScrollParent({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: { body: "Jean-Philippe" }, body: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getScrollParent({ nodeName: "HTML", ownerDocument: { body: "Edmond" }, body: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getScrollParent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isIE", () => {
    test("0", () => {
        let callFunction = () => {
            isIE(9)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            isIE("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            isIE(11)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            isIE(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            isIE(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            isIE(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getOffsetParent", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent({ ownerDocument: { documentElement: false }, offsetParent: 4, nextElementSibling: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent({ ownerDocument: { documentElement: false }, offsetParent: 2, nextElementSibling: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent({ ownerDocument: { documentElement: false }, offsetParent: 2, nextElementSibling: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent({ ownerDocument: { documentElement: true }, offsetParent: 18, nextElementSibling: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent({ ownerDocument: { documentElement: true }, offsetParent: 4, nextElementSibling: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getOffsetParent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isOffsetContainer", () => {
    test("0", () => {
        let callFunction = () => {
            isOffsetContainer({ firstElementChild: 254 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            isOffsetContainer({ firstElementChild: 142 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            isOffsetContainer({ firstElementChild: 224 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            isOffsetContainer({ firstElementChild: 239 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            isOffsetContainer({ firstElementChild: 164 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            isOffsetContainer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRoot", () => {
    test("0", () => {
        let callFunction = () => {
            getRoot({ parentNode: "Ronald Keeling" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRoot({ parentNode: "Janet Homenick" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getRoot({ parentNode: "Maurice Purdy" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getRoot({ parentNode: "Becky Bednar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getRoot({ parentNode: "Gail Hoppe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getRoot(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("findCommonOffsetParent", () => {
    test("0", () => {
        let callFunction = () => {
            findCommonOffsetParent({ nodeType: false, compareDocumentPosition: () => 0.0 }, { nodeType: "Île-de-France", compareDocumentPosition: () => -29.45 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            findCommonOffsetParent({ nodeType: 0, compareDocumentPosition: () => 0.5 }, { nodeType: "Florida", compareDocumentPosition: () => 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            findCommonOffsetParent({ nodeType: "Île-de-France", compareDocumentPosition: () => 10.0 }, { nodeType: "Abruzzo", compareDocumentPosition: () => 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            findCommonOffsetParent({ nodeType: "Florida", compareDocumentPosition: () => 0.5 }, { nodeType: "Île-de-France", compareDocumentPosition: () => 0.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            findCommonOffsetParent({ nodeType: 0, compareDocumentPosition: () => -1.0 }, { nodeType: false, compareDocumentPosition: () => -1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            findCommonOffsetParent(undefined, { nodeType: NaN, compareDocumentPosition: () => NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getBordersSize", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getBordersSize("Jean-Philippe", "x")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getBordersSize("Anas", "x")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getBordersSize("Jean-Philippe", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getBordersSize("Anas", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getBordersSize("Anas", 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getBordersSize(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getSize", () => {
    test("0", () => {
        let callFunction = () => {
            getSize(0, { Height: 0.0 }, "<source src=\"http://www.google.com\">", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getSize("Height", { Height: 64 }, "<html> HTML </html>", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getSize(3, { Height: 24 }, "a<a [onclick]=\"click\">b</a>", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getSize(1, { Height: 0.0 }, "<html> HTML </html>", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getSize(0, { Height: 1080 }, "<source src=\"http://www.google.com\">", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getSize(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getWindowSizes", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes({ body: "George", documentElement: "Ronald Keeling" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes({ body: "Jean-Philippe", documentElement: "Becky Bednar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes({ body: "Jean-Philippe", documentElement: "Janet Homenick" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes({ body: "Edmond", documentElement: "Janet Homenick" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes({ body: "Pierre Edouard", documentElement: "Ronald Keeling" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getWindowSizes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getClientRect", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getClientRect({ left: 400, width: 99, top: 287, height: 720 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getClientRect({ left: 380, width: "bar", top: 576, height: 544 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getClientRect({ left: 0, width: 20, top: 12000, height: 2048 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getClientRect({ left: 90, width: 48, top: 544, height: 800 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getClientRect({ left: 90, width: 40, top: 0.5, height: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getClientRect(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getBoundingClientRect", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect({ nodeName: "DELETE FROM Projects WHERE pid = %s", width: 800, height: 20, offsetWidth: 0, offsetHeight: 0.0, ownerDocument: "Ronald Keeling", clientWidth: 30, clientHeight: 56784, getBoundingClientRect: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", width: 16, height: 80.0, offsetWidth: 1, offsetHeight: 987650, ownerDocument: "Becky Bednar", clientWidth: 1000, clientHeight: "bc23a9d531064583ace8f67dad60f6bb", getBoundingClientRect: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect({ nodeName: "DELETE FROM Projects WHERE pid = %s", width: 255, height: 0.5, offsetWidth: -1, offsetHeight: 10, ownerDocument: "Becky Bednar", clientWidth: 1000, clientHeight: 12345, getBoundingClientRect: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", width: 720, height: 80.0, offsetWidth: 512, offsetHeight: -10, ownerDocument: "Becky Bednar", clientWidth: 255, clientHeight: 987650, getBoundingClientRect: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect({ nodeName: "DROP TABLE tmp;", width: 20, height: 2, offsetWidth: -10, offsetHeight: -10, ownerDocument: "Gail Hoppe", clientWidth: 12, clientHeight: 987650, getBoundingClientRect: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getBoundingClientRect(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.isFixed", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.isFixed({ nodeName: "DROP TABLE tmp;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.isFixed({ nodeName: "BODY" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.isFixed({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.isFixed({ nodeName: "HTML" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.isFixed({ nodeName: "DELETE FROM Projects WHERE pid = %s" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.isFixed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getFixedPositionOffsetParent", () => {
    test("0", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: "Gail Hoppe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: "Ronald Keeling" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: "Becky Bednar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getFixedPositionOffsetParent({ parentElement: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getArea", () => {
    test("0", () => {
        let callFunction = () => {
            getArea({ width: 2048, height: 20 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getArea({ width: 480, height: 120 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getArea({ width: 0, height: 99 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getArea({ width: 255, height: 287 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getArea({ width: 8, height: 320 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getArea({ width: undefined, height: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("microtaskDebounce", () => {
    test("0", () => {
        let callFunction = () => {
            microtaskDebounce(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            microtaskDebounce(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("taskDebounce", () => {
    test("0", () => {
        let callFunction = () => {
            taskDebounce(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            taskDebounce(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("find", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            find(param1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            find(param1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            find(param1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let object3 = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            find(param1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            find(param1, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            find(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.findIndex", () => {
    test("0", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let callFunction = () => {
            popper_utils.findIndex(param1, false, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let callFunction = () => {
            popper_utils.findIndex(param1, false, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let callFunction = () => {
            popper_utils.findIndex(param1, false, "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let callFunction = () => {
            popper_utils.findIndex(param1, false, "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            popper_utils.findIndex(param1, false, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.findIndex(undefined, false, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getOffsetRect", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: "Becky Bednar", offsetWidth: 18, offsetHeight: 12, offsetLeft: 0, offsetTop: 512 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "HTML", ownerDocument: "Becky Bednar", offsetWidth: 4, offsetHeight: 987650, offsetLeft: 4, offsetTop: 4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: "Becky Bednar", offsetWidth: 0, offsetHeight: "bc23a9d531064583ace8f67dad60f6bb", offsetLeft: 0, offsetTop: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "UPDATE Projects SET pname = %s WHERE pid = %s", ownerDocument: "Gail Hoppe", offsetWidth: 32, offsetHeight: 12345, offsetLeft: 18, offsetTop: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: "Maurice Purdy", offsetWidth: 1, offsetHeight: "a1969970175", offsetLeft: 1, offsetTop: 4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getOffsetRect({ nodeName: "", ownerDocument: "", offsetWidth: -Infinity, offsetHeight: -Infinity, offsetLeft: -Infinity, offsetTop: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getOuterSizes", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes({ ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } }, offsetHeight: "bar", offsetWidth: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes({ ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } }, offsetHeight: "bc23a9d531064583ace8f67dad60f6bb", offsetWidth: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes({ ownerDocument: { defaultView: { getComputedStyle: () => "Dillenberg" } }, offsetHeight: 0, offsetWidth: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes({ ownerDocument: { defaultView: { getComputedStyle: () => "elio@example.com" } }, offsetHeight: -1, offsetWidth: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes({ ownerDocument: { defaultView: { getComputedStyle: () => "Dillenberg" } }, offsetHeight: "bar", offsetWidth: "bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getOuterSizes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getOppositePlacement", () => {
    test("0", () => {
        let callFunction = () => {
            getOppositePlacement("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getOppositePlacement("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getOppositePlacement(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getOppositePlacement(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getOppositePlacement("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getOppositePlacement(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getPopperOffsets", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(100, "object", [0, -5.48, -100, 0, 0, 0, -5.48, -100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(100, [10, -1, "number", 10, 1, 10, 0, 0], [0, 0, 100, 1, -5.48, 0, -5.48, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(-5.48, [0, -1, 0.0, 1, 10, 0.0, -1, -1], [1, -100, -100, 1, -100, 100, -100, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(1, "string", [0, 100, -100, -5.48, -100, 1, 100, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(-100, [-1, -1, -1, 0, 1, 1, 10, 0.0], [1, 0, 1, -100, -100, 100, 100, -100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getPopperOffsets(Infinity, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.getSupportedPropertyName", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.getSupportedPropertyName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.isFunction", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.isFunction("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.isFunction("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.isFunction("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.isFunction("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.isFunction("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.isFunction(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.isModifierEnabled", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled({ some: () => true }, "Checking Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled({ some: () => false }, "Home Loan Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled({ some: () => true }, "Investment Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled({ some: () => false }, "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled({ some: () => true }, "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.isModifierEnabled(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.isModifierRequired", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired({ some: () => false }, "user_name", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired({ some: () => true }, "username", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired({ some: () => true }, "username", "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired({ some: () => true }, "user_name", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired({ some: () => true }, "user-name", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.isModifierRequired(undefined, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.isNumeric", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.isNumeric("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.isNumeric("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.isNumeric("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.isNumeric("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.isNumeric("user1+user2@mycompany.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.isNumeric(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getWindow", () => {
    test("0", () => {
        let callFunction = () => {
            getWindow({ ownerDocument: { defaultView: "v1.2.4" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getWindow({ ownerDocument: { defaultView: "^5.0.0" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getWindow({ ownerDocument: { defaultView: "4.0.0-beta1\t" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getWindow({ ownerDocument: { defaultView: "1.0.0" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getWindow({ ownerDocument: { defaultView: "v4.0.0-rc.4" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getWindow(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.removeEventListeners", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners("object", { scrollParents: { forEach: () => "George" }, updateBound: "2017-09-29T19:01:00.000", scrollElement: 987650, eventsEnabled: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners("object", { scrollParents: { forEach: () => "Jean-Philippe" }, updateBound: "Mon Aug 03 12:45:00", scrollElement: 12, eventsEnabled: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners("array", { scrollParents: { forEach: () => "Anas" }, updateBound: "01:04:03", scrollElement: 56784, eventsEnabled: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners("number", { scrollParents: { forEach: () => "George" }, updateBound: "Mon Aug 03 12:45:00", scrollElement: 12, eventsEnabled: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners("object", { scrollParents: { forEach: () => "Jean-Philippe" }, updateBound: "2017-09-29T19:01:00.000", scrollElement: 12, eventsEnabled: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.removeEventListeners(undefined, { scrollParents: {}, updateBound: "", scrollElement: Infinity, eventsEnabled: false })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.runModifiers", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.runModifiers("Pierre Edouard", { offsets: { popper: () => false, reference: () => true } }, "Extensions")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.runModifiers("Edmond", { offsets: { popper: () => false, reference: () => true } }, "Extensions")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.runModifiers("Pierre Edouard", { offsets: { popper: () => false, reference: () => true } }, "Port")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.runModifiers("Jean-Philippe", { offsets: { popper: () => false, reference: () => true } }, "Harbors")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.runModifiers("Anas", { offsets: { popper: () => false, reference: () => true } }, "Lights")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.runModifiers(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.setAttributes", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.setAttributes({ setAttribute: () => true, removeAttribute: () => "Gail Hoppe" }, { key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.setAttributes({ setAttribute: () => true, removeAttribute: () => "Maurice Purdy" }, { key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.setAttributes({ setAttribute: () => false, removeAttribute: () => "Ronald Keeling" }, { key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.setAttributes({ setAttribute: () => true, removeAttribute: () => "Maurice Purdy" }, { key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.setAttributes({ setAttribute: () => false, removeAttribute: () => "Janet Homenick" }, { key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.setAttributes(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.setStyles", () => {
    test("0", () => {
        let callFunction = () => {
            popper_utils.setStyles({ style: "Anas" }, { key5: 100, 2: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            popper_utils.setStyles({ style: "Anas" }, { key5: 1, 2: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            popper_utils.setStyles({ style: [120, 48, 24000, 48000, 120, 150, 20] }, { key5: -5.48, 2: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            popper_utils.setStyles({ style: [400, 390, 20, 8, 2048, 1000, 200] }, { key5: 0, 2: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            popper_utils.setStyles({ style: [720, 287, 2048, 390, 15, 320, 1000] }, { key5: 100, 2: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.setStyles(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("attachToScrollParents", () => {
    test("0", () => {
        let callFunction = () => {
            attachToScrollParents({ nodeName: "DELETE FROM Projects WHERE pid = %s", ownerDocument: { defaultView: "^5.0.0" } }, "invoice", () => "return callback value", [false, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            attachToScrollParents({ nodeName: "BODY", ownerDocument: { defaultView: "v4.0.0-rc.4" } }, "invoice", () => "return callback value", [true, false, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            attachToScrollParents({ nodeName: "UNLOCK TABLES;", ownerDocument: { defaultView: "4.0.0-beta1\t" } }, "invoice", () => "return callback value", [true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            attachToScrollParents({ nodeName: "DELETE FROM Projects WHERE pid = %s", ownerDocument: { defaultView: "4.0.0-beta1\t" } }, "invoice", () => "return callback value", [false, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            attachToScrollParents({ nodeName: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", ownerDocument: { defaultView: "v1.2.4" } }, "withdrawal", () => "return callback value", [false, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            attachToScrollParents(undefined, undefined, undefined, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("popper_utils.setupEventListeners", () => {
    test("0", () => {
        let param2 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], false, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            popper_utils.setupEventListeners("string", param2, { scrollElement: "Australian Freshwater Crocodile", scrollParents: false, eventsEnabled: true }, "Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            popper_utils.setupEventListeners("string", param2, { scrollElement: "Saltwater Crocodile", scrollParents: true, eventsEnabled: false }, "2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            popper_utils.setupEventListeners("string", param2, { scrollElement: "Dwarf Crocodile", scrollParents: true, eventsEnabled: true }, "2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [true, false, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            popper_utils.setupEventListeners("string", param2, { scrollElement: "Saltwater Crocodile", scrollParents: false, eventsEnabled: true }, "01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            popper_utils.setupEventListeners("object", param2, { scrollElement: "Nile Crocodile", scrollParents: true, eventsEnabled: true }, "Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            popper_utils.setupEventListeners(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
