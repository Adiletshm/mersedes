import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { CartContext } from "../../../context/CartContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { favoriteContext } from "../../../context/FavoriteContextProvider";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

import { comentContext } from "../../../context/CommentContextProvider";
import { grey } from "@mui/material/colors";
import { authContext } from "../../../context/AuthContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  const { addProductToBasket } = useContext(CartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const [coment, setComent] = useState("");

  const { addComent, deleteComent, comentArr, readComent } =
    useContext(comentContext);

  const { user } = useContext(authContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  useEffect(() => {
    readComent();
  }, []);
  function handleAdd(e) {
    e.preventDefault();
    // if (!currentUser.email) {
    //   alert("Чтобы оставить коментарий войдите через акаунт!");
    //   return;
    // }
    if (!coment.trim()) {
      alert("Заполните поле!");
      return;
    }

    let obj = {
      coment,
      key: id,
      user: user.email,
    };
    addComent(obj);
    setComent("");
  }

  const navigate = useNavigate();

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: "10px" }}>
                <Typography variant="h4">
                  {productDetails.title}
                  <DirectionsCarIcon
                    sx={{
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}
                  />
                </Typography>
                <Typography variant="h5">{productDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Alert
                  sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Цена: {productDetails.price}
                  <AttachMoneyIcon />
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "20px", bgcolor: grey[900] }}>
                    Заказать
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "20px", bgcolor: grey[900] }}
                    onClick={() => addProductToBasket(productDetails)}>
                    <AddShoppingCart />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "20px", bgcolor: grey[900] }}
                    onClick={() => addProductToFavorite(productDetails)}>
                    <FavoriteIcon />
                  </Button>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    variant="contained"
                    sx={{ width: "48%", bgcolor: grey[900] }}
                    onClick={() => deleteProduct(productDetails.id)}>
                    Удалить
                  </Button>
                  {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}
                  > */}
                  <Button
                    variant="contained"
                    sx={{ width: "48%", bgcolor: grey[900] }}
                    onClick={() => navigate(`/edit/${productDetails.id}`)}>
                    Изменить
                  </Button>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
            {comentArr ? (
              <>
                {comentArr.map(item => (
                  <div>
                    {/* <div
                style={{
                  minWidth: "30px",
                  height: "30px",
                  backgroundColor: "lightgray",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  marginRight: "3px",
                }}>
                {item.user}
              </div> */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#212121",
                        textAlign: "center",
                        color: "white",
                      }}>
                      <span>{item.user}</span>
                      <span>
                        {item.coment}
                        <IconButton
                          style={{ color: "white" }}
                          onClick={() => deleteComent(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </span>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
            <div>
              <form
                onSubmit={e => handleAdd(e)}
                style={{
                  margin: "100px 200px",
                  width: "100%",
                }}>
                <label style={{ fontSize: "18px" }}>
                  Оставить отзыв:
                  <input
                    onChange={e => setComent(e.target.value)}
                    type="text"
                    value={coment}
                    style={{
                      height: "20px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      outline: 0,

                      padding: "20px 30px",
                    }}
                  />
                </label>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            </div>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
