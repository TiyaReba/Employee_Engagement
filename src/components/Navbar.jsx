import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <div>
        <AppBar  position="static" style={{ backgroundColor: '#673ab7' }}>
            <Toolbar>
            
            <Typography align='left' variant="h4"  sx={{ flexGrow: 1 }}>
            <Link to = '/' style={{color:'white',textDecoration:'none',fontSize:'25px'}}>
          Student 
    
          </Link>
          </Typography>
                <Button  color='success'>
                  <Link to ='/add' style={{color:'white',textDecoration:'none',fontSize:'25px'}}> Add</Link>
                  </Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar