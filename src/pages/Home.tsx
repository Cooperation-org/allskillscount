import React from 'react'
// { useState, useEffect } NO

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container
  // Fab
} from '@mui/material'

/**
 * Home component
 * Fully responsive (mobile‑first) using only MUI <Box> for layout (no CSS grid).
 * Fonts, colours, and imagery match the original static HTML/CSS but adapt at
 * every breakpoint to eliminate fixed widths / heights.
 */
const Home: React.FC = () => {
  // const [showScrollTop, setShowScrollTop] = useState(false)

  // useEffect(() => {
  //   const onScroll = () => setShowScrollTop(window.scrollY > 400)
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' }) NO

  return (
    <Box component='main' sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        sx={{
          background: '#FFF',
          py: { xs: 4, md: 6 },
          px: { xs: 1, md: 2 }
        }}
      >
        <Container maxWidth='xl'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 6, md: 10 }
            }}
          >
            <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 632 } }}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                  lineHeight: 1.15,
                  color: '#000',
                  mb: 3
                }}
              >
                T3 Innovation Network Projects
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: '#000',
                  mb: 5
                }}
              >
                {/* The T3 Innovation Network is investigating emerging technologies and
                standards (W3C&nbsp;WCAG&nbsp;VCDM&nbsp;v2, 1EdTech&nbsp;OB&nbsp;v3,
                HR&nbsp;Open Standards&nbsp;LER‑RS&nbsp;v2) in the talent marketplace to
                establish more equitable and effective learning and career pathways. */}
                The T3 Innovation Network is investigating emerging technologies and
                standards (W3C VCDMv2, 1Edtech OBv3, HR Open Standards LER-RSv2) in the
                talent marketplace to establish more equitable and effective learning and
                career pathways. This collection includes applications that encompass a
                web-based tool for self-authoring skill credentials and companion
                recommendation credentials supporting them, a resume authoring using
                Learning Experience Records (LERs), data schema standards crosswalks,
                AI-enhanced job position authoring, and standardized employment records
                exchange between employers and government agencies. These applications
                span from Proof of Concepts to near-production-ready tools. Some are fully
                open-source, with Apache2-licensed code, while others incorporate
                open-source components within licensed code.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  {
                    href: 'https://linkedcreds.allskillscount.org/',
                    label: 'LinkedCreds'
                  },
                  {
                    href: 'https://resume.allskillscount.org/',
                    label: 'Resume Author'
                  }
                ].map(({ href, label }) => (
                  <Button
                    key={label}
                    component='a'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    endIcon={<span style={{ fontSize: 20 }}>&gt;&gt;</span>}
                    sx={{
                      p: 0,
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: '#4C3AE3',
                      fontWeight: 700,
                      fontSize: { xs: '1.05rem', sm: '1.1rem' },
                      '&:hover': {
                        textDecoration: 'underline',
                        background: 'transparent'
                      }
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                width: { xs: '100%', md: '48%' },
                maxWidth: 874,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                aspectRatio: { xs: '16/10', sm: '16/9', md: '874/605' } as any,
                backgroundImage: 'url(/images/all_skills_count_main_image.svg)',
                backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                borderRadius: 2
              }}
            />
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: '#F8F9FA', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth='md'>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              textAlign: 'center',
              mb: 6,
              color: '#1A1A1A'
            }}
          >
            About T3 Innovation Network
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.2rem' },
              lineHeight: 1.8,
              color: '#666',
              textAlign: 'center',
              maxWidth: 780,
              mx: 'auto'
            }}
          >
            The T3 Innovation Network is a national coalition of stakeholders dedicated to
            transforming how individuals and organizations access, share, and use data to
            unlock opportunity. Led by the U.S. Chamber of Commerce Foundation, T3 is
            building an open, trusted digital infrastructure for education and workforce
            data—empowering learners, workers, and employers with interoperable solutions
            for skills‑based hiring, learning pathways, and verifiable credentials.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ background: '#FFF', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth='lg'>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              textAlign: 'center',
              mb: 8,
              color: '#1A1A1A'
            }}
          >
            Our Projects
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 }
            }}
          >
            {[
              {
                title: 'LinkedCreds',
                desc: 'LinkedCreds is a web‑based tool for self‑authoring, issuing, and managing verifiable credentials and companion recommendations, to enhance trust and transparency in the talent marketplace.',
                img: '/images/opencreds.png',
                url: 'https://linkedcreds.allskillscount.org/'
              },
              {
                title: 'Resume Author',
                desc: 'Resume Author is a web‑based tool to create and manage verifiable resumes, empowering individuals to showcase their skills and experiences securely. With Resume Author, you can leverage Learning Experience Records (LERs), data schema standards crosswalks, AI‑enhanced job position authoring, and standardized employment records exchange between employers and government agencies.',
                img: '/images/reusmeauthor.png',
                url: 'https://resume.allskillscount.org/'
              }
            ].map(({ title, desc, img, url }) => (
              <Card
                key={title}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardMedia
                  component='img'
                  height='240'
                  image={img}
                  alt={`${title} preview`}
                />

                <CardContent
                  sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <Typography
                    sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1A1A1A' }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      color: '#666',
                      fontSize: { xs: '0.95rem', md: '1rem' }
                    }}
                  >
                    {desc}
                  </Typography>
                  <Button
                    variant='contained'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#4C3AE3',
                      '&:hover': {
                        backgroundColor: '#3929B4',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(76,58,227,0.3)'
                      },
                      mt: 1
                    }}
                  >
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: '#F1F1FB', py: 4, px: 2 }}>
        <Container maxWidth='md'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2, md: 4 },
              textAlign: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                pr: { xs: 0, md: 3 },
                borderRight: { md: '1px solid #3A35A2' }
              }}
            >
              <Box
                component='img'
                src='/images/ccheart_black.svg'
                alt='CC license'
                sx={{ width: 44, height: 35.75 }}
              />
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#47516B',
                  whiteSpace: { xs: 'normal', md: 'nowrap' }
                }}
              >
                Copyright, Creative Commons License&nbsp;BY&nbsp;4.0
              </Typography>
            </Box>

            <Button
              component='a'
              href='/privacy'
              sx={{
                px: { md: 3 },
                fontFamily: 'Nunito Sans',
                fontSize: 16,
                fontWeight: 500,
                color: '#2563EB',
                textTransform: 'none',
                textDecoration: 'underline',
                whiteSpace: { xs: 'normal', md: 'nowrap' },
                '&:hover': { background: 'transparent' }
              }}
            >
              Privacy Policy
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                py: { xs: 0, md: '4px' },
                pl: { xs: 0, md: 3 },
                borderLeft: { md: '1px solid #3A35A2' },
                whiteSpace: { xs: 'normal', md: 'nowrap' }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#47516B'
                }}
              >
                Contact&nbsp;Us:&nbsp;
                <Button
                  component='a'
                  href='mailto:support@allskillscount.org'
                  sx={{
                    p: 0,
                    minWidth: 0,
                    fontFamily: 'Nunito Sans',
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#2563EB',
                    textTransform: 'none',
                    textDecoration: 'underline',
                    '&:hover': { background: 'transparent' }
                  }}
                >
                  support@allskillscount.org
                </Button>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* {showScrollTop && (
        <Fab
          onClick={scrollToTop}
          aria-label='scroll back to top'
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            backgroundColor: '#4C3AE3',
            color: '#FFF',
            '&:hover': { backgroundColor: '#3929B4' }
          }}
        >
          ↑
        </Fab>
      // )} */}{' '}
    </Box>
  )
}

export default Home
