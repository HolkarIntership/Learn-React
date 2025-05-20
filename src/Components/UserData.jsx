import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const initialValue = {
  name: "",
  age: "",
  email: "",
  phone: "",
  password: "",
};

const UserData = () => {
  // use Js Code
  // const [formData, setFormData] = useState(
  //     {
  //         name: '',
  //         age: '',
  //         email: '',
  //         phone: '',
  //         password: ''
  //     }
  // );

  // const [errors, setErrors] = useState({});

  // const Validation = () => {
  //     const newErrors = {};

  //     if (formData.name.trim() === '') {
  //         newErrors.name = 'Name is required';
  //     } else if (formData.age === '' || isNaN(formData.age) || Number(formData.age) <= 0) {
  //         newErrors.age = 'Valid age is required';
  //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //         newErrors.email = 'Valid email is required';
  //     } else if (!/^\d{10}$/.test(formData.phone)) {
  //         newErrors.phone = 'Phone number must be 10 digits';
  //     } else if (formData.password.length < 6) {
  //         newErrors.password = 'Password must be at least 6 characters';
  //     }

  //     setErrors(newErrors);
  //     return Object.keys(newErrors).length === 0;

  // }

  // const handleSubmit = (event) => {
  //     event.preventDefault();

  //     if (Validation()) {
  //         alert('Form submitted successfully!');
  //         console.log(formData);
  //         setFormData({
  //             name: '',
  //             age: '',
  //             email: '',
  //             phone: '',
  //             password: ''
  //         });
  //     }
  // }
  // const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  // }

  // Use Formik Code

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(7, "Name must be 7 characters or less"),
    age: Yup.number()
      .typeError("Age must be a number")
      .positive("Age must be greater than zero")
      .min(16, "Age must be at least 16")
      .max(35, "Age must be 35 or less")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  const handleSubmit = (val, { resetForm }) => {
    console.log("final Value ", val);
        resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center text-black w-full">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Registration Form
        </h2>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ touched, errors, values }) => (
            <Form className="space-y-4">
              {["name", "age", "email", "phone", "password"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block mb-1 font-medium capitalize"
                  >
                    {field}
                  </label>
                  <Field
                    type={
                      field === "password"
                        ? "password"
                        : field === "age"
                        ? "number"
                        : "text"
                    }
                    name={field}
                    id={field}
                    value={values[field]}
                    className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                      touched[field] && errors[field]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <ErrorMessage
                    name={field}
                    component={"p"}
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserData;
