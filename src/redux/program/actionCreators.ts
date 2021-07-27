import * as actionTypes from "./actionTypes"

export function fetchProgram(program: DropdownSelection): ProgramAction {
  return {
    type: actionTypes.FETCH_PROGRAM,
    payload: program
  }
}