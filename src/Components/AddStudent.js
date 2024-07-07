import React, { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
};
export default function AddStudent(props) {
  // {id: 104, firstName: "Kishan", lastName: "Dhir"}

  const [values, setValues] = useState(initialValues);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      id: 105,
      [name]: value
    });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            value={values.firstName}
            name="firstName"
            label="First Name"
            onChange={handleOnchange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            value={values.lastName}
            name="lastName"
            label="Last Name"
            onChange={handleOnchange}
          />
        </div>
      </div>
      <button
        className="btn btn-primary my-3"
        onClick={() => {
          props.addStudent(values);
        }}
      >
        Add Student
      </button>
    </>
  );
}
