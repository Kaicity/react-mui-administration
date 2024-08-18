import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const ModalDialog = ({ title, openFormDialog, handleClickClose, content, sx }) => {
  return (
    <Dialog
      open={openFormDialog}
      onClose={handleClickClose}
      sx={sx} 
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
