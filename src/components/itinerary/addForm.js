import { Dialog, DialogTitle, DialogContent, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddForm = ({ inputForm, dialogOpts: { title, addForm } }) => {
  const { addFormOpen, onHandleAddFormOpen } = addForm;
  return (
    <Dialog
      open={addFormOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onHandleAddFormOpen}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>{inputForm}</DialogContent>
    </Dialog>
  );
};

export default AddForm;
