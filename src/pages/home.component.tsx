import Calendar from "../components/calendar/calendar.component";
import SelectDropdown from "../components/form-dropdown/form-dropdown.component";

const HomePage = () => {
  const data: string[] = ["one", "two"];

  return (
    <div>
      {/* OPTIONS: must pass as array of strings
        -programs
        -starting term
        -co-op
      */}
      <SelectDropdown
        label="test"
        selectionOptions={data}
      />
      <Calendar/>
    </div>
  )
};

export default HomePage;