import LoginForm from "../../components/loginForm/loginForm";
import style from "./landingPage.module.css";

function LandingPage({ login }) {
  return (
    <div className={style.landingContainer}>
      <LoginForm login={login} />
      </div>
  );
}

export default LandingPage;
