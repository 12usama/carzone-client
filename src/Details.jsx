import { useLoaderData } from "react-router-dom";
import Car from "./Car";


const Details = () => {

    const cars = useLoaderData();
    return (
        <div className="max-w-4xl mx-auto mt-16 mb-16">
            
            <div className=" gap-5 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
            {
                cars.map(car => <Car key={car._id} car={car}></Car>)
            }
            </div>


        </div>
    );
};

export default Details;