import { useFormik } from "formik";
import Button from "../components/Button";
import Input from "../components/Input";
import fb from "../../src/assets/fb.svg";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="email"
        label="Email"
        id="email"
        name="email"
        className="mb-16"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        id="password"
        className="mb-16"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit">Get Started</Button>
      <Button style="social" type="submit" icon={fb}>
        Continue with Google
      </Button>
    </form>
  );
}

export default LoginForm;
