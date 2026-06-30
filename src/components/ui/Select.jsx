import React from "react";

function Select({ label, id, name, options, value, onChange, placeholder = "Choose options" }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input-category" className="text-sm">
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-sm text-white border border-white/10 bg-zinc-900 rounded-md px-2.5 py-2 outline-none focus:border-zinc-500"
      >
        <option value="" disabled className="bg-zinc-900 text-white">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-zinc-900 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
