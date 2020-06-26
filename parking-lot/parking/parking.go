package parking

import (
	"fmt"
)

// Vehicle struct type
type Vehicle struct {
	Number int
}

// Slot struct type
type Slot struct {
	Filled  bool
	Vehicle Vehicle
}

// Parking struct type
type Parking struct {
	Capacity  int
	Slots     []Slot
	FreeSlots int
}

// MakeParkingLot is function to create a new parking slots and capacity.
func MakeParkingLot(capacity int) *Parking {
	// if capacity lest than 1, or same with 0 return nil
	if capacity <= 0 {
		return nil
	}

	fmt.Printf("Created parking lot with (%d) slots\n", capacity)
	return &Parking{capacity, make([]Slot, capacity), capacity}
}

// TakeParking methods to take slot of parking
func (parking *Parking) TakeParking(number int) {
	// if parking same with nil
	if parking == nil {
		fmt.Println("Parking lot does not exists!")
		return
	}

	// check available slots in parking
	slot := parking.availableSlots()

	// if slot same with -1, parking lot is fully
	if slot == -1 {
		fmt.Println("Sorry parking lot is fully")
		return
	}

	// if there a free slots, take a parking slot
	parking.takeParking(addVehicle(number), slot)
}

// Status is methods to check status vehicle in parking lot
func (parking *Parking) Status() {
	capacity := parking.Capacity
	for slot := 0; slot < capacity; slot++ {
		if parking.Slots[slot].Filled {
			number := parking.Slots[slot].Vehicle.Number
			fmt.Printf("%d. vehicle number: %d \n", slot+1, number)
		} else {
			fmt.Printf("%d. empty slot \n", slot+1)
		}
	}
}

// Leave methods to remove slot of parking
func (parking *Parking) Leave(slot int) {
	parking.Slots[slot-1].freeSlot()
	parking.FreeSlots++
}

// Check available slots in parking lot
func (parking *Parking) availableSlots() int {
	if parking.FreeSlots > 0 {
		capacity := parking.Capacity
		for slot := 0; slot < capacity; slot++ {
			if !parking.Slots[slot].Filled {
				return slot
			}
		}
	}

	return -1
}

// takeParking methods with add new vehicle to parking lot
func (parking *Parking) takeParking(vehicle Vehicle, slot int) {
	parking.Slots[slot].addToSlot(vehicle) // added vehicle to slot
	parking.FreeSlots--                    // remove capacity of parking with decrement freeSlots
}

// addVehicle function to added new vehicle
func addVehicle(number int) Vehicle {
	vehicle := Vehicle{}
	vehicle.Number = number
	return vehicle
}

// Add vehicle to slot
func (slot *Slot) addToSlot(vehicle Vehicle) {
	slot.Filled = true
	slot.Vehicle = vehicle
}

// Add free slot
func (slot *Slot) freeSlot() {
	slot.Filled = false
}
