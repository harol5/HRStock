import { FormProvider, useForm } from "react-hook-form";
import Input from "../common/InputForm";
import Select from "../common/Select";
import {
  businessValidation,
  addressValidation,
  floorValidation,
  cityValidation,
  stateValidation,
  zipCodeValidation,
  adminValidation,
  emailValidation,
  usernameValidation,
  passwordValidation,
} from "../utils/inputValidations";
import "./CreateAccount.css";

function CreateAccount() {
  const methods = useForm({ mode: "onTouched" });
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="form-container"
      >
        <h1>HRStock</h1>
        <Input {...businessValidation} />

        <Input {...addressValidation} />

        <Input {...floorValidation} />

        <Input {...cityValidation} />

        <Select {...stateValidation} />

        <Input {...zipCodeValidation} />

        <Input {...adminValidation} />

        <Input {...emailValidation} />

        <Input {...usernameValidation} />

        <Input {...passwordValidation} />

        <button onClick={onSubmit}>Done</button>
      </form>
    </FormProvider>
  );
}

export default CreateAccount;
