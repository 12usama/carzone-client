
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-purple-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-red-600 font-bold">Contact Us!</h1>
                        <p className="py-6 text-lg font-medium">We are here to assist you! If you have any questions, feedback, or inquiries, do not hesitate to reach out to us. Our team at CarZone is ready to provide you with the support and information you need. Feel free to contact us, and we will get back to you as soon as possible. Your satisfaction is our priority.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text font-bold">Your Message</span>
                                </label>
                                <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;