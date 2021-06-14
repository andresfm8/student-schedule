import * as actionTypes from "./actionTypes"

export function addArticle(article: IProgram) {
  const action: ProgramAction = {
    type: actionTypes.FETCH_PROGRAM,
    article,
  }

  return action
}