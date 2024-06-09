import "./App.css";
import {
  Typography,
  Grid,
  Paper,
  Container,
  TextField,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import Row from "./components/Row";
import { useState } from "react";
function App() {
  const [scoreHome, setScoreHome] = useState("0");
  const [scoreAway, setScoreAway] = useState("0");
  const [quarter, setQuarter] = useState("");
  const [showTeamMenu, setShowTeamMenu] = useState(false);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const handleHome = (event) => {
    setScoreHome(event.target.value);
  };

  const handleAway = (event) => {
    setScoreAway(event.target.value);
  };
  const handleQuarter = (event) => {
    setQuarter(event.target.value);
  };
  const handleAwayTeam = (event) => {
    setAwayTeam(event.target.value);
  };
  const handleHomeTeam = (event) => {
    setHomeTeam(event.target.value);
  };
  return (
    <Container className="App" style={{ height: "800px" }}>
      <Grid
        style={{ height: "100%" }}
        container
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid
          item
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row team={homeTeam} score={scoreHome}></Row>
          <Row team={awayTeam} score={scoreAway}></Row>
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
          {/* <Paper
            square={true}
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingRight: "8px",
            }}
          >
            <Typography
              variant="h5"
              style={{ marginLeft: "10px" }}
              display="inline"
              align="center"
            >
              OTTELUN TARJOAA:
            </Typography>
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
          </Paper> */}
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
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-name"
                variant="outlined"
                label="Pisteet Koti"
                onBlur={handleHome}
              ></TextField>

              <TextField
                variant="outlined"
                label="Pisteet vieras"
                onBlur={handleAway}
              ></TextField>

              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="neljännes"
                value={quarter}
                onChange={handleQuarter}
              >
                <MenuItem value={"1ST"}>1</MenuItem>
                <MenuItem value={"2ND"}>2</MenuItem>
                <MenuItem value={"3RD"}>3</MenuItem>
                <MenuItem value={"4TH"}>4</MenuItem>
              </Select>

              {showTeamMenu ? (
                <Stack direction="row">
                  <TextField
                    variant="outlined"
                    label="Kotijoukkue"
                    onBlur={handleHomeTeam}
                  ></TextField>

                  <TextField
                    variant="outlined"
                    label="Vierasjoukkue"
                    onBlur={handleAwayTeam}
                  ></TextField>

                  <Button
                    variant="contained"
                    onClick={() => setShowTeamMenu(false)}
                  >
                    Valmis
                  </Button>
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => setShowTeamMenu(true)}
                >
                  Vaihda joukkueet
                </Button>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
