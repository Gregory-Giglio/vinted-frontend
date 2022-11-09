import {Link} from "react-router-dom";

const Offers = ({offers}) => {
    return (
        <div className="offers">
            {offers.map((offer) =>{
                return (   
                    <div key={offer._id} className="offer">
                        <Link to={`/offer/${offer._id}`}>
                            <img src={offer.product_image.secure_url} alt="" />
                        </Link>                        
                    </div>
                )
            })}
        </div>
    );
};

export default Offers;