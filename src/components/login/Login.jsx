import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  async function handleLogin(values) {
    try {
      const response = await axios.post(
        `https://ali-service-ey1c.onrender.com/api/team2/auth/login`,
        values
      );
      if (response.status === 200) {
        localStorage.setItem("UserToken", response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        console.log("Incorrect email or password");
      }
    }
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "seller",
    },
    onSubmit: handleLogin,
  });
  return (
    <div className="w-75 mx-auto py-4">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          class="form-control my-2 py-3"
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">password</label>
        <input
          class="form-control my-2 py-3"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
