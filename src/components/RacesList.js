import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const styles = {};

function RacesList(props) {
  const { racesList } = props;

  return (
    <div>
      <Table aria-label="Races table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Result</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {racesList.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <a
                  href={"https://fellrunner.org.uk/races.php?id=" + row.id}
                  target="blank"
                >
                  {row.name}
                </a>
              </TableCell>
              <TableCell align="left">
                <a
                  href={
                    "https://fellrunner.org.uk/results-search.php?q=" + row.name
                  }
                  target="blank"
                >
                  results
                </a>
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(React.memo(RacesList));
