import React from "react";
import { Link } from 'react-router-dom';

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    minWidth: 400
  }
});

export default function CustomizedTables(props: any) {
  const classes = useStyles();
  const rows: Array<object> = props.rows;
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows).map((row: any) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <Link to={`application/${row._id}`} style={{ width: '100%' }}>
                  {row._id}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Link to={`application/${row._id}`} style={{ width: '100%' }}>
                  {row.name}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
