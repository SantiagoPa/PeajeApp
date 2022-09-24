import { MenuOutlined } from "@mui/icons-material";
import FitbitIcon from '@mui/icons-material/Fitbit';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useActions";
import { toogleSidebar } from "../../store/slices/ui";

export const NavBar = ({ drawerWidth }: { drawerWidth: number }) => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toogleSidebar());
  };


  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={handleClick}
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between'alignItems='center' >
            <Typography noWrap component='div'>Peajes App</Typography>
            <Typography noWrap component='span' sx={{ fontWeight: 800 }}>Santiago Padilla - Universiada de Cordoba</Typography>

            <IconButton color='info' onClick={()=>navigate('/')}>
                <FitbitIcon />
            </IconButton>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};
