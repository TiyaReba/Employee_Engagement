import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar  position="static" style={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
            <Typography align='left' variant="h4"  sx={{ flexGrow: 1 }}>
          StudentApp
          </Typography>
                <Button  color='success'>
                  <Link to = '/'style={{color:'white',textDecoration:'none',fontSize:'25px'}}>View</Link>
                  </Button>
                <Button  color='success'>
                  <Link to ='/add' style={{color:'white',textDecoration:'none',fontSize:'25px'}}>AddStudent</Link>
                  </Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar