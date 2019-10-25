import InputForm from "./form";
import ActionButtons from "./actionButtons";
import FormFields from "./formFields";

const DisplayInputForm = ({
  panel,
  dataRecord,
  snacks,
  isEditing,
  addForm
}) => {
  return (
    <InputForm
      dataRecord={dataRecord}
      isEditing={isEditing}
      actionButtons={values => (
        <ActionButtons
          isEditing={isEditing}
          panel={panel}
          snacks={snacks}
          dataRecord={dataRecord}
          values={values}
          addForm={addForm && addForm}
        />
      )}
      formFields={formProps => (
        <FormFields {...formProps} recNum={dataRecord.recNum} />
      )}
    />
  );
};

export default DisplayInputForm;
