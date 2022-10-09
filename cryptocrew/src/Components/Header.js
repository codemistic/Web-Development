import { AppBar, Container, MenuItem, Toolbar, Typography, Select, createTheme, makeStyles } from '@mui/material'
import React from 'react'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}))

const Header = () => {

  const classes = useStyles()


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: "dark",
    },

  })


  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography className='flex text-yellow-500 font-mono font-header cursor-pointer'>
            Crypto Hunter
          </Typography>
          <Select variant='outlined' style={{ width: 100, height: 40, marginLeft: 15 }} >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header