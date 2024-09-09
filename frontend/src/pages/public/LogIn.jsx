import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import {useNavigate} from 'react-router-dom';

const LogIn = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const {login,isAuthenticated} = useAuthStore();

    const handleLogin = async (e) =>{
      e.preventDefault();

      try {
        await login(email,password);
      } catch (error) {
        setError("Failed to login ,Please check your credentials");
      }

    };

    useEffect(()=>{
      if(isAuthenticated){
        navigate("/dashboard")
      }
    },[isAuthenticated,navigate]);

   
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" onChange={(e)=>setPassword(e.target.value)} required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default LogIn