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
    id: 9000,
    checkInDate: "2022-07-20",
    checkOutDate: "2022-07-25",
    source: "WalkIn",
    bookingId: "CF6AJ",
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
    id: 9001,
    checkInDate: "2022-07-20",
    checkOutDate: "2022-07-25",
    source: "WalkIn",
    bookingId: "641108",
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
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentMonthYear =
    currentYear + "-" + (currentMonth > 10 ? currentMonth : "0" + currentMonth);

  const [filteredMonthYear, setFilteredMonthYear] = useState(currentMonthYear);

  const filterChangeHandler = (selectedMonthYear) => {
    console.log("App.js - filterChangeHandler : " + selectedMonthYear);
    setFilteredMonthYear(selectedMonthYear);
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
        defaultMonthYear={filteredMonthYear}
        onChangeFilter={filterChangeHandler}
      />
      <BookingEntries
        bookingEntries={bookings}
        filteredMonthYear={filteredMonthYear}
      />
      <NewBooking onSaveBooking={addBookingHandler} />
      {/** <BasicTable bookingEntries={bookings} /> */}
      <ExpenseEntries
        expenseEntries={expenses}
        filteredMonthYear={filteredMonthYear}
      />
      <NewExpense onSaveExpense={addExpenseHandler} />
    </div>
  );
}
