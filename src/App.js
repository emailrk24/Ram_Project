import BookingEntries from "./components/BookingEntries";
import NewBooking from "./components/NewBooking";
import "./styles.css";

export default function App() {
  let bookingEntries = [
    {
      id: 1357,
      checkInDate: new Date(2022, 6, 20),
      checkOutDate: new Date(2022, 6, 25),
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
      id: 2468,
      checkInDate: new Date(2022, 6, 12),
      checkOutDate: new Date(2022, 6, 15),
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

  const addBookingHandler = (bookingDetail) => {
    bookingEntries = [...bookingEntries, bookingDetail];
    console.log(bookingEntries);
  };

  return (
    <div className="App">
      <h1>Hello there...</h1>
      <NewBooking onSaveBooking={addBookingHandler} />
      <BookingEntries bookingEntries={bookingEntries} />
    </div>
  );
}
