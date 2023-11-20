import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // send backend request
    // new Promise().then((res) => {
    //   // if res.success
    //   // get the token from res
    //   // save the token in the localstorage
    //   // navigate the user to home page
    // });
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="email..." name="email" id="email" />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        name="password"
        id="password"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
