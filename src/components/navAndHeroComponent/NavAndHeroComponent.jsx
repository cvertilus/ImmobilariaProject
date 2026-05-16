import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import NavBar from '../navbarComponent/navBar'
import HeroComponent from '../heroComponent/HeroComponent'
import { sectionStyles } from '../../layout/LayoutSection'

export default function NavAndHerComponent() {
    return (
        <>
            <Box sx={{
                position: "relative",
                width: "100%",
                height: "100Vh",

            }}>

                <Box sx={{
                    background: "linear-gradient(to bottom, #0a1f44 10%, #1e4fa3 60% )",
                    width: "100%",
                    minHeight: "55vh",
                    zIndex: "-1",
                    position: "absolute",

                }}>

                </Box>
              
                <Box sx={{
                    ...sectionStyles,
                    height: "60vh",
                    paddingTop: "100px",
                    zIndex: "2"

                }}>

                    <HeroComponent />
                </Box>

                <Box 
                  data-aos="zoom-in"
                    sx={{
                        display: "grid",
                        placeItems: "center", // 🔥 centra horizontal y vertical
                        textAlign: "center",
                        gap: 0.5, // espacio entre textos
                    }}
                >
                    <Typography
                    
                      
                        sx={{
                            pt: "50px",
                            fontWeight:400,
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                            lineHeight: 1,
                            
                           
                            

                        }}
                    >
                        Modern House
                    </Typography>

                    <Typography
                       
                       
                      
                        sx={{
                            pt: "10px",
                            fontWeight: {xs: 200, md: 400 },
                            fontFamily: "serif",
                            lineHeight: 1,
                            fontSize: { xs: "2rem", md: "2.5rem", lg: "2.5rem" },
                        }}
                    >
                        For Sale
                    </Typography>
                </Box>


            </Box >

        </>
    )
}
