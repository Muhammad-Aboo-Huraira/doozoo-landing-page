import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import Hand1 from "../../assets/Hand1.png";
import BotChatBg from "../../assets/bot-chat-background.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <Container sx={{ height: '100vh', overflowY: 'auto', paddingTop: '40px' }}>
      <Box sx={{ maxHeight: "200px", overflowY: "auto" }}>
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
            border: '1px solid',
            borderRadius: '40px',
            paddingTop: '24px',
            paddingBottom: '24px'
            // backgroundColor: "#f37c41",
          }}
        >
          <Box sx={{ color: "white", backgroundColor: "#f37c41", textAlign: 'center', textWrap: 'balance' }}>
            <Typography variant="h4" sx={{fontWeight: "bold"}}>
              CHAT WITH INTELLIGENT DOOZOO AI & DISCOVER THE FUTURE OF DESIGN
              WORKFLOW
            </Typography>
          </Box>
          <Box>
            {" "}
            <Box sx={{ border: "1px solid" }}>
              <Avatar
                alt="Logo"
                src={BotChatBg}
                sx={{ width: 350, height: 350 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Body;
