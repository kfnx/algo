const fs = require('fs')
const {
  constructSeats,
  determineAisleSeats,
  determineMiddleSeats,
  determineWindowSeats,
  printValues,
  replaceAndSwapCharWithNumber,
} = require('./controller')

let seats = []


function main() {
  // Arguments
  let input = [[3, 2], [4, 3], [2, 3], [3, 4]]
  let passengerCount = 30

  const rowSize = Math.max.apply(Math, input.map(el => el[0]))
  const colSize = Math.max.apply(Math, input.map(el => el[1]))

  constructSeats(input, seats)

  determineAisleSeats(seats)
  determineWindowSeats(seats)
  determineMiddleSeats(seats)

  let tempPosition = {}
  tempPosition = replaceAndSwapCharWithNumber("A", 1, seats, colSize, rowSize, passengerCount);
  tempPosition = replaceAndSwapCharWithNumber("W", tempPosition.counter, tempPosition.seats, colSize, rowSize, passengerCount);
  tempPosition = replaceAndSwapCharWithNumber("M", tempPosition.counter, tempPosition.seats, colSize, rowSize, passengerCount);
  seats = tempPosition.seats;

  const res = printValues(rowSize, colSize, seats)
  fs.writeFile("result.txt", res, (err) => {
    if (err) throw err
  })
  console.log(res)
}

main()