function InputForm({ label, type, name, placeholder, value, setValue }) {
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
        className="border-none bg-[#e8f0fe] w-full p-2 rounded-md outline-none"
      />
    </div>
  );
}

export default InputForm;
