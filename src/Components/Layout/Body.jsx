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
import Torus3 from "../../assets/Torus3.png";
import RoundCube3 from "../../assets/RoundCube3.png";
import VidImg from "../../assets/Image.png";
import playBtn from "../../assets/playButton.png";
import Logo from "../../assets/logo.png";
import ChatImg from "../../assets/Chat-Image1.png";
import LaptopImg from "../../assets/imageLaptop.png";
import Gen3 from "../../assets/gen3.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Body = () => {
  const handleSearch = () => {
    // Handle search functionality
    console.log("Search button clicked");
  };
  return (
    <Container
      sx={{
        maxWidth: "unset !important",
        paddingLeft: "unset !important",
        paddingRight: "unset !important",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Box sx={{ maxHeight: "200px", width: "820px", margin: "auto" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "#f37c41", textAlign: "center" }}
        >
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
        <Avatar alt="Hand1" src={Hand1} sx={{ width: 60, height: 60 }} />
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", color: '#555555', fontSize: '25px' }}>
          Let's chat with{" "}
          <Link to="/" style={{ color: "#f37c41", textDecoration: "none" }}>
            Doozoo
          </Link>
        </Typography>
        <Container
          sx={{
            display: "flex",
            maxWidth: "80%",
            justifyContent: "center",
            borderRadius: "15px",
            paddingTop: "24px",
            paddingBottom: "24px",
            backgroundColor: "#f37c41",
            marginTop: '25px'
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
              sx={{
                fontWeight: "bold",
                marginRight: "90px",
                textAlign: "start",
              }}
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
                  <form action="">
                    <TextField
                      type="email"
                      required
                      placeholder="Drop your email"
                      variant="outlined"
                      autoComplete="off"
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 4,
                        paddingTop: "1px",
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#f37c41",
                          },
                      }}
                      InputProps={{
                        sx: { paddingRight: 0, borderRadius: 4 },
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ paddingRight: 0 }}
                          >
                            <IconButton
                              type="submit"
                              onClick={handleSearch}
                              sx={{
                                background: "#f37c41",
                                borderRadius: "15px",
                                color: "white",
                                padding: "20px",
                                "&:hover": {
                                  background: "#ff9f71",
                                },
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
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "600px",
          marginTop: "90px",
        }}
      >
        <ReactPlayer
          url="https://firebasestorage.googleapis.com/v0/b/qr-app-a4a86.appspot.com/o/DOOZOO%20-%20NEXT%20GEN%20-%20FINAL%20HORIZONTAL.mp4?alt=media&token=c7a62121-971a-4651-bd9b-a68e8f432ff5"
          controls={true}
          height="630px"
          width="1000px"
          light={VidImg}
          playIcon={
            <Avatar
              alt="PlayBtn"
              src={playBtn}
              sx={{
                borderRadius: "0px",
                color: "#f37c41",
                height: 70,
                width: 65,
              }}
            />
          }
        />

        <Avatar
          alt="Logo"
          src={Logo}
          sx={{
            position: "absolute",
            transform: "translate(-270px, -180px)",
            borderRadius: "0px",
            height: 20,
            width: 90,
          }}
        />
        <Avatar
          alt="RoundCube3"
          src={RoundCube3}
          sx={{
            position: "absolute",
            height: 285,
            width: 320,
            borderRadius: "0px",
            transform: "translate(600px, 90px)",
            zIndex: -1, // To make it behind VidImg
          }}
        />
        <Avatar
          alt="Torus3"
          src={Torus3}
          sx={{
            position: "absolute",
            height: 360,
            width: 320,
            left: 0,
            borderRadius: "0px",
            transform: "translateY(280px)",
            zIndex: -1, // To make it behind VidImg
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "1000px",
          backgroundColor: "#f37c41",
          marginTop: "350px",
          width: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "1575px",
            width: "100%",
            overflow: "hidden",
            marginTop: "100px",
          }}
        >
          <Avatar
            alt="ChatImg"
            src={ChatImg}
            sx={{
              position: "absolute",
              // top: "-150px",
              left: "50%",
              transform: "translateX(-47%)",
              height: "875px",
              width: "1190px",
              borderRadius: "0px",
            }}
          />
          <Box sx={{ transform: "translateY(980px)" }}>
            {" "}
            <Typography
              variant="h2"
              sx={{
                background: "linear-gradient(to bottom,#FDD698, #FDA64A)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              HUMAN X AI SYNERGY TO
              <br />
              REVOLUTIONIZE THE DESIGN GAME
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            marginRight: "20px",
            marginLeft: "100px",
            height: "360px",
            width: "-webkit-fill-available",
          }}
        >
          <Avatar
            alt="LaptopImg"
            src={LaptopImg}
            sx={{
              height: 370,
              width: 680,
              borderRadius: "8px",
            }}
          />
        </Box>

        <Box
          sx={{ marginRight: "100px", textAlign: "start", marginLeft: "20px" }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#f37c41", fontWeight: "bold" }}
          >
            Doozoo GEN 2
          </Typography>
          <Typography
          sx={{ color: '#555555', fontSize: '25px' }}
          >
            Doozoo empowers beyond human limits and masters the 'New world of
            working' by perfecting a platform that delivers unlimited graphics,
            creative design and imagery with speed and efficiency.
            <br />
            <br />
            Empowering human potential with intelligent creative output and
            workflow superiority
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: "100%",
        }}
      >
        <Avatar
          alt="Gen3"
          src={Gen3}
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "0px",
          }}
        />
      </Box>

      <Typography
        variant="h2"
        sx={{
          color: "#f37c41",
          fontWeight: "bold",
          transform: "translateY(-125px)",
          textAlign: "center",
        }}
      >
        Join the waitlist for early
        <br />
        access to DOOZOO GEN 2
      </Typography>
      <Box id="joinWaitlist">
        <form
          action=""
          style={{ transform: "translateY(-80px)", textAlign: "center" }}
        >
          <TextField
            type="email"
            required
            placeholder="Drop your email"
            variant="outlined"
            autoComplete="off"
            sx={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingTop: 0,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f37c41",
              },
            }}
            InputProps={{
              sx: { paddingRight: 0, borderRadius: 4 },
              endAdornment: (
                <InputAdornment position="end" sx={{ paddingRight: 0 }}>
                  <IconButton
                    type="submit"
                    onClick={handleSearch}
                    sx={{
                      background: "#f37c41",
                      borderRadius: "15px",
                      color: "white",
                      padding: "20px",
                      "&:hover": {
                        background: "#ff9f71",
                      },
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
        </form>
      </Box>
    </Container>
  );
};

export default Body;
