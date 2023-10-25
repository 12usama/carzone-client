import { Link, useLoaderData } from "react-router-dom";


const CarDetail = () => {

    const car = useLoaderData();
    const { _id, name, brand, type, photo, price, rating, description } = car;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-blue-500 font-bold">{name}</h1>
                        <p className="py-6 font-medium">{description}</p>
                        <Link to={'/myCart'}>
                        <button className="btn bg-red-500 font-bold text-white">Add to Cart ${price}</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;