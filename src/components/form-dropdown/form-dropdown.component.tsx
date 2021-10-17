import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import useStyles from './form-dropdown.styles';

type DropdownProps = {
  label: string,
  selectionOptions: string[],
  dispatchHandler: Function
}

const FormDropdown = ({ label, selectionOptions, dispatchHandler }: DropdownProps) => {

  const dispatch = useDispatch();

  const classes = useStyles();

  const [selection, setSelection] = useState<string>("");

  const handleChange = (e: SelectChangeEvent) => {
    setSelection(e.target.value as string);
    dispatch(dispatchHandler(e.target.value as string));
  };

  return (
    <FormControl sx={{ m: 3 }} className={classes.formControl}>
      <InputLabel id={label} className={classes.labelColor}>{label}</InputLabel>
      <Select
        labelId={label}
        id={`${label}-id`}
        value={selection}
        onChange={handleChange}
        className={classes.labelColor}
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