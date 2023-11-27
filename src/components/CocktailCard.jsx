import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ id, image, location, category, name }) => {
  return (
    <Wrapper>
      <Link to={`/cocktail/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
      </Link>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{location}</h5>
        <p>{category}</p>
        <Link to={`/mealdb/${category}`} className="btn">
          {" "}
          Check-random
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;

