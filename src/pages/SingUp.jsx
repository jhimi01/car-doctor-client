import { Link } from 'react-router-dom';
import login from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";



const SingUp = () => {

  const { createUser, createUserGoogle } = useContext(AuthContext);

    const handleregister =(e)=>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.log(error))
         }




         const handleGoogleSingin = (e)=>{
          e.preventDefault();

          createUserGoogle()
          .then(result => {
            const loggengogle = result.user;
            console.log(loggengogle)
          }).catch(error => console.log(error.message))

         }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row">
          <div className="w-full md:w-1/2 md:mr-12">
           
          <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleregister}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='SignUp' />
              </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSingin} className="btn btn-primary">
          Sign in with google
          <FaGoogle className='ml-2'/>
          </button>

          {/* <input className="btn btn-primary" type="submit" value='Sign in with github' /> */}
          <p>New to here? <Link className='text-orange-800 underline' to='/login'>login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;