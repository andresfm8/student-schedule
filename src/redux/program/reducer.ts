import * as actionTypes from "./actionTypes"

const initialState: ProgramState = {
  programs: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const reducer = (
  state: ProgramState = initialState,
  action: ProgramAction
): ProgramState => {
  switch (action.type) {
    case actionTypes.FETCH_PROGRAM:
      const newArticle: IProgram = {
        id: Math.random(), // not really unique
        title: action.article.title,
        body: action.article.body,
      }
      return {
        ...state,
        programs: state.programs.concat(newArticle),
      }
  }
  return state
}

export default reducer