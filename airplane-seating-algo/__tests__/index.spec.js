const {
    constructSeats,
    determineAisleSeats,
    determineWindowSeats,
    determineMiddleSeats,
} = require('../controller');

const payloadRowsAndCols = [[3, 2], [4, 3], [2, 3], [3, 4]]
let seats = []

describe("constructSeats()", () => {
    it('should construct seats with arrays as the child', () => {
        expect(seats).toHaveLength(0)
        constructSeats(payloadRowsAndCols, seats)
        expect(seats).toHaveLength(4)
        expect(seats[0][1][0]).toBeFalsy()
    })
})

describe("determineAisleSeats()", () => {
    const expectedRes = [
        [[undefined, undefined, 'A'], [undefined, undefined, 'A']],
        [
            ['A', undefined, undefined, 'A'],
            ['A', undefined, undefined, 'A'],
            ['A', undefined, undefined, 'A']
        ],
        [['A', 'A'], ['A', 'A'], ['A', 'A']],
        [
            ['A', undefined, undefined],
            ['A', undefined, undefined],
            ['A', undefined, undefined],
            ['A', undefined, undefined]
        ]
    ]

    it('should determine seat on aisle position', () => {
        determineAisleSeats(seats)
        expect(seats).toEqual(expectedRes)
    })
})

describe("determineWindowSeats()", () => {
    const expectedRes = [
        [['W', undefined, 'A'], ['W', undefined, 'A']],
        [
            ['A', undefined, undefined, 'A'],
            ['A', undefined, undefined, 'A'],
            ['A', undefined, undefined, 'A']
        ],
        [['A', 'A'], ['A', 'A'], ['A', 'A']],
        [
            ['A', undefined, 'W'],
            ['A', undefined, 'W'],
            ['A', undefined, 'W'],
            ['A', undefined, 'W']
        ]
    ]

    it("should determine seat on window position", () => {
        determineWindowSeats(seats)
        expect(seats).toEqual(expectedRes)
    })
})

describe("determineMiddleSeats()", () => {
    const expectedRes = [
        [['W', 'M', 'A'], ['W', 'M', 'A']],
        [
            ['A', 'M', 'M', 'A'],
            ['A', 'M', 'M', 'A'],
            ['A', 'M', 'M', 'A']
        ],
        [['A', 'A'], ['A', 'A'], ['A', 'A']],
        [
            ['A', 'M', 'W'],
            ['A', 'M', 'W'],
            ['A', 'M', 'W'],
            ['A', 'M', 'W']
        ]
    ]

    it("should determine seat on middle position", () => {
        determineMiddleSeats(seats)
        expect(seats).toEqual(expectedRes)
    })
})