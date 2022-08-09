import React, { useState, useEffect, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
import { UserContext } from "../../Contexts/UserContext";
import Loader from "../Loader/Loader";

export default function AlignItemsList() {
  const { userlist, loader } = useContext(UserContext);
  return (
    <>
      {loader && userlist ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {userlist.map((el) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={el.picture.thumbnail} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={el.name.first}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {el.cell}
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </div>
      )}
    </>
  );
}
