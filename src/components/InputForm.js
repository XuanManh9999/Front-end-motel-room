function InputForm({ label, type, name, placeholder }) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">{label}</label>
      <input
        type={type}
        id="phone"
        className="border-none bg-[#e8f0fe] w-full p-2 rounded-md outline-none"
      />
    </div>
  );
}

export default InputForm;
