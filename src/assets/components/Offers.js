import {Link} from "react-router-dom";

const Offers = ({offers}) => {
    return (
        <div className="offers">
            {offers.map((offer) =>{
                return ( 
                    offer.owner && (                                         
                        <div key={offer._id} className="offer">
                            <Link to={`/offer/${offer._id}`} className="nodecoration">     
                                <div className="offer-card-header">                            
                                    {offer.owner.account.avatar && (
                                        <img
                                            src={offer.owner.account.avatar.secure_url}
                                            alt="owner"
                                            className="avatar"
                                        />
                                    )}                                    
                                    <p>{offer.owner.account.username}</p>                                    
                                </div>                            
                                <img src={offer.product_image.secure_url} alt="" />
                                <div>
                                    <p className="color-black">{offer.product_price} €</p>
                                    {offer.product_details.map((detail, index) => {
                                        if (detail.TAILLE) {
                                        return <p key={index}>{detail.TAILLE}</p>;
                                        } else {
                                        return null;
                                        }
                                    })}
                                    {offer.product_details.map((detail, index) => {
                                        if (detail.MARQUE) {
                                        return <p key={index}>{detail.MARQUE}</p>;
                                        } else {
                                        return null;
                                        }
                                    })}
                                </div>
                            </Link>                    
                        </div>
                          
                    )
                )
            })}
        </div>
    );
};

export default Offers;