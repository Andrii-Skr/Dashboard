import { useNavigate, useParams } from "react-router-dom";
import "./Button.css";

const Button = ({ numberOfPage }: { numberOfPage: number }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <button
      className={Number(id) === numberOfPage ? "active" : ""}
      onClick={() => navigate(`/customers/${numberOfPage}`)}
    >
      {numberOfPage}
    </button>
  );
};

export default Button;
