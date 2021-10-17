import { createSelector } from 'reselect';

const selectPrograms = (state: any): ProgramState => state.programDirectory;

//EXAMPLE if needed arguments
// export const retrieveProgram = () =>
//   createSelector(
//     [selectProgram],
//     (selectedProgram: IProgram) => selectedProgram
//   );

export const retrieveProgram = createSelector(
  [selectPrograms],
  programDirectory => programDirectory.selectedProgram
);

export const retrievePrograms = createSelector(
  [selectPrograms],
  programDirectory => programDirectory.programs
)