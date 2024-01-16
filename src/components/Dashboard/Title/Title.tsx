import "./Title.css";

const Title = ({ icon }: { icon: string }) => {
  return (
    <div className="title">
      <img src={icon} />
      <span>
        <span className="text"> Dashboard</span>
        <span className="version">v.01</span>
      </span>
    </div>
  );
};

export default Title;
