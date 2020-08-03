import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, Typography, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from "@material-ui/core";

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
      <StyledTableCell style={{ minWidth: '50%' }} align="center">{value.name}</StyledTableCell>
      <StyledTableCell align="center">{value.mark}</StyledTableCell>
      <StyledTableCell align="right" style={{ color: (value.mark >= 50 ? 'green' : 'red') }}>
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
      <Typography variant='h2' component='h1' align='center'>Results</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell style={{ minWidth: '50%' }} align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Mark&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Result&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Data.map(TabRow)}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
