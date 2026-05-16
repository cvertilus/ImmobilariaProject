import React from "react";
import { menuItems } from "./menuItem";
import DrawerMobile from "./DrawerMobile";



//mui mobile
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import { AppBar, Toolbar, Container, Box } from "@mui/material";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "none",
        
          boxShadow: "none",
          left: { xs: "10px", md: "20px" },
          right: { xs: "10px", md: "20px" },
          top: scrolled ? "0px" : "20px",

        
          width: "auto"
        }}
      >

        <Toolbar
          sx={{
            background: scrolled? "var(--backgroundColorNavBar)":"rgba(141, 137, 137, 0.7)",
            borderRadius: "30px",
            height: "70px",
          }}
        >
          {isMobile ? (
            <>
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>

                <Typography variant="h5" sx={{
                  textAlign: "center",
                  fontWeight: { xs: "bold", md: "normal" },
                }} >
                  Logo Nombre del titular
                </Typography>

              </Box>

              <DrawerMobile open={open} onClose={() => setOpen(false)} />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  background: "blue",
                }}
              >
                Logo Nombre ddel titular
              </Box>
              <Box
                sx={{

                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {menuItems.map((item) => (
                  <Box
                    key={item.text}
                    to={item.path}
                    sx={{
                      ml: 3,
                      padding: "10px 15px",
                      borderRadius: "10px",
                      transition: "background-color 0.3s ease",

                      ...(item.special
                        ? {
                          background:
                            "var(--backgroundColorButtonImportant)",
                          color: "#fff",
                          justifyContent: "center",
                          borderRadius: "30px",
                          width: "70px",
                          textAlign: "center",
                          boxShadow: "-7px 0 5px rgba(0,0,0,05)",

                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #1565c0, #1e88e5)",
                            scale: "1.05",
                            transition: "transform 0.3s ease",
                            boxShadow: "7px 0 5px rgba(0,0,0,05)",
                          },
                        }
                        : {
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            scale: "1.01",
                          },
                        }),
                    }}
                  >
                    {item.text}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Toolbar>

      </AppBar>
    </>
  );
}
