export default function Divider({ className }) {
  return (
    <div className={`w-327 flex items-center ${className}`}>
      <hr className="flex-grow border-t-1 border-grayLight" />
      <span className="mx-7 text-gray-500 font-extrabold">or</span>
      <hr className="flex-grow border-t-1 border-grayLight" />
    </div>
  );
}
