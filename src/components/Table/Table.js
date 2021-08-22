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
import { Delete, Edit, Visibility } from "@material-ui/icons";

const Table = ({ color, tableRows, data }) => {
  const classes = useStyles({ color });

  const handleDetail = (id) => {
    console.log("Detail", id);
  };

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
          {data.map((row) => {
            return (
              <StyledTableRow key={row.id}>
                {row.name && (
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                )}
                {row.course && (
                  <StyledTableCell component="th" scope="row">
                    {row.course}
                  </StyledTableCell>
                )}
                {row.description && (
                  <StyledTableCell component="th" scope="row">
                    {row.description}
                  </StyledTableCell>
                )}
                {row.lesson && (
                  <StyledTableCell component="th" scope="row">
                    {row.lesson}
                  </StyledTableCell>
                )}
                {row.lastName && (
                  <StyledTableCell component="th" scope="row">
                    {row.lastName}
                  </StyledTableCell>
                )}
                {row.age && (
                  <StyledTableCell component="th" scope="row">
                    {row.age}
                  </StyledTableCell>
                )}
                <StyledTableCell align="right">
                  <IconButton
                    className={classes.detail}
                    onClick={() => handleDetail(row.id)}
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton
                    className={classes.edit}
                    onClick={() => handleEdit(row.id)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    className={classes.delete}
                    onClick={() => handleDelete(row.id)}
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </TableUi>
    </TableContainer>
  );
};

export default Table;
