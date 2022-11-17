import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 3, sm: 5 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="black"
          color="white">
          <Container maxWidth="lg" className="text">
            <Grid container spacing={5} style={{ textAlign: "" }}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Перед покупкой
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Поиск дилера
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Просмотр статуса заказа
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Финансовые услуги
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Владельцам автомобилей
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Запись на сервис
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Помощь на дороге
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Все продукты сервиса
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Аксессуары для автомобилей
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Технологии
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Электромобильность
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Устойчивое развитие
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    MBUX
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Mercedes me
                  </Link>
                </Box>
              </Grid>
            </Grid>
            {/* <Grid>
              <img
                src="https://miro.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg"
                alt="logo"
                style={{
                  width: "150px",
                  display: "flex",
                  margin: "50px auto 0 auto",
                }}
              />
            </Grid> */}
            <Box
              textAlign="center"
              pt={{ xs: 0, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "space-around",
              }}>
              <Typography>© 2022, АО «Мерседес-Бенц КЫР»</Typography>
              <Typography>Cookies </Typography>
              <Typography> Защита данных</Typography>
              <Typography>Правовая информация </Typography>

              <TelegramIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
