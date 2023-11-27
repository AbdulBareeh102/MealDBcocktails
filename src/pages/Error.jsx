import Wrapper from "../assets/wrappers/Error";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/Error.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!!!</h3>
          <p>We can't seem find your page pls go back home </p>
          <Link to="/">Go back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
