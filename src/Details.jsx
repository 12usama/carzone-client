import { useLoaderData, useParams } from "react-router-dom";
import Car from "./Car";
import { useEffect, useState } from "react";
import Adv from "./Adv";


const Details = () => {

    const brandLoader = useLoaderData()
    const {brand_name} = brandLoader;
    console.log(brand_name);

    const [cars , setCars] = useState([])

    useEffect(()=>{
        fetch('https://carzone-server-eta.vercel.app/car')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const newcars = data.filter(car => car.brand === brand_name )
            setCars(newcars)
        })
    },[])
    console.log(cars);

    return (
        <div className="max-w-4xl mx-auto mt-16 mb-16">
            <div className="mb-20">
                <Adv></Adv>
            </div>
            <h1 className="text-center text-5xl font-bold text-blue-400 my-10">Car Collections</h1>
            
            <div className=" gap-6 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                
            {
                cars.map(car => <Car key={car.id} car={car}></Car>)
            }
            </div>


        </div>
    );
};

export default Details;