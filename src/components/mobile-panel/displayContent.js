import { memo } from "react";
import Content from "./content";
import InputForm from "./form";
import ActionButtons from "./actionButtons";

const DisplayContent = ({
  dataRecord,
  config,
  panel,
  isOpen,
  snacks,
  formFields
}) => {
  const { rec, recNum } = dataRecord;

  return (
    <Content
      dataRecord={{ rec, recNum }}
      config={config}
      panel={panel}
      isOpen={isOpen}
      inputForm={
        <InputForm
          dataRecord={{ rec }}
          isEditing
          actionButtons={values => (
            <ActionButtons
              isEditing
              panel={panel}
              config={config}
              snacks={snacks}
              dataRecord={{ recNum }}
              values={values}
            />
          )}
          formFields={formFields}
        />
      }
    />
  );
};

function areEqual(prevProps, nextProps) {
  const { dataRecord: pdr, isOpen: pisOpen } = prevProps;
  const { dataRecord: ndr, isOpen: nisOpen } = nextProps;
  const recMatch = pdr.rec === ndr.rec;
  const isOpenMatch = pisOpen === nisOpen;
  return recMatch && isOpenMatch;
}

export default memo(DisplayContent, areEqual);
