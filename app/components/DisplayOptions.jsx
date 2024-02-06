import React from 'react'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const DisplayOptions = ({ value, onChange }) => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={1}>
      <IconButton onClick={(e) => onChange(e, "list")}>
        <ViewListIcon color={value === "list" ? "primary": "inherit"} />
      </IconButton>

      <IconButton onClick={(e) => onChange(e, "grid")}>
        <ViewModuleIcon color={value === "grid" ? "primary": "inherit"} />
      </IconButton>
    </Stack>
    // <ToggleButtonGroup value={value} onChange={onChange}>
    //     <ToggleButton value="list">
    //       <ViewListIcon />
    //     </ToggleButton>
    //     <ToggleButton value="grid">
    //       <ViewModuleIcon />
    //     </ToggleButton>
    // </ToggleButtonGroup>
  )
}

export default DisplayOptions