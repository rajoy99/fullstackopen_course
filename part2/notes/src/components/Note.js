import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';


const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (


<ListItem>
<ListItemButton sx={{bgcolor:'#e0f2ff'}}>
  <ListItemIcon>
  </ListItemIcon>
  <ListItemText primary={note.content} />
  <Button variant="contained" color="success" onClick={toggleImportance} sx={{backgroundColor:'black'}}>
        Change Importance
  </Button>
</ListItemButton>
</ListItem>

  )
}

export default Note