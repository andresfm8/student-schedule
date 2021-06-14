import * as actionTypes from "./actionTypes"

export function fetchProgram(programId: number) {
  const action: ProgramAction = {
    type: actionTypes.FETCH_PROGRAM,
    payload: programId
  }
}