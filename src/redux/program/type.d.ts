type Term = {
  id: number;
  name: string;
  time: string;
  courses: number;
  coop: boolean;
}

type Year = {
  id: number;
  name: string;
  time: string;
  terms: Term[];
}
type IProgram = {
  id: number
  name: string,
  startingTerm: string[],
  noOfYears: number,
  years: Year[]
}

type ProgramState = {
  programs: IProgram[],
  selectedProgram: IProgram,
  dropdownSelection: DropdownSelection
}

type DropdownSelection = {
  name: string,
  startingTerm: string,
  year: string //Not sure whether number or string is better -> potentially only allow -3 and 4+ years from curr year
}

type ProgramAction = {
  type: string
  payload: TPayload
}

type DispatchType = (args: ProgramAction) => ProgramAction