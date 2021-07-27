import * as actionTypes from "./actionTypes"
import PROGRAMS_DATA from "./programs.data"

const initialState: ProgramState = {
  programs: PROGRAMS_DATA, //Initialize with json file with all data
  selectedProgram: {
    id: NaN,
    name: "",
    startingTerm: [],
    noOfYears: NaN,
    years: []
  },
  dropdownSelection: {
    name: "",
    startingTerm: "",
    year: ""
  }

}

const reducer = (
  state: ProgramState = initialState,
  action: ProgramAction
): ProgramState => {
  switch (action.type) {
    case actionTypes.FETCH_PROGRAM:
      const dropdownSelection: DropdownSelection = {
        name: action.payload.name,
        startingTerm: action.payload.startingTerm,
        year: action.payload.year,
      };
      return {
        ...state,
        dropdownSelection: dropdownSelection
      };
  }
  return state;
}

export default reducer