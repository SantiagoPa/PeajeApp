import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { CustomList } from "./";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { toogleSidebar } from "../../store/slices/ui";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const { isOpenSidebar } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toogleSidebar());
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="persistent"
        open={isOpenSidebar}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6" noWrap component="div">
              {" "}
              Sr. Operario{" "}
            </Typography>
            <IconButton
              onClick={handleClick}
              color="error"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Toolbar>

        <CustomList />
      </Drawer>
      <Divider />
    </Box>
  );
};
