import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/contact-us");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={clickHandler}>Go to contact us</button>
    </div>
  );
};

export default HomePage;
