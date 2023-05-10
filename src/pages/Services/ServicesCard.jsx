import { FaArrowRight } from "react-icons/fa";


const ServicesCard = ({service}) => {
    console.log(service)
    const {_id, title, img, price} = service;
    return (
        <div key={_id} className="card card-compact  p-5 bg-base-300 ">
        <figure><img className="h-60 w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-800 text-xl">Price: {price}$</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><FaArrowRight /></button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;