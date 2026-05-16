import React from 'react'
import { Propiedades } from './Propiedades'
import { Box, Button, Typography } from '@mui/material'
import { sectionStyles } from '../../layout/LayoutSection'
import PropiedadesCard from './PropiedadesCard'

export default function PropiedadesComponent() {
  return (
    <Box sx={
      {
        backgroundColor: "red",
        width: "100%",
        height: "100vh",
        paddingTop: "10px",
      }
    }>

      <Box sx={{
        ...sectionStyles,
        backgroundColor: "white",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Typography data-aos="fade-right"
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem", lg: "2rem" },
            fontFamily: "'Cinzel Decorative', serif",
            fontWeight: 700,
            lineHeight: 1,
          }}>
          Portafolio de propiedades
        </Typography>

        <Button variant="outlined" data-aos="fade-left"
          sx={{
            border: "1px solid rgba(38,82,143,1)",
            backgroundColor: "transparent",
            borderRadius: "30px",
            padding: "10px",
            width: "120px",
            height: "40px",
            fontFamily: "serif",
            fontSize: { xs: "0.8rem", md: "1rem" },
            fontWeight: 400,
            color: "black",
            "&:hover": {
              background: "var(--backgroundColorButtonImportant)",
              color: "white",
              scale: "1.05",
              border: "none"
            },

          }}>
          ver todos
        </Button>
      </Box>

      <Box
        sx={{
          ...sectionStyles,
          mt: "20px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",         
            sm: "1fr 1fr",      
            md: "1fr 1fr 1fr", 
          },
          gap: { xs: "10px", sm: "15px", md: "1px", lg: "150px" },
          border: "1px solid black",
          backgroundColor: "green",
        }}
      >
        {Propiedades.map((propiedad, index) => (
          <PropiedadesCard key={index} propiedad={propiedad} />
        ))}
      </Box>





    </Box>
  )
}
