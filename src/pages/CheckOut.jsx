import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  console.log(services);
  const { title, _id, price, img } = services;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const amount = form.amount.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      services_id: _id,
      services_title: title,
      price: price,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Booked the service!");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-5">Book servise: {title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input type="date" name="date" className="input input-bordered" />
          </div>

          <div className="form-control">
            <input
              type="email"
              placeholder="Your email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Due Amount"
              name="amount"
              className="input input-bordered"
              defaultValue={`Due Amount : ${price}$`}
            />
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-36 my-6 px-4 py-3"
            style={{ background: "none", border: "1px solid #333" }}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
   
        <ToastContainer
       position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
      />
    </div>
  );
};

export default CheckOut;
