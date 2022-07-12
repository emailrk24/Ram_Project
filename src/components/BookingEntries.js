import "./BookingEntries.css";
import BookingEntry from "./BookingEntry";

export default function BookingEntries(props) {
  return (
    <div className="booking-entries">
      <BookingEntry
        checkInDate={props.bookingEntries[0].checkInDate}
        checkOutDate={props.bookingEntries[0].checkOutDate}
        source={props.bookingEntries[0].source}
        bookingId={props.bookingEntries[0].bookingId}
        roomNumber={props.bookingEntries[0].roomNumber}
        numberOfRooms={props.bookingEntries[0].numberOfRooms}
        rentPerDay={props.bookingEntries[0].rentPerDay}
        ecAmount={props.bookingEntries[0].ecAmount}
        lcAmount={props.bookingEntries[0].lcAmount}
        otherBill={props.bookingEntries[0].otherBill}
        cashAtHotel={props.bookingEntries[0].cashAtHotel}
        UPI={props.bookingEntries[0].UPI}
        EDC={props.bookingEntries[0].EDC}
        appPaidAmount={props.bookingEntries[0].appPaidAmount}
        bookingStatus={props.bookingEntries[0].bookingStatus}
      />
      <BookingEntry
        checkInDate={props.bookingEntries[1].checkInDate}
        checkOutDate={props.bookingEntries[1].checkOutDate}
        source={props.bookingEntries[1].source}
        bookingId={props.bookingEntries[1].bookingId}
        roomNumber={props.bookingEntries[1].roomNumber}
        numberOfRooms={props.bookingEntries[1].numberOfRooms}
        rentPerDay={props.bookingEntries[1].rentPerDay}
        ecAmount={props.bookingEntries[1].ecAmount}
        lcAmount={props.bookingEntries[1].lcAmount}
        otherBill={props.bookingEntries[1].otherBill}
        cashAtHotel={props.bookingEntries[1].cashAtHotel}
        UPI={props.bookingEntries[1].UPI}
        EDC={props.bookingEntries[1].EDC}
        appPaidAmount={props.bookingEntries[1].appPaidAmount}
        bookingStatus={props.bookingEntries[1].bookingStatus}
      />
    </div>
  );
}
