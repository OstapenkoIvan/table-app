import React from "react";
import { cell } from "../Styles/styling";

export default function TableRow({ data }) {
  const { firstName, lastName, city, phone, email } = data;
  return (
    <tr>
      <td className={`${cell}`}>
        <div className="overflow-x-hidden whitespace-nowrap text-ellipsis w-[128px] box-border">
          {firstName}
        </div>
      </td>
      <td className={`${cell}`}>
        <div className="overflow-x-hidden whitespace-nowrap text-ellipsis w-[128px] box-border">
          {lastName}
        </div>
      </td>
      <td className={`${cell}`}>
        <div className="overflow-x-hidden whitespace-nowrap text-ellipsis w-[128px] box-border">
          {phone}
        </div>
      </td>
      <td className={`${cell}`}>
        <div className="overflow-x-hidden whitespace-nowrap text-ellipsis w-[128px] box-border">
          {city}
        </div>
      </td>
      <td className={`${cell}`}>
        <div className="overflow-x-hidden whitespace-nowrap text-ellipsis w-[128px] box-border">
          {email}
        </div>
      </td>
    </tr>
  );
}
