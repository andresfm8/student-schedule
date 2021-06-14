import { createSelector } from 'reselect';

const selectPrograms = (state: ProgramState): IProgram[] => state.programs;

export const retrieveQuery = createSelector<ProgramState, IProgram[], IProgram[]>(
  [selectPrograms],
  (programs: IProgram[]) => programs  
)