import { useMediaQuery } from "@react-hook/media-query";
import "./Title.css";

const Title = ({ icon }: { icon: string }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <div className="title">
      <img src={icon} />
      <span>
       {!isMobile && <><span className="text"> Dashboard</span>
        <span className="version">v.01</span></>}
      </span>
    </div>
  );
};

export default Title;
