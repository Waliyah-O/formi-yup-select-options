import React from "react";
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
import Select from "./Select.jsx";
import RadioButtons from './RadioButtons.jsx'
import CheckBoxes from "./CheckBoxes.jsx";

function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    default:
      return null;
  }
}
export default FormikController;
