import React, { useState } from "react";
import "./BookingEntries.css";
import BookingEntry from "./BookingEntry";
import BookingsFilter from "./BookingsFilter";

export default function BookingEntries(props) {
  const currentMonth = new Date().toLocaleString("en-GB", { month: "short" });
  const [filteredMonth, setFilteredMonth] = useState(currentMonth);

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredBookings = props.bookingEntries.filter(
    (booking) =>
      new Date(booking.checkInDate).toLocaleString("en-GB", {
        month: "short"
      }) === filteredMonth ||
      new Date(booking.checkOutDate).toLocaleString("en-GB", {
        month: "short"
      }) === filteredMonth
  );

  // const filteredBookings = props.bookingEntries.filter(
  //   (booking) =>
  //     (new Date(booking.checkInDate).toLocaleString("en-GB", {
  //       month: "numeric"
  //     }) === filteredMonth &&
  //       new Date(booking.checkInDate).getFullYear() === filteredYear) ||
  //     (new Date(booking.checkOutDate).toLocaleString("en-GB", {
  //       month: "short"
  //     }) === filteredMonth &&
  //       new Date(booking.checkOutDate).getFullYear() === filteredYear)
  // );

  return (
    <div className="booking-entries">
      <BookingsFilter
        defaultMonth={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />

      {/* dynamically populate the array into a JSX element - 
      an alternate to rendering each object from an array into a JSX element*/}

      {filteredBookings.length === 0 && (
        <p className="no-booking-entries">No bookings found</p>
      )}

      {filteredBookings.map((booking) => (
        <BookingEntry
          key={booking.id}
          id={booking.id}
          checkInDate={booking.checkInDate}
          checkOutDate={booking.checkOutDate}
          source={booking.source}
          bookingId={booking.bookingId}
          roomNumber={booking.roomNumber}
          numberOfRooms={booking.numberOfRooms}
          rentPerDay={booking.rentPerDay}
          ecAmount={booking.ecAmount}
          lcAmount={booking.lcAmount}
          otherBill={booking.otherBill}
          cashAtHotel={booking.cashAtHotel}
          UPI={booking.UPI}
          EDC={booking.EDC}
          appPaidAmount={booking.appPaidAmount}
          bookingStatus={booking.bookingStatus}
        />
      ))}
    </div>
  );
}
