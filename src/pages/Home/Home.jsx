import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";
import { Link,useNavigate } from "react-router-dom";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  const startRegister=()=>{
    navigate("/register");
    console.log("button clicked....");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to X-ChatRoom!" icon="logo">
        <p className={styles.text}>
          X-ChatRoom the best audio chat room on the internet! Join today and
          start chatting with people from all over the world and chat about
          anything you want.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>

        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link to="/login" style={signInLinkStyle}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
