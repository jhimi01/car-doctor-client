import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div key={_id} className="card card-compact  p-5 bg-base-300 ">
        <figure><img className="h-60 w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-800 text-xl">Price: {price}$</p>
          <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Booking <FaArrowRight className="ml-1" /></button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;