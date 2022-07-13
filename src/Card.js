import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  //   maxWidth: 400, 限制最大寬度
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap(props) {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, width: "1000px" }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
          width: "50%",
        }}
      >
        <Grid container wrap="nowrap" spacing={10}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap align="center">
              {props.title}
            </Typography>
            <Typography noWrap align="right">
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
