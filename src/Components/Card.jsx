import { useNavigate } from "react-router-dom";



const Card = ({ card }) => {
    const { id, brand_name, brand_img } = card;
    const navigate = useNavigate()
    return (
        <div>
            <div onClick={()=>{navigate(`details/${brand_name}`)}} className="w-[100%] lg:w-96 shadow-xl p-2 bg-inherit">
                <h2 className="text-center text-2xl text-blue-500 font-medium mb-3">{brand_name}</h2>
                <figure><img className="w-[100%] lg:w-full h-[300px]" src={brand_img} alt="" /></figure>
            </div>
        </div>
    );
};

export default Card;