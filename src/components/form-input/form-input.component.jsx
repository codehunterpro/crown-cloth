import { FormInputLabel, FormInputStyles, Group } from "./form-input.styles";

const FormInput = ({ label, ...restProps }) => {
  return (
    <Group>
      <FormInputStyles {...restProps} />

      {label && (
        <FormInputLabel shrink={restProps.value.length}>{label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
