import React, { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserContext } from "../../Contexts/UserContext";
import Loader from "../Loader/Loader";
import axios from "axios";
import { Link, Redirect, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(2);
  const [tempItem, setTempItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initial = async () => {
      await axios
        .get(`https://randomuser.me/api/?page=1&results=10&seed=abc`)
        .then((res) => setItems(res.data.results));
    };
    console.log("useEffect");
    initial();
  }, [user]);

  const fetchRes = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
    );
    const data = await res.json();
    return data;
  };
  const fetchData = async () => {
    const commentsFormServer = await fetchRes();
    console.log(commentsFormServer);
    const data = await commentsFormServer.results;
    setItems([...items, ...data]);
    page === 5 ? setPage(1) : setPage(page + 1);
  };

  return (
    <div>
      {!user ? (
        <div
          style={{
            marginTop: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>
            You are not logged in !{" "}
            <Link style={{ color: "#3f51b5" }} to="/auth">
              Login
            </Link>
          </h1>
        </div>
      ) : (
        <div className="container">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <InfiniteScroll
              dataLength={items.length}
              next={fetchData}
              hasMore={true}
              loader={<Loader />}
            >
              {items &&
                items.map((el) => (
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
                ))}
            </InfiniteScroll>
          </List>
        </div>
      )}
    </div>
  );
};

export default Home;
