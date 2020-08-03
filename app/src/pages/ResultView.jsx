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
    <StyledTableRow key={value._id}>
      <StyledTableCell component="th" scope="row">
        {value._id}
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
  const [data, setData] = useState([{
    _id: '5f27bfc6155b49dcae11f220',
    name: 'Dravid Kumar B',
    mark: 78
  }, {
    _id: '5f27c24bea06786e4420ba3c',
    name: 'Pavithra Devi M',
    mark: 82
  }]);

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
          <TableBody>{data.map(TabRow)}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
