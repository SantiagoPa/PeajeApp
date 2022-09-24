import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link as RouterLink } from "react-router-dom";

export const CustomList = () => {
  return (
    <List>
      <ListItem>
        <Link component={RouterLink} to="/" color="inherit" underline="none">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography component="span">Inicio</Typography>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link
          component={RouterLink}
          to="/categories"
          color="inherit"
          underline="none"
        >
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <Typography component="span">Categorias</Typography>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link
          component={RouterLink}
          to="/turns"
          color="inherit"
          underline="none"
        >
          <ListItemButton>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <Typography component="span">Turnos</Typography>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem>
        <Link
          component={RouterLink}
          to="/report"
          color="inherit"
          underline="none"
        >
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <Typography component="span">Reportes</Typography>
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
};
