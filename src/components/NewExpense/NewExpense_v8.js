import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const newExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelExpenseHandler = () => {
    setIsEditing(false);
  };

  const addExpenseHandler = (enteredExpenseDetail) => {
    console.log("addExpenseHandler : " + enteredExpenseDetail);
    const expenseDetail = {
      ...enteredExpenseDetail,
      id: Math.round(Math.random() * (9997 - 9000) + 9000)
    };
    props.onSaveExpense(expenseDetail);
    setIsEditing(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Expense
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add expense</DialogTitle>
        <DialogContent>
          <div className="new-expense">
            <ExpenseForm
              onSaveExpense={addExpenseHandler}
              onCancelExpense={cancelExpenseHandler}
            />
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
