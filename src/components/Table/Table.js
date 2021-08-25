import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../redux/actions/courses";
import { deleteLesson } from "../../redux/actions/lessons";
import { deleteAd } from "../../redux/actions/ads";
import { deleteStudent } from "../../redux/actions/students";
import {
  Paper,
  TableContainer,
  Table as TableUi,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import useStyles, { StyledTableCell, StyledTableRow } from "./style";
import { Delete, Edit, Visibility } from "@material-ui/icons";

const Table = ({ tableRows, data, openModalEdit, openModalDetail, type }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = (id) => {
    if (type === "courses") dispatch(deleteCourse(id));
    if (type === "lessons") dispatch(deleteLesson(id));
    if (type === "ads") dispatch(deleteAd(id));
    if (type === "students") dispatch(deleteStudent(id));
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
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <StyledTableRow key={row.id}>
                  {row.name && (
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                  )}
                  {row.course && (
                    <StyledTableCell component="th" scope="row">
                      {row.course.name}
                    </StyledTableCell>
                  )}
                  {row.description && (
                    <StyledTableCell component="th" scope="row">
                      {row.description}
                    </StyledTableCell>
                  )}
                  {row.lesson && (
                    <StyledTableCell component="th" scope="row">
                      {row.lesson.name}
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
                    {type !== "ads" ? (
                      <IconButton
                        className={classes.detail}
                        onClick={() => openModalDetail(row)}
                      >
                        <Visibility />
                      </IconButton>
                    ) : null}
                    <IconButton
                      className={classes.edit}
                      onClick={() => openModalEdit(row)}
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
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5]}
              count={data.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={5}
            />
          </TableRow>
        </TableFooter>
      </TableUi>
    </TableContainer>
  );
};

export default Table;
