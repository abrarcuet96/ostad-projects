import { useNavigate } from "react-router-dom";
import userStore from "../store/user.store";

const LoginComponent = () => {
  const { loginUserRequest } = userStore();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    let result = await loginUserRequest({
      email,
      password,
    });

    if (result) {
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border px-2 py-1 border-pink-500 mr-2"
          type="text"
          name="email"
        />
        <input
          className="border px-2 py-1 border-pink-500 mr-2"
          type="password"
          name="password"
        />
        <button className="border px-2 py-1 border-pink-500 mr-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
