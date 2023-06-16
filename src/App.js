import "./App.css";
import {
  Typography,
  Grid,
  Paper,
  Container,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import Row from "./components/Row";
import { useState } from "react";
import panchologo from "./pancho.png";
import olutlogo from "./olut.png";
function App() {
  const [scoreHome, setScoreHome] = useState("0");
  const [scoreAway, setScoreAway] = useState("0");
  const [quarter, setQuarter] = useState("");
  const handleHome = (event) => {
    setScoreHome(event.target.value);
  };
  const handleAway = (event) => {
    setScoreAway(event.target.value);
  };
  const handleQuarter = (event) => {
    setQuarter(event.target.value);
  };
  return (
    <Container className="App" style={{ height: "800px" }}>
      <Grid
        style={{ height: "100%"}}
        container
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
          <Row team={"FARMERS"} score={scoreHome}></Row>
          <Row team={"GOATS"} score={scoreAway}></Row>
          <Paper square={true} style={{ height: "60px", width: "60px" }}>
            <div
              style={{
                // width: "70px",
                backgroundColor: "#545454",
                color: "white",
                height: "100%",
                width: "100%",
                // borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "end",
                // boxShadow: "inset 1px 1px 3px 2px rgba(0,0,0,0.75)",
              }}
            >
              <Typography variant="h5" color="inherit">
                {quarter}
              </Typography>
            </div>
          </Paper>
          <Paper
            square={true}
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingRight: "8px"
            }}
          >
            {/* <Typography
              variant="h5"
              style={{ marginLeft: "10px" }}
              display="inline"
              align="center"
            >
              OTTELUN TARJOAA:
            </Typography> */}
            <img
              alt="lt"
              style={{ height: "60px", marginLeft: "10px" }}
              src={olutlogo}
            ></img>
            <img
              alt="ranch"
              style={{ height: "50px", marginLeft: "10px" }}
              src={panchologo}
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            position="static"
            style={{
              marginBottom: "16px",
              // position: "absolute",
              // bottom: "0",
            }}
          >
            <Grid container spacing={4} style={{ margin: "16px" }}>
              <Grid item>
                <TextField
                  id="filled-name"
                  variant="outlined"
                  label="Pisteet Koti"
                  onBlur={handleHome}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Pisteet vieras"
                  onBlur={handleAway}
                ></TextField>
              </Grid>
              <Grid item>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quarter}
                  onChange={handleQuarter}
                >
                  <MenuItem value={"1ST"}>1</MenuItem>
                  <MenuItem value={"2ND"}>2</MenuItem>
                  <MenuItem value={"3RD"}>3</MenuItem>
                  <MenuItem value={"4TH"}>4</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
