import Calendar from "../components/calendar/calendar.component";
import FormDropdown from "../components/form-dropdown/form-dropdown.component";
import SideMenu from "../components/side-menu/side-menu.component";

const HomePage = () => {
  const data: string[] = ["one", "two"];
  //Temp home for this action:
  // useSelector-> map of selections {program: '', starts on: '', campus: '', co-op: ''}
  //In some 3 year programs, 3rd year courses might be offered only during one given semester a year
  return (
    <div>
      {/* OPTIONS: must pass as array of strings
        -programs
        -starting term
        -co-op
      */}
      <SideMenu>
        <FormDropdown
          label="Program Name"
          selectionOptions={data}
        />
        <FormDropdown
          label="Starting Year"
          selectionOptions={data}
        />
      </SideMenu>
      {/* Only render calendar when program set */}

      <Calendar />
    </div>
  )
};

export default HomePage;