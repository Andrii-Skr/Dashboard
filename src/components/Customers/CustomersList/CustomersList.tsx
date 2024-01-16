import { DataT } from "../../../store/store";
import "./CustomersList.css";

const CustomersList = ({ list }: { list: DataT }) => {
  return (
    <div className="list">
      <span>{list.name}</span>
      <span>{list.Company}</span>
      <span>{list.PhoneNumber}</span>
      <span>{list.Email}</span>
      <span>{list.Country}</span>
      <span className={list.Status ? "active" : "inactive"}>
        {list.Status ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default CustomersList;
