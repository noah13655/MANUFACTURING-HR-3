import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

import jjmLogo from '../../assets/jjmlogo.jpg';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    const result = await login(email, password);

    if (!result) {
      setErrorMessage("Username or password incorrect!");
      return;
    }

    setErrorMessage("");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse w-full px-4 md:px-8">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="flex justify-center py-6">
            <img
              src={jjmLogo}
              alt="Manufacturing Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Login to HR3</h1>
          <p className="py-6">
            Welcome to JJM Manufacturing! Basta Best Quality and Best Brand JJM na yan!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              {errorMessage && (
                <p className="text-red-500 text-center mb-4">{errorMessage}</p>
              )}
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
