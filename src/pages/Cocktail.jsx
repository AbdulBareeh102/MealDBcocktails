import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const singlemealSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singlemealSearchUrl}${id}`);

  return { id, data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();

  if (!data) return <h2>Something went wrong...</h2>;
  //if (!data) return <Navigate to="/" />;

  const singleMeal = data.meals[0];

  const {
    strMeal: name,
    strMealThumb: image,
    strCategory: category,
    strArea: location,
    strTags: tag,
    strIngredients: ingredient,
  } = singleMeal;

  const validIngredients = Object.keys(singleMeal)
    .filter(
      (key) => key.startsWith("strIngredient") && singleMeal[key] !== null
    )
    .map((key) => singleMeal[key]);
  console.log(validIngredients);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h2>{name}</h2>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info ">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">location : </span>
            {location}
          </p>
          <p>
            <span className="drink-data">ingredient : </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="img" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">tags : </span>
            {tag}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
