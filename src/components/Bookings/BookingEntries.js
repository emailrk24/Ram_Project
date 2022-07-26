import React, { useState, forwardRef } from "react";
import MaterialTable, { MTableToolbar, MTableBodyRow } from "material-table";
import { Grid } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function BookingEntries(props) {
  let yearMonth = props.filteredMonthYear.split("-");

  const filteredBookings = props.bookingEntries.filter(
    (booking) =>
      new Date(booking.checkInDate).getMonth() + 1 === Number(yearMonth[1]) &&
      new Date(booking.checkInDate).getFullYear() === Number(yearMonth[0])
  );

  const numberOfDays = (booking) => {
    return (
      (new Date(booking.checkOutDate).getTime() -
        new Date(booking.checkInDate).getTime()) /
      (1000 * 3600 * 24)
    );
  };

  const totalBill = (booking) => {
    return (
      booking.numberOfRooms * numberOfDays(booking) * booking.rentPerDay +
      booking.ecAmount +
      booking.lcAmount +
      booking.otherBill
    );
  };

  const pendingAmount = (booking) => {
    return (
      totalBill(booking) -
      booking.cashAtHotel -
      booking.UPI -
      booking.EDC -
      booking.appPaidAmount
    );
  };

  // const [tableData, setTableData] = useState(filteredBookings);

  const columns = [
    { title: "S.No", field: "id", align: "center" },
    { title: "Check-in", field: "checkInDate", align: "center" },
    { title: "Check-out", field: "checkOutDate", align: "center" },
    { title: "Source", field: "source", align: "center" },
    { title: "Booking Id", field: "bookingId", align: "center" },
    { title: "Room No.", field: "roomNumber", align: "center" },
    { title: "No. of rooms", field: "numberOfRooms", align: "center" },
    {
      title: "No. of days",
      align: "center",
      render: (rowData) => <div>{numberOfDays(rowData)}</div>
    },
    {
      title: "Rent per day",
      field: "rentPerDay",
      align: "center",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 2 }
    },
    {
      title: "EC amount",
      field: "ecAmount",
      align: "center",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 2 }
    },
    {
      title: "LC amount",
      field: "lcAmount",
      align: "center",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 2 }
    },
    {
      title: "Other bill",
      field: "otherBill",
      align: "center",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 2 }
    },
    {
      title: "Total bill",
      align: "center",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 2 },
      render: (rowData) => <div>{totalBill(rowData)}</div>
    },
    { title: "Cash at hotel", field: "cashAtHotel", align: "center" },
    { title: "UPI", field: "UPI", align: "center" },
    { title: "EDC", field: "EDC", align: "center" },
    { title: "App paid amount", field: "appPaidAmount", align: "center" },
    {
      title: "Pending amount",
      align: "center",
      render: (rowData) => <div>{pendingAmount(rowData)}</div>
    },
    { title: "Booking status", field: "bookingStatus", align: "center" }
  ];

  return (
    <div>
      {filteredBookings.length === 0 && (
        <p className="no-booking-entries">No booking found</p>
      )}
      {filteredBookings.length > 0 && (
        <MaterialTable
          columns={columns}
          data={filteredBookings}
          icons={tableIcons}
          // title="Booking details"
          components={{
            Toolbar: (props) => (
              <div
                style={{
                  // backgroundColor: "#9c27b0",
                  color: "#fff"
                  // fontWeight: "bold"
                }}
              >
                <MTableToolbar {...props} />
              </div>
            ),
            Row: (props) => (
              <Grid style={{ backgroundColor: "#e8eaf5", display: "contents" }}>
                <MTableBodyRow {...props} />
              </Grid>
            )
          }}
          options={{
            // showTitle: true,
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: false,
            searchFieldVariant: "standard",
            // filtering: true,
            paging: false,
            // pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            // pageSize: 5,
            // paginationType: "stepped",
            // showFirstLastPageButtons: false,
            // paginationPosition: "both",
            // exportButton: true,
            // exportAllData: true,
            // exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            // selection: true,
            // showSelectAllCheckbox: false,
            // showTextRowsSelected: false,
            // selectionProps: (rowData) => ({
            //   disabled: rowData.age == null
            //   // color:"primary"
            // }),
            // grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#FFEFD5" } : null,
            headerStyle: {
              background: "#9c27b0", //"#ba68c8",
              color: "#fff",
              fontWeight: "bold"
            }
          }}
        />
      )}
    </div>
  );
}
