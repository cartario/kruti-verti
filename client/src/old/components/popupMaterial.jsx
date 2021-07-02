import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default function CustomizedDialogs({open ,setOpen, children}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (        
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>        
      {children}       
    </Dialog>   
  );
};
