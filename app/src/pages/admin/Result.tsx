import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  InputBase, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container,
} from "@material-ui/core";

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

export default function InputTable(props: any) {
  const classes = useStyles();
  const [Data, setData] = useState([
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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData(old => {
      let temp = old;
      temp[name].mark = value;
      return temp;
    });
  };

  function TabRow(value: any, ind: number) {
    return (
      <StyledTableRow key={value.id}>
        <StyledTableCell component="th" scope="row">
          {value.id}
        </StyledTableCell>
        <StyledTableCell align="center">{value.name}</StyledTableCell>
        <StyledTableCell align="right">
          <InputBase
            style={{ width: "2rem" }}
            name={ind + ""}
            defaultValue={value.mark}
            onChange={handleChange}
            inputProps={{ "aria-label": "naked" }}
          />
        </StyledTableCell>
      </StyledTableRow>
    );
  }

  return (
    <Container maxWidth="sm" style={{ margin: '2rem auto' }}>
      <Typography variant='h2' component='h1' align='center'>Results</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="right">Mark&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Data.map(TabRow)}</TableBody>
        </Table>
      </TableContainer>
      <Button
        style={{ margin: "3rem 0" }}
        variant="contained"
        color="primary"
        onClick={() => console.log(Data)}>
        Update
      </Button>
      <Button
        style={{ margin: "3rem 1rem" }}
        variant="outlined"
        color="secondary"
        onClick={() => console.log(Data)}>
        Delete current results
      </Button>
    </Container>
  );
}
