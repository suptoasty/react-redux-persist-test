class Stack {
    top: number = -1
    items: object = {}

    constructor() {
    }

    get peek() {
        return this.items[this.top]
    }

    push(value: any) {
        this.top += 1
        this.items[this.top] = value
    }

    pop() {
        let val: any = this.items[this.top]
        
        delete this.items[this.top]
        this.top -= 1

        return val
    }
}

describe("My Stack", () => {

    let stack
    
    beforeEach(() => {
        stack = new Stack()
    })

    it("is created empty", () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })

    it("can push to the top", () => {
        stack.push('jest-test')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('jest-test')
    })

    it("can pop off", () => {
        stack.push('jest-test')
        expect(stack.top).toBe(0)

        expect(stack.pop()).toEqual('jest-test')
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })
})
