import "./MainHeading.css";
import iconCalendar from "../../assets/icons/calendar-plus.svg";

const MainHeading = () => {
  return (
    <div className="main-heading">
      <h1>
        <img src={iconCalendar} alt="" />
        Todo List
      </h1>
    </div>
  );
};

export default MainHeading;
