import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleRegister } = useContext(authContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    if (password.length < 6) {
      setError("Password Must Contain At Least 6 Characters");
      return;
    }

    if (password !== conPassword) {
      setError("Passwords Didn't Match");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password Must Contain At Least One Lowercase Letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password Must Contain At Least One Uppercase Letter");
      return;
    }

    handleRegister(email, password)
    .then(res =>{
        manageProfile(name,photo)
    })
  };

  return (
    <div className="flex flex-col gap-4 items-center mb-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phpto URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              name="conPassword"
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {/* Register btn */}
          <div className="form-control mt-6">
            <button className="btn btn-accent" type="submit">
              Register
            </button>
          </div>
          <p>
            Already Have An Account?{" "}
            <Link to="/login" className="text-cyan-400 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
