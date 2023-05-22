import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null)
    
    useEffect(()=>{
fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
.then(res => res.json())
.then(data => setServices(data))
    },[asc, search])

    const handleSearch =()=>{
console.log(searchRef.current.value)
setSearch(searchRef.current.value)
    }


    return (
    <div className="mt-16 ">
            <div className="text-center">
            <p className="text-orange-800">Service</p>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="my-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn"
                onClick={()=> setAsc(!asc)}>{asc ? "low to high" : "high to low"}</button>
           <div className="form-control">
  <div className="input-group flex justify-center mt-3">
    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
            </div>
            <div className="grid grid-cols-1 mx-auto lg:gap-6 md:grid-cols-2 lg:grid-cols-3 my-9">
                {services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;