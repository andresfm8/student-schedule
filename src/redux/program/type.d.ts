interface IProgram {
  id: number
  title: string
  body: string
}

type ProgramState = {
  programs: IProgram[]
}

type ProgramAction = {
  type: string
  article: IProgram
}

type DispatchType = (args: ProgramAction) => ProgramAction