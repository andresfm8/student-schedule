import * as actionTypes from "./actionTypes"
import PROGRAMS_DATA from "./programs.data"

const initialState: ProgramState = {
  programs: PROGRAMS_DATA,
  selectedProgram: { //To display data
    id: NaN,
    name: "",
    startingTerm: [],
    noOfYears: NaN,
    years: []
  },
  dropdownSelection: { //To set Data
    name: "",
    startingTerm: "",
    year: ""
  }

}

const programReducer = (
  state: ProgramState = initialState,
  action: ProgramAction
): ProgramState => {
  switch (action.type) {
    case actionTypes.SET_PROGRAM:
      return {
        ...state,
        selectedProgram: state.programs.find(
          (program: IProgram) => (
            program.name === action.payload
          )
        ) || state.selectedProgram
      };
    // Will need a helper file for this function. Should get the current program and return it in a way that the schedule matches the start time.
    // Might need to reevaluate the data structure (instead of years just count semesters)
    case actionTypes.SET_STARTING_TERM:
      return {
        ...state,
        selectedProgram: state.programs.find(
          (program: IProgram) => (
            program.name === action.payload
          )
        ) || state.selectedProgram
      }
    default:
      return state;
  }
}

export default programReducer;