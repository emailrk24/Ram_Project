import React, { useState } from "react";
import BookingEntries from "./components/Bookings/BookingEntries";
import ExpenseEntries from "./components/Expenses/ExpenseEntries";
import NewBooking from "./components/NewBooking/NewBooking";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpenseFormDialog from "./components/NewExpense/NewExpenseFormDialog";
import CommonFilter from "./components/CommonFilter";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Divider from "@mui/material/Divider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const testBookingEntries = [
  {
    id: 9999,
    checkInDate: "2022-07-15",
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
    id: 8888,
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
  },
  {
    id: 9000,
    checkInDate: "2022-07-27",
    checkOutDate: "2022-07-30",
    source: "App",
    bookingId: "641108",
    roomNumber: "10",
    numberOfRooms: 2,
    rentPerDay: 100,
    ecAmount: 10,
    lcAmount: 20,
    otherBill: 30,
    cashAtHotel: 100,
    UPI: 0,
    EDC: 0,
    appPaidAmount: 40,
    bookingStatus: "CANCEL"
  },
  {
    id: 8999,
    checkInDate: "2022-05-24",
    checkOutDate: "2022-05-24",
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
  },
  {
    id: 997,
    expenseType: "Utensils",
    expenseDate: "2022-05-20",
    description: "Plates",
    amount: "200"
  },
  {
    id: 996,
    expenseType: "Maintenance",
    expenseDate: "2022-07-20",
    description: "Cleaning",
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
    console.log(
      "Im in addExpenseHandler : " + JSON.stringify(expenseDetail, null, 4)
    );
    setExpenses((prevExpenses) => {
      return [expenseDetail, ...prevExpenses];
    });
    console.table(expenses);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickExpenseOpen = () => setOpen(true);
  const handleCloseExpense = () => setOpen(false);

  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <div style={{ fontSize: "2rem" }} align="center">
        Hotel - Expense Management Platform
      </div>
      <Divider />
      <Box
        sx={{ width: "100%", fontFamily: "Noto Sans JP", fontSize: "0.80rem" }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="1" icon={<CalendarMonthIcon />} label="Bookings" />
          <Tab value="2" icon={<AccountBalanceWalletIcon />} label="Expenses" />
          <Tab value="3" icon={<MenuBookIcon />} label="Accounts" />
          <CommonFilter
            defaultMonthYear={filteredMonthYear}
            onChangeFilter={filterChangeHandler}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={"1"}>
        <BookingEntries
          bookingEntries={bookings}
          filteredMonthYear={filteredMonthYear}
        />
        <NewBooking onSaveBooking={addBookingHandler} />
      </TabPanel>
      <TabPanel value={tabValue} index={"2"}>
        <ExpenseEntries
          expenseEntries={expenses}
          filteredMonthYear={filteredMonthYear}
        />
        <NewExpense onSaveExpense={addExpenseHandler} />
      </TabPanel>
      <TabPanel value={tabValue} index={"3"}>
        Account details
      </TabPanel>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Bookings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BookingEntries
              bookingEntries={bookings}
              filteredMonthYear={filteredMonthYear}
            />
            <NewBooking onSaveBooking={addBookingHandler} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Expenses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ExpenseEntries
              expenseEntries={expenses}
              filteredMonthYear={filteredMonthYear}
            />
            <NewExpense onSaveExpense={addExpenseHandler} />
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  // console.log(children + " # " + value + " # " + index);
  return <div>{value === index && children}</div>;
}
