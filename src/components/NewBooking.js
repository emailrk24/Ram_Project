import "./NewBooking.css";
import BookingForm from "./BookingForm";

export default function NewBooking(props) {
  const addBookingHandler = (enteredBookingDetail) => {
    // console.log(bookingDetail);
    const bookingDetail = {
      ...enteredBookingDetail,
      id: Math.round(Math.random() * (9997 - 9000) + 9000)
    };
    props.onSaveBooking(bookingDetail);
  };

  return (
    <div className="new-booking">
      <BookingForm onSaveBooking={addBookingHandler} />
    </div>
  );
}
