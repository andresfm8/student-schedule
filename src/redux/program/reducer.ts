import * as actionTypes from "./actionTypes"

const initialState: ProgramState = {
  programs: [
    {
      id: 1,
      name: "post 1",
      years: [{ year: 1 }, { year: 2 }]
    },
    {
      id: 2,
      name: "post 2",
      years: [{ year: 1 }, { year: 2 }]
    },
  ],
}

const reducer = (
  state: ProgramState = initialState,
  action: ProgramAction
): ProgramState => {
  switch (action.type) {
    case actionTypes.FETCH_PROGRAM:
      const newProgram: IProgram = {
        id: Math.random(), // not really unique -> very unlikely but would need to check if it exists
        name: action.payload.name,
        years: action.payload.years,
      }
      return {
        ...state,
        programs: state.programs.concat(newProgram),
      }
  }
  return state
}

export default reducer