import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Button from "./Button";
import Title from "./Title";
import Info from "./Info";

type IconsT = {
  Dashboard: string[];
  Product: string[];
  Customers: string[];
  Income: string[];
  Promote: string[];
  Help: string[];
  chevron: string;
  DashboardTitle: string;
  UserIcon: string;
};
const icons: IconsT = {
  Dashboard: ["Dashboard", "./img/key-square.png"],
  Product: ["Product", "./img/3d-square 1.png"],
  Customers: ["Customers", "./img/user-square 1.png"],
  Income: ["Income", "./img/wallet-money 2.png"],
  Promote: ["Promote", "./img/discount-shape 1.png"],
  Help: ["Help", "./img/message-question 1.png"],
  chevron: "./img/chevron-right 2.png",
  DashboardTitle: "./img/setting 1.png",
  UserIcon: "./img/Ellipse 8.png",
};

const Dashboard = () => {
  return (
    <>
      <aside>
        <Title icon={icons.DashboardTitle} />
        <Button icon={icons.Dashboard} />
        <Button icon={icons.Product} chevron={icons.chevron} />
        <Button icon={icons.Customers} chevron={icons.chevron} />
        <Button icon={icons.Income} chevron={icons.chevron} />
        <Button icon={icons.Promote} chevron={icons.chevron} />
        <Button icon={icons.Help} chevron={icons.chevron} />
        <Info icon={icons.UserIcon} />
      </aside>
      <Outlet />
    </>
  );
};

export default Dashboard;
