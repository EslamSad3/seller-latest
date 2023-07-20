import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { productsContext } from "../../context/ProductsContext";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const { handleLogin, userdata, setuserdata } = useContext(productsContext);

  async function completelogin(values) {
    const { data } = await handleLogin(values);
    setuserdata(data.data._id);
    localStorage.setItem("UserToken", data.token);
    if(localStorage.getItem("UserToken")){
      navigate("/")
    }
  }

  // async function handleLogin(values) {
  //   try {
  //     const response = await axios.post(
  //       `https://ali-service-ey1c.onrender.com/api/team2/auth/login`,
  //       values
  //     );
  //     if (response.status === 200) {
  //       localStorage.setItem("UserToken", response.data.token);
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       console.log("Incorrect email or password");
  //     }
  //   }
  // }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "seller",
    },
    onSubmit: completelogin,
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
