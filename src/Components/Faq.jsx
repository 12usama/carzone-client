

const Faq = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className="w-[100%]"><img className="w-[100%] h-[100%]" src="https://i.ibb.co/7tCdJjg/fq.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <div className="collapse bg-blue-200">
                        <input type="radio" name="my-accordion-1" checked="checked"/>
                        <div className="collapse-title text-xl font-medium">
                             Why choose CarZone for purchasing a car?
                        </div>
                        <div className="collapse-content">
                            <p>At CarZone, we stand out as your preferred choice because of our commitment to quality, customer satisfaction, and an extensive range of well-maintained vehicles. We offer a hassle-free buying experience, competitive pricing, and a dedicated team ready to assist you every step of the way.</p>
                        </div>
                    </div>
                    <div className="collapse bg-red-200">
                        <input type="radio" name="my-accordion-1"/>
                        <div className="collapse-title text-xl font-medium">
                            What sets CarZone apart from other car dealerships?
                        </div>
                        <div className="collapse-content">
                            <p>CarZone distinguishes itself with a diverse inventory of vehicles, a reputation for transparency, and a focus on delivering personalized solutions. We take pride in offering not just cars but a relationship built on trust and service excellence.</p>
                        </div>
                    </div>
                    <div className="collapse bg-green-200">
                        <input type="radio" name="my-accordion-1"/>
                        <div className="collapse-title text-xl font-medium">
                            How does CarZone ensure the quality of its cars?
                        </div>
                        <div className="collapse-content">
                            <p>CarZone prioritizes quality assurance. Our vehicles undergo rigorous inspections and maintenance to ensure they meet our high standards. We are dedicated to providing you with reliable, well-maintained cars that you can trust for years to come.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;