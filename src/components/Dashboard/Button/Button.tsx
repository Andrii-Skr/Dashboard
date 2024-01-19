import { useLocation, useNavigate } from "react-router-dom";
import "./Button.css";
import { useMediaQuery } from "@react-hook/media-query";

const Button = ({ icon, chevron }: { icon: string[]; chevron?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <div
      className={
        location.pathname.split("/")[1] === icon[0].toLocaleLowerCase()
          ? "container active"
          : "container"
      }
    >
      <button onClick={() => navigate(`/${icon[0].toLocaleLowerCase()}/1`)}>
        <img src={icon[1]} className="icon" />
        {!isMobile && <span className="text">{icon[0]}</span>}
        {!isMobile && <>{chevron ? <img src={chevron} className="chevron" /> : ""}</>}
      </button>
    </div>
  );
};

export default Button;
