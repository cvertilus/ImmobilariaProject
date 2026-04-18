//mui icons
import InfoIcon from "@mui/icons-material/Info";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export  const menuItems = [
  { text: "About", icon: InfoIcon , path: "/about" },
  { text: "Service", icon: OtherHousesIcon , path: "/service" },
  { text: "Our Partners", icon: Diversity3Icon , path: "/partners" },
  { text: "Contact", icon: ContactPageIcon, path: "/contact" , special : true },
];