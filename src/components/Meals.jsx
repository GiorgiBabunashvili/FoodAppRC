import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "../components/Error.jsx";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="error">Fetching melas....</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals!" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
