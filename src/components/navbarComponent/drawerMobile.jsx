import React from "react";
import { menuItems } from "./menuItem";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function DrawerMobile({ open, onClose }) {
  return (
    <>
      <Drawer
        anchor="top"
        maxHeight="150px"
        open={open}
        onClose={onClose}
       
        sx={{
          "& .MuiDrawer-paper": {
            paddingTop: "10px",
            width: "250px",
            backgroundColor: "var(--backgroundColorNavBar)",
            color: "#fff",
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            color: "black",
          }}
        >
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              to={item.path}
              onClick={onClose}
              data-aos="fade-down"
              sx={{
                mt: 1,
                mb: 2,
                borderRadius: "10px",
                transition: "transform 0.3s ease",

                ...(item.special
                  ? {
                      background: "var(--backgroundColorButtonImportant)",
                      color: "#fff",
                      justifyContent: "center",
                      borderRadius: "50px",

                      "&:hover": {
                        background: "linear-gradient(45deg, #1565c0, #1e88e5)",
                        scale: "1.05",
                        transition: "transform 0.3s ease",
                      },
                    }
                  : {
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.05)",
                        scale: "1.01",
                      },
                    }),
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.special ? "#fff" : "var(--colorIconNavBar)",
                }}
              >
                {<item.icon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
