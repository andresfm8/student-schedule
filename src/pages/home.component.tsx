import Calendar from "../components/calendar/calendar.component";
import FormGroup from "../components/form-group/form-group.component";
import SideMenu from "../components/side-menu/side-menu.component";

const HomePage = () => {
  return (
    <div>
      {/* Create component to make a hidden side menu */}
      <SideMenu>
        <FormGroup />
      </SideMenu>

      <Calendar />
    </div>
  )
};

export default HomePage;