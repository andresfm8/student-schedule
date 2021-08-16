import { createSelector } from 'reselect';

const selectPrograms = (state: ProgramState): IProgram[] => state.programs;
const selectDropdownProgram = (state: ProgramState): DropdownSelection => state.dropdownSelection;

// export const fetchProgram = createSelector<ProgramState, IProgram[], IProgram[]>(
//   [selectPrograms],
//   (programs: IProgram[]) => programs
// )

export const selectProgram = (dropdownProgram: DropdownSelection) =>
  createSelector(
    [selectPrograms],
    (selectedPrograms: IProgram[]) =>
      selectedPrograms.find(
        (program: IProgram) => program.name == dropdownProgram.name
      )
  ); //Might remove dropdownProgram and add selectDropdownProgram