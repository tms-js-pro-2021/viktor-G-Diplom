/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default props => {
  return (
    <div>
      <Dialog open={props.isOpen} onClose={props.onRequestClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="phone"
            type="email"
            fullWidth
            variant="standard"
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onRequestClose}>Cancel</Button>
          <Button onClick={props.onRequestClose}>Coll me</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
