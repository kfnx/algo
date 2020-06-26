package main

import "github.com/adiatma/parking-lot/parking"

func main() {
	p := parking.MakeParkingLot(1)
	p.TakeParking(1)
	p.Status()
}
