import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import css from "./Home.module.css";
import { routes } from "../../routes";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routes.CATALOG);
  };
  return (
    <section className={css.homeSection}>
      <div className={`container ${css.homeContainer}`}>
        <h1 className={css.title}>Camper rental service</h1>
        <div className={css.descr}>
          <p>
            Get ready for new adventures and explore the world of camping with
            our camper rental service!
          </p>
          <p>
            Embark on journeys with comfort and freedom, enjoying the benefits
            that only a mobile home can provide!
          </p>
        </div>

        <Button onClick={handleClick}>Start your journey</Button>
      </div>
    </section>
  );
};

export default Home;

//  With our
//           diverse fleet of campers, you will find the perfect option for your
//           next adventure. Whether it is a family getaway, a romantic vacation,
//           or an extended camping tour, we have the ideal solution for you. Start
//           your journey in convenience and style with our camper rentals today
