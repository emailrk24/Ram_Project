import BookingEntries from "./components/BookingEntries";
import "./styles.css";

export default function App() {
  const bookingEntries = [
    {
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

  return (
    <div className="App">
      <h1>Hello there...</h1>
      <BookingEntries bookingEntries={bookingEntries} />
    </div>
  );
}
