import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "../components/CocktailCard";
import { Cocktail } from "../pages";
const CocktailList = ({ meals }) => {
  if (!meals) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktail Found....</h4>
    );
  }

  const formattedMeals = meals.map((item) => {
    const { idMeal, strArea, strCategory, strMealThumb, strMeal } = item;
    return {
      id: idMeal,
      location: strArea,
      name: strMeal,
      image: strMealThumb,
      category: strCategory,
    };
  });
  return (
    <Wrapper>
      {formattedMeals.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
