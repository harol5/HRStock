import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";
import "./inputForm.css";

const Select = ({ label, name, id, options, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  let uniqueKey = 1;
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
      <select name={name} id={id} {...register(id, validation)}>
        {options.map((o) => (
          <option key={uniqueKey++} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

function InputError({ message }) {
  return <span className="error">{message}</span>;
}

export default Select;
