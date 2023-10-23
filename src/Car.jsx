

const Car = ({car}) => {

    const {_id, name, brand, type, photo, price, rating, description} = car;

    return (
        <div>
            <div className="bg-base-100 p-3 h-[500px] shadow-xl">
                <h1 className="text-center text-2xl font-medium mb-3">{brand}</h1>
                <figure><img className="w-[400px] h-[200px]" src={photo} alt="Shoes" /></figure>
                <div>
                    <div className="flex justify-between mb-4">
                    <h2><span className="font-semibold">Name:</span> {name}</h2>
                    <h2><span className="font-semibold">Type:</span> {type}</h2>
                    </div>
                    <div className="flex justify-between">
                    <p><span className="font-semibold">Price:</span>${price}</p>
                    <p><span className="font-semibold">Rating:</span>${rating}</p>
                    </div>
                    
                    <div className="mt-8">
                        <button className="btn btn-block bg-blue-500 text-xl text-white mb-2">Details</button>
                        <button className="btn btn-block bg-red-500 text-xl text-white">UPdate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;