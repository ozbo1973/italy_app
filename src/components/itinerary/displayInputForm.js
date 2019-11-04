import InputForm from "./form";
import ActionButtons from "./actionButtons";
import FormFields from "./formFields";

const DisplayInputForm = ({
  panel,
  dataRecord,
  config,
  snacks,
  isEditing,
  hasAddForm
}) => {
  return (
    <InputForm
      dataRecord={dataRecord}
      isEditing={isEditing}
      actionButtons={values => (
        <ActionButtons
          isEditing={isEditing}
          panel={panel}
          config={config}
          snacks={snacks}
          dataRecord={dataRecord}
          values={values}
          hasAddForm={hasAddForm}
        />
      )}
      formFields={formProps => (
        <FormFields {...formProps} recNum={dataRecord.recNum} />
      )}
    />
  );
};

export default DisplayInputForm;
