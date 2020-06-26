function constructSeats(input, seats) {
  for (let i = 0; i < input.length; i++) {
    const rows = input[i][1]
    const cols = input[i][0]
    let seat = []
    for (let j = 0; j < rows; j++) {
      seat.push(Array(cols).fill())
    }

    seats.push(seat)
  }
}

function determineAisleSeats(seats) {
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      const childArray = seats[i][j]
      if (i < 1) {
        childArray[childArray.length - 1] = "A"
      } else if (childArray.length === 2 || i !== seats[i].length - 1) {
        childArray[0] = "A"
        childArray[childArray.length - 1] = "A"
      } else {
        childArray[0] = "A"
      }
    }
  }
}

function determineWindowSeats(seats) {
  const firstChildArray = seats[0]
  const lastChildArray = seats[seats.length - 1]
  for (let i = 0; i < firstChildArray.length; i++)
    firstChildArray[i][0] = "W"
  for (let i = 0; i < lastChildArray.length; i++)
    lastChildArray[i][(lastChildArray[i].length) - 1] = "W";
}

function determineMiddleSeats(seats) {
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      const childArray = seats[i][j]
      if (childArray.length > 2) {
        childArray.map((_, idx) => {
          if (idx > 0 && idx < childArray.length - 1) {
            childArray[idx] = "M"
          }
        })
      }
    }
  }
}

function replaceAndSwapCharWithNumber(val, counter, seats, colSize, rowSize, passengerCount) {
  for (let i = 0; i < colSize; i++) {
    for (let j = 0; j < rowSize; j++) {
      if (seats[j] == null || seats[j][i] == null) continue
      for (let k = 0; k < seats[j][i].length; k++) {
        if (seats[j] != null && seats[j][i] != null && seats[j][i][k] === val) {
          if (counter > passengerCount) {
            seats[j][i][k] = "XX"
            counter++
            continue
          }
          seats[j][i][k] = counter
          counter++
        }
      }
    }
  }

  return { seats, counter }
}

function createSpace(rowSize) {
  let idx = 0
  let spaceStr = ""
  while (idx < rowSize) {
    spaceStr += "  "
    idx++
  }
  return spaceStr
}

function printValues(rowSize, colSize, seats) {
  let stringRes = ""
  for (let i = 0; i < colSize; i++) {
    for (let j = 0; j < rowSize; j++) {
      if (seats[j]) {
        stringRes += "[ "
        for (let k = 0; k < (seats[j][i] && seats[j][i].length); k++) {
          stringRes += (`${seats[j][i][k]} `)
        }

        if (!seats[j][i]) {
          stringRes += createSpace(rowSize)
        }
        stringRes += "]"
      }
      stringRes += ""
    }
    stringRes += "\n"
  }

  return stringRes
}


module.exports = {
  constructSeats,
  determineAisleSeats,
  determineMiddleSeats,
  determineWindowSeats,
  printValues,
  replaceAndSwapCharWithNumber,
}
