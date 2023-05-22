import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const {signIn, createUserGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handlelogin =(e)=>{
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
  //  console.log(email, password);

   signIn(email, password)
   .then(result => {
    // console.log(result.user)
     const loggedUSer = {
      email: result.user.email,
     }
     console.log(loggedUSer)
     fetch('http://localhost:5000/jwt',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(loggedUSer)
     })
     .then(res => res.json())
     .then(data => {
      console.log('jwt response', data)
      localStorage.setItem('car-access-token', data.token)
      navigate(from, {replace: true})
    })
    // form.reset();
   }).catch(err => {
    console.log(err.message)
   });
    }

    const handleGoogleSingin = (e)=>{
      e.preventDefault();

      createUserGoogle()
      .then(result => {
        const loggengogle = result.user;
        console.log(loggengogle)
        navigate(from, {replace: true})
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
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handlelogin}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='login' />
              </div>
          </form> 
          <div className="divider">OR</div>
          <button onClick={handleGoogleSingin} className="btn btn-primary">
          Sign in with google
          <FaGoogle className='ml-2'/>
          </button>
          <p>New to here? <Link className='text-orange-800 underline' to='/register'>signup</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;