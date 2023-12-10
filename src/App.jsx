import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    dob: "",
    age: "",
    contact: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  /*const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };*/

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 2,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage:
          "Enter valid name",
        label: "Name",
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
      },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
        id: 4,
        name: "dob",
        type: "date",
        placeholder: "DOB",
        label: "DOB",
    },
    {
        id: 5,
        name: "age",
        type: "text",
        placeholder: "Age",
        errorMessage: "Not valid age",
        label: "Age",
        pattern: "^[0-9]{2}$",
    },
    {
        id: 6,
        name: "contact",
        type: "text",
        placeholder: "Contact",
        errorMessage: "Not valid contact",
        label: "Contact",
        pattern: "^[0-9]{10}$",
    },
    {
        id: 7,
        name: "gender",
        type: "text",
        placeholder: "Gender",
        
        label: "Gender",
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
    },

    {
      id: 8,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 9,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /*const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
        </label>
    );

  };*/


  return (
    
    <div className="app">
        
      <form onSubmit={handleSubmit}>
        <div>
        <h1 style={{fontFamily: "Garamond"}}>MOKULELE AIRLINE BOOKING</h1>
        </div>
        
        <h2>Register</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;