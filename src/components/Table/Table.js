import React from "react";
import {
  Paper,
  TableContainer,
  Table as TableUi,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
} from "@material-ui/core";
import useStyles, { StyledTableCell, StyledTableRow } from "./style";
import { Delete, Edit } from "@material-ui/icons";

const Table = ({ color, tableRows, data }) => {
  const classes = useStyles({ color });

  const handleEdit = (id) => {
    console.log("Edit", id);
  };

  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  return (
    <TableContainer component={Paper}>
      <TableUi className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableRows.map((row, index) => {
              return row === "Actions" ? (
                <StyledTableCell align="right" key={index}>
                  {row}
                </StyledTableCell>
              ) : (
                <StyledTableCell key={index}>{row}</StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton onClick={() => handleEdit(row.id)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)}>
                  <Delete />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableUi>
    </TableContainer>
  );
};

export default Table;
