import { PeajeLayaout } from "../layout/PeajeLayaout";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { setOpenModalPeaje } from "../../store/slices/ui";
import { ModalCreateRegister } from "../components/ModalCreateRegister";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#262254",
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


export const PeajePage = () => {
  const dispatch = useAppDispatch();
  const { peajes } = useAppSelector((state) => state.peajes);

  const handleOpen = () => dispatch(setOpenModalPeaje());

  return (
    <PeajeLayaout>
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Inicio</Typography>
        <Button onClick={handleOpen} variant="outlined">
          Registrar Vehiculo
        </Button>
      </Grid>

      <Box sx={{ mt: 3 }} >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Tipo de Categoria
                </StyledTableCell>
                <StyledTableCell align="center">
                  Tipo de Vehiculo
                </StyledTableCell>
                <StyledTableCell align="center">Valor</StyledTableCell>
                <StyledTableCell align="center">Turno</StyledTableCell>
                {/* <StyledTableCell align="center">Placa</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {peajes.map((row) => (
                <StyledTableRow key={`__${row.id}__`}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.labelCategory}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.typeVehicle}
                  </StyledTableCell>
                  <StyledTableCell align="center">${row.price}</StyledTableCell>
                  <StyledTableCell align="center">{row.turno}</StyledTableCell>
                  {/* <StyledTableCell align="center">{row.placa}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <ModalCreateRegister />
    </PeajeLayaout>
  );
};
