import InputForm from "./form";
import AddForm from "./addForm";
import ActionButtons from "./actionButtons";

function DisplayAddForm({
  newFormTitle,
  isAddFormOpen,
  config,
  panel,
  snacks,
  formFields
}) {
  return (
    <AddForm
      title={newFormTitle}
      isAddFormOpen={isAddFormOpen}
      config={config}
      inputForm={
        <InputForm
          dataRecord={{ rec: config.newRecord }}
          actionButtons={values => (
            <ActionButtons
              panel={panel}
              config={config}
              snacks={snacks}
              dataRecord={{ recNum: "new" }}
              values={values}
              hasAddForm={true}
            />
          )}
          formFields={formFields}
        />
      }
    />
  );
}

export default DisplayAddForm;
