import swal from 'sweetalert';

const AddCar = () => {
    const handleAddCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newCar = {name, brand, type, photo, price, rating, description}
        console.log(newCar);

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal({
                    title: "Good job!",
                    text: "Added successfully!",
                    icon: "success",
                  });
            }
        })
    }
    return (
        <div className="max-w-6xl mx-auto my-10">
            <h1 className="text-5xl text-center mb-5 font-bold text-blue-400">Add New Car</h1>
            <p className="text-lg text-center"> <span className="text-violet-600 font-medium">Ready to showcase your car on CarZone?</span> <br /> <span className=" text-red-500 font-semibold">Fill out the details</span> below to add your vehicle to our listings. We will help you find the right buyer and make the process easy. Your car deserves the spotlight, and we are here to make it happen.</p>
            <div className="bg-blue-200 p-24 mt-10">
                <form onSubmit={handleAddCar}>
                    {/* first row */}
                    <div className="flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Car Name</span>
                            </label>
                            <label className="">
                                <input type="text" 
                                name="name"
                                placeholder="Car Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </label>
                            <label className="">
                                <input type="text"
                                name="brand"
                                placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Type of Car</span>
                            </label>
                            <label className="">
                                <input type="text" 
                                name="type"
                                placeholder="Car type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Photo Url</span>
                            </label>
                            <label className="">
                                <input type="text"
                                name="photo"
                                placeholder="Photo Url" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* third row */}
                    <div className="flex gap-4 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="">
                                <input type="number" 
                                name="price"
                                placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="">
                                <input type="number"
                                name="rating"
                                placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* last row */}
                    <div className="flex gap-4 mb-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <label className="">
                                <input type="text" 
                                name="description"
                                placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Car" className="btn font-bold btn-block mt-3 bg-red-400 border border-red-400" />
                </form>
            </div>
        </div>
    );
};

export default AddCar;