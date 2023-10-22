import CarCards from "./CarCards";
import Contact from "./Contact";
import Faq from "./Faq";


const Home = () => {

    return (
        <div className="px-5 mx-auto mt-5">
            <div className="flex justify-center items-center h-[300px] lg:h-[500px] gap-10 pl-5 bg-black/90">
                <div className="w-1/3 lg:w-2/3 p-4">
                    <h1 className="text-2xl lg:text-6xl font-bold text-right text-blue-500">CAR<span className="text-red-500">ZONE</span></h1>
                    <p className="text-sm lg:text-2xl text-white text-right font-medium mt-2 lg:mt-3">What we drive says a lot about who we are!</p>
                    <p className="text-xs lg:text-xl text-white font-medium mt-2 lg:mt-3 text-right">We are ready to provide always the best..</p>
                </div>
                <div className="h-[100%]">
                    <img className="h-[300px] lg:h-[100%]" src="https://i.ibb.co/fQsYvYK/CPO-Banner.jpg" alt="" />
                </div>
            </div>
            <CarCards />

            <div>
                <div className="hero min-h-screen mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/Xsh879p/about-us.jpg)' }}>
                    <div className="hero-overlay bg-black/40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="mb-2 text-5xl font-bold">About Us</h1>
                            <p className="mb-5 text-xl">At CarZone, we are more than just a dealership; we are your destination for quality and reliability. With a passion for cars and a commitment to customer satisfaction, we have been serving automotive enthusiasts and drivers for years. Our showroom features a diverse selection of vehicles to suit every need and style, from sleek sedans to rugged SUVs and powerful sports cars. We take pride in providing top-notch service, fair pricing, and a hassle-free buying experience. Trust CarZone to be your partner in finding the perfect vehicle that matches your lifestyle and needs. Your journey to a new set of wheels begins here with CarZone.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-16 mb-16">
                <h1 className="text-5xl mb-10 font-bold text-center text-blue-500">Why Choose Us??</h1>
                <Faq></Faq>
            </div>
            <div className="max-w-6xl mx-auto mt-16 mb-16">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;