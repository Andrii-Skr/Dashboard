import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import "./PageSwitcher.css";

const icons = {
  left: "./img/left.png",
  right: "./img/right.png",
};

const PageSwitcher = ({ qpages }: { qpages: number }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const maxBtn = Math.floor(qpages / 8) + (qpages % 8 > 0 ? 1 : 0);

  const buttonRender = () => {
    if (Math.floor(qpages / 8) < 5) {
      let n = maxBtn;

      let pages = Array.from({ length: n }, (_, index) => index + 1);

      return pages.map((e) => <Button numberOfPage={e} key={e} />);
    } else {
      return (
        <>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>{maxBtn}</button>
        </>
      );
    }
  };

  return (
    <div className="pageswitcher">
      <span className="text">
        Showing data {Number(id) * 8 - 7} to {Number(id) * 8 > qpages ? qpages : Number(id) * 8} of{" "}
        {qpages} entries
      </span>
      <div className="btngroup">
        <button onClick={() => navigate(`/customers/${Number(id) - 1 > 0 ? Number(id) - 1 : id}`)}>
          <img src={icons.left} />
        </button>
        {buttonRender()}
        <button
          onClick={() => navigate(`/customers/${Number(id) + 1 <= maxBtn ? Number(id) + 1 : id}`)}
        >
          <img src={icons.right} />
        </button>
      </div>
    </div>
  );
};

export default PageSwitcher;
