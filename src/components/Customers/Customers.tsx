import { useState } from "react";
import { data, DataT } from "../../store/store";
import CustomersList from "./CustomersList";
import ContentBox from "./ContentBox";
import "./Customers.css";
import PageSwitcher from "./PageSwitcher";
import { useParams } from "react-router-dom";

const Customers = () => {
  const [customers] = useState<DataT[]>(data);
  const { id } = useParams();

  const minPage = Number(id) * 8 - 8;
  const maxPage = Number(id) * 8 > customers.length ? customers.length : Number(id) * 8;

  return (
    <div className="customers">
      <span className="customersTitle">Hello Evano 👋🏼,</span>
      <div className="content">
        <ContentBox />
        <div className="listTitle">
          <span>Customer Name</span>
          <span>Company</span>
          <span>Phone Number</span>
          <span>Email</span>
          <span>Country</span>
          <span>Status</span>
        </div>
        {customers.map((e, i) => {
          if (minPage <= i && i <= maxPage - 1) {
            return <CustomersList key={e.id} list={e} />;
          }
        })}
        <PageSwitcher qpages={customers.length} />
      </div>
    </div>
  );
};

export default Customers;
