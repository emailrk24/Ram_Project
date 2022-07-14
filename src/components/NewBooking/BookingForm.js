import React, { useState } from "react";
import "./BookingForm.css";

export default function BookingForm(props) {
  const [enteredCheckInDate, setEnteredCheckInDate] = useState("");
  const [enteredCheckOutDate, setEnteredCheckOutDate] = useState("");
  const [enteredSource, setEnteredSource] = useState("");
  const [enteredBookingId, setEnteredBookingId] = useState("");
  const [enteredRoomNumber, setEnteredRoomNumber] = useState("");
  const [enteredNumberOfRooms, setEnteredNumberOfRooms] = useState("");
  const [enteredRentPerDay, setEnteredRentPerDay] = useState("");
  const [enteredEcAmount, setEnteredEcAmount] = useState("");
  const [enteredLcAmount, setEnteredLcAmount] = useState("");
  const [enteredOtherBill, setEnteredOtherBill] = useState("");
  const [enteredCashAtHotel, setEnteredCashAtHotel] = useState("");
  const [enteredUPI, setEnteredUPI] = useState("");
  const [enteredEDC, setEnteredEDC] = useState("");
  const [enteredAppPaidAmount, setEnteredAppPaidAmount] = useState("");
  const [enteredBookingStatus, setEnteredBookingStatus] = useState("");

  const checkInDateChangeHandler = (event) => {
    setEnteredCheckInDate(event.target.value);
  };
  const checkOutDateChangeHandler = (event) => {
    setEnteredCheckOutDate(event.target.value);
  };
  const sourceChangeHandler = (event) => {
    setEnteredSource(event.target.value);
  };
  const bookingIdChangeHandler = (event) => {
    setEnteredBookingId(event.target.value);
  };
  const roomNoChangeHandler = (event) => {
    setEnteredRoomNumber(event.target.value);
  };
  const noOfRoomsChangeHandler = (event) => {
    setEnteredNumberOfRooms(event.target.value);
  };
  const rentPerDayChangeHandler = (event) => {
    setEnteredRentPerDay(event.target.value);
  };
  const ecAmountChangeHandler = (event) => {
    setEnteredEcAmount(event.target.value);
  };
  const lcAmountChangeHandler = (event) => {
    setEnteredLcAmount(event.target.value);
  };
  const otherBillChangeHandler = (event) => {
    setEnteredOtherBill(event.target.value);
  };
  const cashAtHotelChangeHandler = (event) => {
    setEnteredCashAtHotel(event.target.value);
  };
  const uPIChangeHandler = (event) => {
    setEnteredUPI(event.target.value);
  };
  const eDCChangeHandler = (event) => {
    setEnteredEDC(event.target.value);
  };
  const appPaidAmountChangeHandler = (event) => {
    setEnteredAppPaidAmount(event.target.value);
  };
  const bookingStatusChangeHandler = (event) => {
    setEnteredBookingStatus(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const bookingDetail = {
      checkInDate: enteredCheckInDate,
      checkOutDate: enteredCheckOutDate,
      source: enteredSource,
      bookingId: enteredBookingId,
      roomNumber: enteredRoomNumber,
      numberOfRooms: enteredNumberOfRooms,
      rentPerDay: enteredRentPerDay,
      ecAmount: enteredEcAmount,
      lcAmount: enteredLcAmount,
      otherBill: enteredOtherBill,
      cashAtHotel: enteredCashAtHotel,
      UPI: enteredUPI,
      EDC: enteredEDC,
      appPaidAmount: enteredAppPaidAmount,
      bookingStatus: enteredBookingStatus
    };

    // console.log(bookingDetail);

    props.onSaveBooking(bookingDetail);

    setEnteredCheckInDate("");
    setEnteredCheckOutDate("");
    setEnteredSource("");
    setEnteredBookingId("");
    setEnteredRoomNumber("");
    setEnteredNumberOfRooms("");
    setEnteredRentPerDay("");
    setEnteredEcAmount("");
    setEnteredLcAmount("");
    setEnteredOtherBill("");
    setEnteredCashAtHotel("");
    setEnteredUPI("");
    setEnteredEDC("");
    setEnteredAppPaidAmount("");
    setEnteredBookingStatus("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-booking__controls">
        <div className="new-booking__control">
          <label>Check-in</label>
          <input
            type="datetime-local"
            value={enteredCheckInDate}
            onChange={checkInDateChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Check-out</label>
          <input
            type="datetime-local"
            value={enteredCheckOutDate}
            onChange={checkOutDateChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Source (dropdown)</label>
          <input
            type="text"
            value={enteredSource}
            onChange={sourceChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Guest Name / Booking ID</label>
          <input
            type="text"
            value={enteredBookingId}
            onChange={bookingIdChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Room No. (tile pick)</label>
          <input
            type="text"
            value={enteredRoomNumber}
            onChange={roomNoChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Number of rooms (calculate)</label>
          <input
            type="text"
            value={enteredNumberOfRooms}
            onChange={noOfRoomsChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Rent per day</label>
          <input
            type="number"
            value={enteredRentPerDay}
            onChange={rentPerDayChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>EC amount</label>
          <input
            type="number"
            value={enteredEcAmount}
            onChange={ecAmountChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>LC amount</label>
          <input
            type="number"
            value={enteredLcAmount}
            onChange={lcAmountChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Other bill</label>
          <input
            type="number"
            value={enteredOtherBill}
            onChange={otherBillChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Cash at hotel</label>
          <input
            type="number"
            value={enteredCashAtHotel}
            onChange={cashAtHotelChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>UPI</label>
          <input
            type="number"
            value={enteredUPI}
            onChange={uPIChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>EDC</label>
          <input
            type="number"
            value={enteredEDC}
            onChange={eDCChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>App paid amount</label>
          <input
            type="number"
            value={enteredAppPaidAmount}
            onChange={appPaidAmountChangeHandler}
          ></input>
        </div>
        <div className="new-booking__control">
          <label>Booking status</label>
          <input
            type="text"
            value={enteredBookingStatus}
            onChange={bookingStatusChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-booking__actions">
        <button type="button" onClick={props.onCancelBooking}>
          Cancel
        </button>
        <button type="submit">Add booking</button>
      </div>
    </form>
  );
}
