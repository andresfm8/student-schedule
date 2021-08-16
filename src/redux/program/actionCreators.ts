import * as actionTypes from "./actionTypes"

export function fetchProgram(program: DropdownSelection): ProgramAction {
  return {
    type: actionTypes.SET_PROGRAM,
    payload: program
  }
}