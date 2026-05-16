import React from 'react'
import { useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { Images } from "./Images"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function HeroComponent() {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nexImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === Images.length - 1 ? 0 : prevImage + 1
    );
  }

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? Images.length - 1 : prevImage - 1
    );
  }


  const buttonStyle = {
    backgroundColor: "rgba(185, 192, 200, 0.7)",

    width: { xs: "45px", md: "60px" },
    height: { xs: "45px", md: "60px" },

    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      transform: "scale(1.1)", // 🔥 opcional
    },
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nexImage();
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <Box sx={{
        backgroundImage: `url(${Images[currentImage]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        boxShadow: "3px 20px 25px  21px rgba(0, 0, 0, 0.25)",
        borderRadius: "19px",
        transition: "background-image 0.5s ease-in-out",



      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",


        }}>
          <Button onClick={prevImage}
            sx={{

              ...buttonStyle,
              marginLeft: { xs: "15px", md: "50px" },
              paddingLeft: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
            <ArrowBackIosIcon color='primary' sx={{
              fontSize: { xs: "20px", md: "30px" }
            }} />
          </Button>


          <Button onClick={nexImage}
            sx={{
              ...buttonStyle,
              marginRight: { xs: "15px", md: "50px" },


              display: "flex",
              justifyContent: "center",
            }}>

            <ArrowForwardIosIcon color='primary' sx={{
              fontSize: { xs: "20px", md: "30px" }
            }} />


          </Button>

        </Box>



      </Box>

    </>
  )
}
