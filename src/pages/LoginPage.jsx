import LoginForm from "../forms/LoginForm.jsx";
import Divider from "../components/Divider.jsx";
import Navbar from "../components/Navbar.jsx";

export default function LoginPage() {
  return (
    <div>
      <div className="container flex flex-col items-center">
        <h5>Log In</h5>
        <h1 className="">habbitual</h1>
        <LoginForm />
        Already have an account ?
        <Navbar />
      </div>
    </div>
  );
}
