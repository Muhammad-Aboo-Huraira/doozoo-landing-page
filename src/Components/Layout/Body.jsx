import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import Hand1 from "../../assets/Hand1.png";
import BotChatBg from "../../assets/bot-chat-background.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        marginTop: "50px",
        marginBottom: '50px'
      }}
    >
      <Box sx={{ maxHeight: "200px" }}>
        <Typography sx={{ fontWeight: "bold", color: "#f37c41" }}>
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
            border: "1px solid",
            borderRadius: "40px",
            paddingTop: "24px",
            paddingBottom: "24px",
            backgroundColor: "#f37c41",
          }}
        >
          <Box
            sx={{
              color: "white",
              backgroundColor: "none",
              textAlign: "center",
              textWrap: "balance",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              CHAT WITH INTELLIGENT DOOZOO AI & DISCOVER THE FUTURE OF DESIGN
              WORKFLOW
            </Typography>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{
                borderRadius: "23px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                width: "250",
                padding: '20px'
              }}
            >
              <Box sx={{ background: "white", borderRadius: "23px" }}>
                <Avatar
                  alt="Logo"
                  src={BotChatBg}
                  sx={{ width: 250, height: 350 }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Body;
