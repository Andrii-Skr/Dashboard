import "./Info.css";

const Info = ({ icon }: { icon: string }) => {
  return (
    <div className="userInfo">
      <img src={icon} className="icon" />
      <span className="text">
        <span className="name">Evano</span>
        <span className="position">Project Manager</span>
      </span>
    </div>
  );
};

export default Info;
