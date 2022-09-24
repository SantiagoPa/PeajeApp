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
import _ from "lodash";
import { useEffect, useState } from "react";

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

interface IResult {
  category: string;
  recaudo: number;
  cant: number;
}

export const ReportPage = () => {
  const { peajes } = useAppSelector((state) => state.peajes);
  const [report, setReport] = useState<IResult[]>([]);
  const [report2, setReport2] = useState<IResult[]>([]);
 
  useEffect(() => {
    if (peajes.length) {
      const group = _.groupBy(peajes, "labelCategory");
      let result: any = [];
      for(const key in group){
        result.push({
            category: key,
            recaudo: group[key].reduce((acc,el) => acc += el.price, 0),
            cant: group[key].length,
        });
      }
      
      result.push({
        category: 'Total',
        recaudo: result.reduce((acc:any,el:any)=> acc+= el.recaudo, 0),
        cant: result.reduce((acc:any,el:any)=> acc+= el.cant, 0),
      })

      console.log(result);
      setReport(prev=>prev=result)
    }
  }, [peajes]);

  useEffect(() => {
    if (peajes.length) {
      const group = _.groupBy(peajes, "turno");
      let result: any = [];
      console.log(group)
      for(const key in group){
        result.push({
            category: key,
            recaudo: group[key].reduce((acc,el) => acc += el.price, 0),
            cant: group[key].length,
        });
      }
      
      result.push({
        category: 'Total',
        recaudo: result.reduce((acc:any,el:any)=> acc+= el.recaudo, 0),
        cant: result.reduce((acc:any,el:any)=> acc+= el.cant, 0),
      })

      console.log(result);
      setReport2(prev=>prev=result)
    }
  }, [peajes]);

  return (
    <PeajeLayaout>
      <Typography variant="h4"> Reportes </Typography>
      <Box sx={{ mt: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tipo de Categoria</StyledTableCell>
                <StyledTableCell align="center">
                  Valor Recaudado
                </StyledTableCell>
                <StyledTableCell align="center">
                  Cantidad de vehiculos
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report.map((row, idx) => (
                <StyledTableRow key={`__${row.category}__${idx}`}>
                  <StyledTableCell component="th" scope="row">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">${row.recaudo}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid container justifyContent="center" gap={2}>
                      {row.cant}
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mt: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Turno</StyledTableCell>
                <StyledTableCell align="center">
                 Valor Recaudado
                </StyledTableCell>
                <StyledTableCell align="center">
                  Cantidad de Vehiculos
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report2.map((row, idx) => (
                <StyledTableRow key={`__${row.category}__${idx}`}>
                  <StyledTableCell component="th" scope="row">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">${row.recaudo}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid container justifyContent="center" gap={2}>
                      {row.cant}
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
