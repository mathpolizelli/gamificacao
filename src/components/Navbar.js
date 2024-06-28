import { useNavigate } from "react-router-dom";
import "../styles/App.scss";

function Navbar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    setTimeout(() => {
      navigate("/sabichoes");
    }, 100);
  };

  const navigateToGame = () => {
    setTimeout(() => {
      navigate("/sabichoes/game");
    }, 100);
  };

  const navigateToRanking = () => {
    setTimeout(() => {
      navigate("/sabichoes/ranking");
    }, 100);
  };

  return (
    <div className="navbar">
      <h1>SABICHÕES</h1>
      <div className="links">
        <button className="linkButton" onClick={navigateToHome}>
          Home
        </button>
        <button className="linkButton" onClick={navigateToGame}>
          Jogar
        </button>
        <button className="linkButton" onClick={navigateToRanking}>
          Ranking
        </button>
      </div>
    </div>
  );
}

export default Navbar;
