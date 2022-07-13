import "./NewBooking.css";
import BookingForm from "./BookingForm";

export default function NewBooking(props) {
  const addBookingHandler = (enteredBookingDetail) => {
    // console.log(bookingDetail);
    const bookingDetail = { ...enteredBookingDetail, id: 9999 + Math.random() };
    props.onSaveBooking(bookingDetail);
  };

  return (
    <div className="new-booking">
      <BookingForm onSaveBooking={addBookingHandler} />
    </div>
  );
}
