function InputForm({
  label,
  type,
  name,
  placeholder,
  value,
  setValue,
  invalidFields,
  setInvalidFields,
}) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={type}
        id="phone"
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(e) => setValue(e)}
        onFocus={() => setInvalidFields([])}
        className="border-none bg-[#e8f0fe] w-full p-2 rounded-md outline-none"
      />
      {console.log("Xuan Manh check:", invalidFields)}
      {invalidFields?.length > 0 &&
        invalidFields.some((i) => i?.name === name) && (
          <small className="text-red-500 italic">
            {invalidFields.find((i) => i?.name === name)?.msg}
          </small>
        )}
    </div>
  );
}

export default InputForm;
