const ConfirmDialog = ({ dialogOpts }) => {
  const { open, handleClose, title, content, actions } = dialogOpts;

  const handleAgree = async () => {};
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {actions.text.disagree}
        </Button>
        <Button onClick={handleAgree} color="primary">
          {actions.text.agree}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
