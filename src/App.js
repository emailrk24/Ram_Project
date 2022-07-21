import React, { useState } from "react";
import BookingEntries from "./components/Bookings/BookingEntries";
import ExpenseEntries from "./components/Expenses/ExpenseEntries";
import BasicTable from "./components/DisplayTable/BasicTable";
import NewBooking from "./components/NewBooking/NewBooking";
import NewExpense from "./components/NewExpense/NewExpense";
import CommonFilter from "./components/CommonFilter";
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

const testExpenseEntries = [
  {
    id: 999,
    expenseType: "Property expense",
    expenseDate: "2022-07-19",
    description: "Water",
    amount: "315"
  },
  {
    id: 998,
    expenseType: "Staff welfare",
    expenseDate: "2022-07-20",
    description: "Manoj",
    amount: "200"
  }
];

export default function App() {
  const currentMonth = new Date().toLocaleString("en-GB", { month: "short" });
  const [filteredMonth, setFilteredMonth] = useState(currentMonth);

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const [bookings, setBookings] = useState(testBookingEntries);
  const [expenses, setExpenses] = useState(testExpenseEntries);

  const addBookingHandler = (bookingDetail) => {
    setBookings((prevBookings) => {
      return [bookingDetail, ...prevBookings];
    });
  };

  const addExpenseHandler = (expenseDetail) => {
    setExpenses((prevExpenses) => {
      return [expenseDetail, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <CommonFilter
        defaultMonth={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />
      <NewBooking onSaveBooking={addBookingHandler} />
      <BookingEntries bookingEntries={bookings} />
      {/** <BasicTable bookingEntries={bookings} /> */}
      <NewExpense onSaveExpense={addExpenseHandler} />
      <ExpenseEntries expenseEntries={expenses} />
    </div>
  );
}
