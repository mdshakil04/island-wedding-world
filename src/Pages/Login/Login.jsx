import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleSignIn().then(result => {
            console.log(result.user)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please! Login</h1>
          <p className="py-6">
          We are a passionate group of individuals dedicated to [briefly describe your mission or purpose]. Our journey began [mention the year or context when your organization started], and since then, we have been committed to [state the primary goal or vision of your organization].
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
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
                <p>New User? Please <Link className=" text-red-600 font-bold" to='/register'>Register</Link></p>
            <button  className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Login</button>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Login With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
