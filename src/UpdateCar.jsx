import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateCar = () => {
    const car = useLoaderData();
    const { _id, name, brand, type, photo, price, rating, description } = car;

    const handleUpdateCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedCar = {name, brand, type, photo, price, rating, description}
        console.log(updatedCar);

        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount> 0){
                swal({
                    title: "Good job!",
                    text: "Updated successfully!",
                    icon: "success",
                  });
            }
        })
    }

    return (
        
        <div className="bg-blue-200 p-24 mt-10">
            <div>
                <h1>Update Car {name}</h1>
            </div>
            <form onSubmit={handleUpdateCar}>
                {/* first row */}
                <div className="flex gap-4 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text"
                                name="name"
                                defaultValue={name}
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
                                defaultValue={brand}
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
                                defaultValue={type}
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
                                defaultValue={photo}
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
                                defaultValue={price}
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
                                defaultValue={rating}
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
                                defaultValue={description}
                                placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Car" className="btn font-bold btn-block mt-3 bg-red-400 border border-red-400" />
            </form>
        </div>
    );
};

export default UpdateCar;