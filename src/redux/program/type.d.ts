interface IProgram {
  id: number
  name: string
  years: any[] // Swap to array of years
}

type ProgramState = {
  programs: IProgram[]
}

type ProgramAction = {
  type: string
  payload: TPayload
}

// interface IActionCreator<P> {
//   type: string;
//   (payload: P): Action<P>;
// }


type DispatchType = (args: ProgramAction) => ProgramAction