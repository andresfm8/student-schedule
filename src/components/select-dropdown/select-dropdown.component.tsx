import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ChangeEvent, useState } from 'react';
import useStyles from './select-dropdown.styles';

type DropdownProps = {
  label: string,
  selectionOptions: string[]
}

const SelectDropdown = ({ label, selectionOptions } : DropdownProps) => {
// TODO: Set up context api to send value of selection to calendar component
  const classes = useStyles();

  const [selection, setSelection] = useState<string>("");

  const handleChange = (e: ChangeEvent<{value: unknown}>) => {
    setSelection(e.target.value as string);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selection}
        onChange={handleChange}
      >
        {
          selectionOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>    
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SelectDropdown;