import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { contactsThunks } from "../../redux";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup
      .string()
      .required("Last name is required")
      .typeError("That doesn't look like a name"),
    phone: yup
      .string()
      .matches(phoneRegExp, "That doesn't look like a number")
      .required("A phone number is required"),
    city: yup
      .string()
      .required("City name is required")
      .typeError("That doesn't look like a city"),
    email: yup
      .string()
      .email()
      .required("Email is required")
      .typeError("That doesn't look like an email"),
  })
  .required();

export default function TableForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(contactsThunks.postContactThunk(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[400px] mx-auto mt-4"
    >
      <label className="block  bg-green-500 py-1 font-semibold text-white text-center rounded-t-md active:shadow-l">
        Contact details
      </label>
      <label htmlFor="firstName" className="py-1">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        {...register("firstName")}
        className="px-2 py-1 rounded-sm"
      />
      <p className="text-red-500">{errors.firstName?.message} </p>
      <label htmlFor="lastName" className="py-1">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        {...register("lastName")}
        className="px-2 py-1 rounded-sm"
      />
      <p className="text-red-500">{errors.lastName?.message}</p>
      <label htmlFor="phone" className="py-1">
        Number
      </label>
      <input
        type="text"
        id="phone"
        {...register("phone")}
        className="px-2 py-1 rounded-sm"
      />
      <p className="text-red-500">{errors.phone?.message}</p>
      <label htmlFor="city" className="py-1">
        City
      </label>
      <input
        type="text"
        id="city"
        {...register("city")}
        className="px-2 py-1 rounded-sm"
      />
      <p className="text-red-500">{errors.city?.message}</p>
      <label htmlFor="email" className="py-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        {...register("email")}
        className="px-2 py-1 rounded-sm"
      />
      <p className="text-red-500">{errors.email?.message}</p>
      <input
        type="submit"
        className="block mt-[16px] cursor-pointer bg-green-500 py-1 font-semibold text-white hover:text-gray-500 rounded-b-md active:shadow-lg active:text-gray-700"
      />
    </form>
  );
}
