import { useFormik } from "formik";
import Button from "../components/Button";
import Input from "../components/Input";
import fb from "../../src/assets/fb.svg";
import google from "../../src/assets/google.svg";
import Divider from "../components/Divider";

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
      <Divider className="mb-24" />
      <Button style="social" type="submit" icon={fb} className="mb-16">
        Continue with Facebook
      </Button>
      <Button style="social" type="submit" icon={google}>
        Continue with Google
      </Button>
    </form>
  );
}

export default LoginForm;
