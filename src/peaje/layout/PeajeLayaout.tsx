import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { ChildrenProps } from "../interface";

const drawerWidth = 240;

export const PeajeLayaout = ({ children }: ChildrenProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>

      <Box component="footer">
        I am footer
      </Box>
    </Box>
  );
};
