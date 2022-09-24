import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

import { PeajeLayaout } from "../layout/PeajeLayaout";
import { useAppSelector } from "../../hooks/useActions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#262254',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



export const TurnsPage = () => {

  const { turns } = useAppSelector(state=>state.turns);
  console.log(turns);

  return (
    <PeajeLayaout>
      <Typography variant="h4"> Turnos </Typography>
      <Box component="div" sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Turno</StyledTableCell>
                <StyledTableCell align="center">Horario</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {turns.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.turn}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.hours}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PeajeLayaout>
  );
};
