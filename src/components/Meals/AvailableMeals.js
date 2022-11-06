import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rasgulla",
    description: "Rasgulla is a traditional sweet",
    price: 15,
  },
  {
    id: "m2",
    name: "Shahi Paneer",
    description: "shahi paneer is a cheese curry",
    price: 300,
  },
  {
    id: "m3",
    name: "Pongal",
    description: "Pongal is a sweet rice dish",
    price: 275,
  },
  {
    id: "m4",
    name: "Kulfi",
    description: "Kulfi is a traditional Indian ice cream",
    price: 70,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
