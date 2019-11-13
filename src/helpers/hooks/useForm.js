import ActionButtons from "../../components/mobile-panel/actionButtons";
import InputForm from "../../components/mobile-panel/form";

export const useForm = (config, ctx, newFormConfig) => {
  const editForm = formConfig => {
    const actionButtons = values => (
      <ActionButtons
        {...formConfig}
        {...ctx.panel}
        {...ctx.snacks}
        config={config}
        values={values}
        isEditing
      />
    );

    return (
      <InputForm
        {...formConfig.dataRecord}
        formFields={formConfig.formFields}
        actionButtons={actionButtons}
        isEditing
      />
    );
  };

  const createNewForm = () => {
    const actionButtons = values => (
      <ActionButtons
        {...newFormConfig}
        {...ctx.panel}
        {...ctx.snacks}
        config={config}
        values={values}
        hasAddForm
      />
    );

    return (
      <InputForm
        {...newFormConfig}
        rec={{ rec: config.newRecord }}
        actionButtons={actionButtons}
      />
    );
  };

  const newForm = createNewForm();

  return [editForm, newForm];
};
