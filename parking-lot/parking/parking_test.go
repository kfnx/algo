package parking

import "testing"

func TestMakeParking(t *testing.T) {
	input := 0
	actualResult := MakeParkingLot(input)
	t.Log(actualResult)
}

func TestTakeParking(t *testing.T) {
	p := MakeParkingLot(1)
	actualResult := p.availableSlots()
	expectedResult := 0
	if actualResult != expectedResult {
		t.Fatalf("Expected: %d, but got %d", expectedResult, actualResult)
	}
	p.TakeParking(1)
	actualResult = p.availableSlots()
	expectedResult = -1
	if actualResult != expectedResult {
		t.Fatalf("Expected %d but got %d", expectedResult, actualResult)
	}
}

func TestLeaveParking(t *testing.T) {
	p := MakeParkingLot(1)
	p.TakeParking(1)
	p.Leave(1)
	actualResult := p.availableSlots()
	expectedResult := 0
	if actualResult != expectedResult {
		t.Fatalf("Expected: %d but got %d", expectedResult, actualResult)
	}
}
