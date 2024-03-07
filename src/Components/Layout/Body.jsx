import {
  Avatar,
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Hand1 from "../../assets/Hand1.png";
import BotChatBg from "../../assets/bot-chat-background.png";
import ChatTop from "../../assets/chat-top.png";
import ChatIcon from "../../assets/chatO.png";
import Book from "../../assets/book.png";
import ChatUser from "../../assets/image 75.png";
import { Link } from "react-router-dom";

const Body = () => {
  const handleSearch = () => {
    // Handle search functionality
    console.log("Search button clicked");
  };
  return (
    <Container
      sx={{
        // height: "100vh",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Box sx={{ maxHeight: "200px", width: "715px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#f37c41" }}>
          The evolutionary gateway for design productivity
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      >
        <Avatar alt="Logo" src={Hand1} sx={{ width: 40, height: 40 }} />
      </Box>
      <Box>
        <Typography>
          Let's chat with{" "}
          <Link to="/" style={{ color: "#f37c41", textDecoration: "none" }}>
            Doozoo
          </Link>
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
            paddingTop: "24px",
            paddingBottom: "24px",
            backgroundColor: "#f37c41",
          }}
        >
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              textWrap: "balance",
              alignSelf: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginRight: "50px" }}
            >
              CHAT WITH
              <br />
              INTELLIGENT
              <br />
              DOOZOO AI &
              <br />
              DISCOVER
              <br />
              THE FUTURE
              <br />
              OF DESIGN
              <br />
              WORKFLOW
            </Typography>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{
                borderRadius: "23px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                padding: "20px",
                display: "flex",
                background: "linear-gradient(to bottom,#FDD698, #FDA64A)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  borderRadius: "23px",
                  height: "407px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    alt="Logo"
                    src={ChatTop}
                    sx={{
                      width: 265,
                      height: 60,
                      borderRadius: "8px",
                      marginTop: "-2%",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Box sx={{ transform: "translateX(-165%)" }}>
                      <Avatar
                        alt="User"
                        src={ChatUser}
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "20px",
                          position: "absolute",
                          marginTop: "9px",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "white",
                        fontWeight: 300,
                        transform: "translateX(-85%)",
                      }}
                    >
                      New User
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        color: "white",
                        fontWeight: 300,
                        width: "130px",
                        height: "22px",
                      }}
                    >
                      Chat with Doozoo
                    </Typography>
                  </Box>
                </Box>
                <Avatar
                  alt="Logo"
                  src={BotChatBg}
                  sx={{ width: 265, height: 350, borderRadius: "0px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                    borderRadius: "15px",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    backgroundColor: "#f37c41",
                    alignSelf: "center",
                    transform: "translateY(-165%)",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Avatar
                      alt="Logo"
                      src={ChatIcon}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "0px",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                    />
                    <Box
                      sx={{
                        maxWidth: "200px",
                        textAlign: "start",
                        height: "155px",
                        marginRight: "5px",
                      }}
                    >
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        Hey there! I'm the Doozoo intelligence. I'm here to give
                        you a hand with anything you need to know about our
                        AI-powered design tool. What can I help you with
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transform: "translateY(-830%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginBottom: "10px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  <Typography sx={{ color: "lightgray" }}>
                    Type something....
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Logo"
                      src={Book}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "0px",
                        marginRight: "5px",
                        marginLeft: "auto",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    transform: "translateY(-610%)",
                    display: "flex",
                    alignItems: "center",
                    width: 250,
                    paddingLeft: "7px",
                  }}
                >
                  <TextField
                    placeholder="Drop your email"
                    variant="outlined"
                    autoComplete="off"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 4,
                      paddingTop: 0,
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#f37c41",
                        },
                    }}
                    InputProps={{
                      sx: { paddingRight: 0, borderRadius: 4 },
                      endAdornment: (
                        <InputAdornment position="end" sx={{ paddingRight: 0 }}>
                          <IconButton
                            onClick={handleSearch}
                            sx={{
                              background: "#f37c41",
                              borderRadius: "15px",
                              color: "white",
                              padding: "20px",
                            }}
                          >
                            <Typography sx={{ fontSize: "11px" }}>
                              Join Waitlist
                            </Typography>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
        <TextField
          placeholder="Drop your email"
          variant="outlined"
          autoComplete="off"
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            paddingTop: 2,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f37c41",
            },
          }}
          InputProps={{
            sx: { paddingRight: 0, borderRadius: 4 },
            endAdornment: (
              <InputAdornment position="end" sx={{ paddingRight: 0 }}>
                <IconButton
                  onClick={handleSearch}
                  sx={{
                    background: "#f37c41",
                    borderRadius: "15px",
                    color: "white",
                    padding: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "11px" }}>
                    Join Waitlist
                  </Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
    </Container>
  );
};

export default Body;
