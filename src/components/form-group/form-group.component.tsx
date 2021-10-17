import { useSelector } from "react-redux";
import { setProgram } from "../../redux/program/actionCreators";
import { retrieveProgram, retrievePrograms } from "../../redux/program/selector";
import FormDropdown from "../form-dropdown/form-dropdown.component";

const FormGroup = () => {
  const programs: IProgram[] = useSelector((state: ProgramState) => retrievePrograms(state))
  const program = useSelector((state: ProgramState) => retrieveProgram(state));

  // Create a type that stores a label and an array of options.
  return (
    <div>
      {programs ?
        <FormDropdown
          label="Program"
          selectionOptions={programs.map(item => (
            item.name
          ))}
          dispatchHandler={setProgram}
        /> : ""}

      {
        program.name ?
          <FormDropdown
            label="Program"
            selectionOptions={program.startingTerm.map(item => (
              item
            ))}
            dispatchHandler={setProgram}
          /> : ""
      }
    </div>

  )
}

export default FormGroup;