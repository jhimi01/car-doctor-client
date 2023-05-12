import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData();
  console.log(services);
  const { title, _id } = services;
  return (
    <div>
      <h2>Book servise: {title}</h2>
      <form>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="form-control">
         
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
         
          <input
            type="text"
            placeholder="last name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
         
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered"
          />
        </div>
     </div>
     <div>
        <textarea name="message" placeholder="Message" className="w-full h-36 my-6 px-4 py-3" style={{background: 'none' ,border: '1px solid #333'}}></textarea>
     </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value='submit'/>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
