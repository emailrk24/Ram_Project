import React, { useState } from "react";
import BookingEntries from "./components/BookingEntries";
import NewBooking from "./components/NewBooking";
import "./styles.css";

const testBookingEntries = [
  {
    id: 9999,
    checkInDate: "2022-05-15",
    checkOutDate: "2022-07-19",
    source: "App",
    bookingId: "SK4 1LW",
    roomNumber: "5A",
    numberOfRooms: 2,
    rentPerDay: 100,
    ecAmount: 10,
    lcAmount: 20,
    otherBill: 30,
    cashAtHotel: 100,
    UPI: 0,
    EDC: 0,
    appPaidAmount: 40,
    bookingStatus: "INHOUSE"
  },
  {
    id: 9998,
    checkInDate: "2022-07-20",
    checkOutDate: "2022-07-25",
    source: "WalkIn",
    bookingId: "G28AJ",
    roomNumber: "1A",
    numberOfRooms: 1,
    rentPerDay: 100,
    ecAmount: 10,
    lcAmount: 20,
    otherBill: 30,
    cashAtHotel: 100,
    UPI: 0,
    EDC: 0,
    appPaidAmount: 40,
    bookingStatus: "INHOUSE"
  }
];

export default function App() {
  const [bookings, setBookings] = useState(testBookingEntries);

  const addBookingHandler = (bookingDetail) => {
    setBookings((prevBookings) => {
      return [bookingDetail, ...prevBookings];
    });
  };

  return (
    <div className="App">
      <h1>Hello there...</h1>
      <NewBooking onSaveBooking={addBookingHandler} />
      <BookingEntries bookingEntries={bookings} />
    </div>
  );
}
