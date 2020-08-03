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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(old => {
      let temp = old;
      temp[name].mark = value;
      return temp;
    });
  };

  function TabRow(value, ind) {
    return (
      <StyledTableRow key={value._id}>
        <StyledTableCell component="th" scope="row">
          {value._id}
        </StyledTableCell>
        <StyledTableCell align="center">{value.name}</StyledTableCell>
        <StyledTableCell align="right">
          <InputBase
            style={{ width: "2rem" }}
            name={ind + ""}
            defaultValue={value.mark}
            onChange={handleChange}
            type='number'
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
          <TableBody>{data.map(TabRow)}</TableBody>
        </Table>
      </TableContainer>
      <Button
        style={{ margin: "3rem 0" }}
        variant="contained"
        color="primary">
        Update
      </Button>
      <Button
        style={{ margin: "3rem 1rem" }}
        variant="outlined"
        color="secondary">
        Results
        Update
      </Button>
      <Button
        style={{ margin: "3rem 1rem" }}
        variant="outlined"
        color="secondary">
        Results
      </Button>
    </Container>
  );
}
