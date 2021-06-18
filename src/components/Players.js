import { Slide } from "@material-ui/core";
import React from "react";

export default function Players(props) {
  return <Slide direction="up" in={props.checked}></Slide>;
}
