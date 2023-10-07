import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required!"),
    email: yup.string().email().required("Email is Required !"),
    age: yup.number().positive().integer().required("Age is Required!"),
    password: yup.string().min(6).max(18).required("Password is Required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Check Your Password Again"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <input
            type="text"
            placeholder="Full Name..."
            {...register("fullName")}
          />
          <p className="error-message">{errors.fullName?.message}</p>
        </div>
        <div className="form-field">
          <input type="text" placeholder="Email..." {...register("email")} />
          <p className="error-message">{errors.email?.message}</p>
        </div>
        <div className="form-field">
          <input type="number" placeholder="Age..." {...register("age")} />
          <p className="error-message">{errors.age?.message}</p>
        </div>
        <div className="form-field">
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p className="error-message">{errors.password?.message}</p>
        </div>
        <div className="form-field">
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <p className="error-message">{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
