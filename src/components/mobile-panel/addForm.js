import { Dialog, DialogTitle, DialogContent, Slide } from "@material-ui/core";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddForm = ({ title, ctx, dataRecord, form }) => {
  const { isAddFormOpen, config } = ctx;
  const { toggleState } = usePanelOps(config);

  return (
    <Dialog
      open={isAddFormOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleState("ADDFORM_OPEN", isAddFormOpen)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>{form(dataRecord)}</DialogContent>
    </Dialog>
  );
};

export default AddForm;
