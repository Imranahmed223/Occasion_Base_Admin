import {
  BarChart,
  DoughnutChart,
  LineChartDashboard,
  LineChart2,
  PieChart,
  VisitChart,
} from "./../../components";
import "./Dashboard.scss";
import { waveLeft, wave } from "./../../assests";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_container_box">
        <DoughnutChart />
        {/* <LineChartDashboard quantity={100} title={"Visitors by Browsers"} /> */}
        <VisitChart title="Visitors by Browsers" count="100" img={wave} />
        <VisitChart title="Subscriber" count="250" img={wave} />
        {/* <LineChartDashboard quantity={250} title={"Subscriber"} /> */}
        <PieChart />
      </div>
      <LineChart2 />
      <br />
      <br />
      <BarChart />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
