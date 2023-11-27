import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const mealcocktailSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";
const searchMealCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${mealcocktailSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchMealCocktailsQuery(searchTerm));
    return { searchTerm };
  };

//   const searchTerm = url.searchParams.get("search") || "";
//   //const response = await axios.get(`${mealcocktailSearchUrl}${searchTerm}`);
//   return { searchTerm };
// };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchMealCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList meals={meals} />
    </>
  );
};

export default Landing;
