import * as actionTypes from "./actionTypes"

export function setProgram(programName: string): ProgramAction {
  return {
    type: actionTypes.SET_PROGRAM,
    payload: programName
  }
}

export function setStartingTerm(term: string): ProgramAction {
  return {
    type: actionTypes.SET_STARTING_TERM,
    payload: term
  }
}