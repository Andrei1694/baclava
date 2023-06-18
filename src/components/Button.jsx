const mapStyle = new Map([
  ["default", "bg-primary text-base font-bold w-327 rounded-sm h-48"],
  ["social", "flex items-center h-40  font-bold border rounded-sm w-327"],
]);

function Button({
  children,
  onClick,
  className,
  type = "button",
  style = "default",
  icon,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${mapStyle.get(style)}`}
    >
      {icon && <img src={icon} className="ml-[12px] mr-[37.5px]" alt="icon" />}
      {children}
    </button>
  );
}

export default Button;
