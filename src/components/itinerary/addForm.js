import InputForm from "./form";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const AddForm = ({ addFormOpen, api, handleOpen, rec, crud, dialogOpts }) => {
  return (
    <Dialog
      open={addFormOpen}
      //   TransitionComponent={Transition}
      keepMounted
      onClose={handleOpen}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {dialogOpts.title}
      </DialogTitle>
      <DialogContent>
        <InputForm
          formData={rec}
          api={api}
          crud={crud}
          handleOpen={handleOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddForm;
