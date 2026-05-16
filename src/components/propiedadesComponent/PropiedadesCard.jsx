import React from 'react'
import { Card, CardMedia, Box, CardContent } from '@mui/material'
import { Margin } from '@mui/icons-material'

export default function PropiedadesCard({ propiedad }) {
  return (
    <>
      <Card
        sx={{
          Width: "100px",
          backgroundColor:"yellow",

          // ocupa todo el ancho disponible
          height: "516px",
          // 🔥 evita altura rígida
          border: "2px solid rgba(38,82,143,1)",
          // centra en mobile
          display: "flex",
          flexDirection: "center",
          
        
         
          borderRadius: "15px",
          boxShadow: "4px 4px 8px   rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          sx={{
            width: "100%",           // 🔥 ocupa el espacio disponible
            maxWidth: "347px",       // 🔥 limita en desktop
            px: { xs: 2, sm: 0 },    // 🔥 padding lateral en mobile
            mx: "auto",   
            pt:2, 
            backgroundColor:"blue",
                   // centra
          }}
        >
          <CardMedia
            component="img"
            image={propiedad.image}
            alt={propiedad.title}
            sx={{
              width: "100%",         // ✔ corregido
              height: "260px",
              objectFit: "cover",
              borderRadius: "15px",
              
            }}
          />
          <CardContent>
          {/* Aquí puedes agregar el contenido de la tarjeta, como título, descripción, etc. */}
          sgfdgffgdfg
       </CardContent>
        </Box>
       






      </Card>


    </>

  )
}
