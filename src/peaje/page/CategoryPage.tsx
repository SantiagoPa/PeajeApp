import { useAppSelector } from "../../hooks/useActions";
import { PeajeLayaout } from "../layout/PeajeLayaout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

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


export const CategoryPage = () => {
  const { categories } = useAppSelector((state) => state.category);
  return (
    <PeajeLayaout>
      <Typography variant="h4"> Categorias </Typography>

      <Box sx={{ mt: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tipo de Categoria</StyledTableCell>
                <StyledTableCell align="center">Valor</StyledTableCell>
                <StyledTableCell align="center">
                  Tipo de Vehiculos
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row, idx) => (
                <StyledTableRow key={`__${row.label}__${idx}`}>
                  <StyledTableCell component="th" scope="row">
                    {row.label}
                  </StyledTableCell>
                  <StyledTableCell align="center">${row.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid container justifyContent="center" gap={2}>
                      {row.vehicles.map((v, idx) => (
                        <Grid key={`__${v}__${idx}`} item sx={{
                          backgroundColor: 'secondary.main',
                          color: '#fff',
                          p: 1,
                          borderRadius: 1
                        }}>{ v }</Grid>
                      ))}
                    </Grid>
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
