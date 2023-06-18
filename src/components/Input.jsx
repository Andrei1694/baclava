function Input({ type = "text", label, className ,onChange, value, name, id}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-base font-bold mb-8">{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        id={id}
        value={value}
        className="w-327 h-48 border border-grey rounded-sm pt-sm-1 pb-sm-1 text-base pl-sm-2 font-normal no-underline"
      />
    </div>
  );
}

export default Input; /* Empty Unselected */
