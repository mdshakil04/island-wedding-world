import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className=" container mx-auto">
            <div className=" text-center mt-8">
                <h2 className="text-4xl">Our Services</h2>
            </div>
           <div className=" grid grid-cols-3 gap-4 mt-8">
           {
                services.map(service =><Service key={service.id} service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;