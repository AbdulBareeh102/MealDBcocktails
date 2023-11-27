import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const categoriesSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/random.php?";

export const loader = async ({ params }) => {
  const { category } = params;
  const { data } = await axios.get(`${categoriesSearchUrl}${category}`);

  return { category, data };
};

const MealDB = () => {
  const { category, data } = useLoaderData();
  const singleMeal = data.meals[0];
  const {
    strMeal: name,
    strMealThumb: image,
    strCategory: categorry,
    strArea: location,
    strInstruction: instruction,
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
            {categorry}
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
        </div>
      </div>
    </Wrapper>
  );
};

export default MealDB;
