import { Typography, Paper } from "@mui/material";
import React from "react";
export default function Row(props) {
  return (
    <Paper style={{ height: "60px" }} square={true}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          height: "100%",
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        {/* <img style={{ maxHeight: "40px" }} src={farmers} alt="Logo" /> */}
        <Typography
          color="inherit"
          variant="h4"
          style={{ padding: "0px 12px 0px 6px" }}
        >
          {props.team}
        </Typography>
        <div
          style={{
            backgroundColor: "#212121",
            color: "white",
            height: "100%",
            width: "60px",
            // borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "end",
            // boxShadow: "inset 1px 1px 3px 2px rgba(0,0,0,0.75)",
          }}
        >
          <Typography color="inherit" variant="h4">
            {props.score}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
