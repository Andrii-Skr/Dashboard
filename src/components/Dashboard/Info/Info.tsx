import { useMediaQuery } from "@react-hook/media-query";
import "./Info.css";

const Info = ({ icon }: { icon: string }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <div className="userInfo">
      <img src={icon} className="icon" />
      <span className="text">
        {!isMobile && (
          <>
            <span className="name">Evano</span>
            <span className="position">Project Manager</span>
          </>
        )}
      </span>
    </div>
  );
};

export default Info;
