import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: "100%"
  }
});

function TabRow(value) {
  return (
    <StyledTableRow key={value.id}>
      <StyledTableCell component="th" scope="row">
        {value.id}
      </StyledTableCell>
      <StyledTableCell align="right">{value.name}</StyledTableCell>
      <StyledTableCell align="right">{value.mark}</StyledTableCell>
      <StyledTableCell align="right">
        {value.mark >= 50 ? "Pass" : "Fail"}
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default function InputTable(props) {
  const classes = useStyles();
  const [Data] = useState([
    {
      id: 1,
      name: "AAAA",
      mark: 95
    },
    {
      id: 2,
      name: "BBBB",
      mark: 25
    },
    {
      id: 3,
      name: "CCC",
      mark: 65
    }
  ]);

  return (
    <Container maxWidth="sm">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Mark&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Result&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Data.map(TabRow)}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
