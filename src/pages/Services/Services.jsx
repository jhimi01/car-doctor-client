import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
fetch('services.json')
.then(res => res.json())
.then(data => setServices(data))
    },[])

    console.log(services)

    return (
    <div className="mt-16 ">
            <div className="text-center">
            <p className="text-orange-800">Service</p>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="my-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 mx-auto lg:gap-6 md:grid-cols-2 lg:grid-cols-3 my-9">
                {services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;