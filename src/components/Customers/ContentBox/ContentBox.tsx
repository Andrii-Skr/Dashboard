import "./ContentBox.css";

const ContentBox = () => {
  return (
    <div className="contentBox">
      <div className="contentTitle">
        <span className="title">All Customers</span>
        <span className="text">Active Members</span>
      </div>
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
};

export default ContentBox;
