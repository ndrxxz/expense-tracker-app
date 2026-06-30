import React from "react";

function FormField({ label, id, name, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm border border-white/10 bg-white/5 rounded-md px-2.5 py-2 outline-none focus:border-zinc-500"
      />
    </div>
  );
}

export default FormField;
