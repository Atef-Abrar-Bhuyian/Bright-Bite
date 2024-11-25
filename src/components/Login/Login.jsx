import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogOut } =
    useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password);
  };

  return (
    <div className="flex flex-col gap-4 items-center mb-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent" type="submit">
              Login
            </button>
          </div>
          <p>
            Don't Have An Account?{" "}
            <Link to="/register" className="text-cyan-400 font-bold">
              Register Now
            </Link>
          </p>
        </form>
      </div>
      <button onClick={handleLogOut} className="btn btn-accent" type="submit">
        Logout
      </button>
    </div>
  );
};

export default Login;
