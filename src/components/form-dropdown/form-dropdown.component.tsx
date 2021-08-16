import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ChangeEvent, useState } from 'react';
import useStyles from './form-dropdown.styles';

type DropdownProps = {
  label: string,
  selectionOptions: string[]
}

const FormDropdown = ({ label, selectionOptions }: DropdownProps) => {
  //Set up redux here so when we select something it sets the value and when we click done it pulls it 
  const classes = useStyles();

  const [selection, setSelection] = useState<string>("");

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    setSelection(e.target.value as string);
  };

  //Set state and dispatch to map of  selections?

  return (
    <FormControl className={classes.formControl} >
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={`${label}-id`}
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

export default FormDropdown;