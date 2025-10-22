import React from 'react'
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material'
import Logo from './Logo'

const Navbar: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        background: '#FFF',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            {/* Logo */}
            <Box
              component='a'
              href='/'
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#1A1A1A',
                gap: 1,
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              <Logo />
              {/* <Typography
                variant='h6'
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.15,
                  color: '#000'
                }}
              >
                U.S. Chamber of Commerce Foundation
              </Typography> */}
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                onClick={() => handleScrollToSection('projects')}
                sx={{
                  color: '#1A1A1A',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#4C3AE3'
                  }
                }}
              >
                Projects
              </Button>
              <Button
                onClick={() => handleScrollToSection('about')}
                sx={{
                  color: '#1A1A1A',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#4C3AE3'
                  }
                }}
              >
                About
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
