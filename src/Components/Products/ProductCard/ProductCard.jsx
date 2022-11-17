import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { favoriteContext } from "../../../context/FavoriteContextProvider";
import { productContext } from "../../../context/ProductContextProvider";

const ProductCard = ({ obj }) => {
  const { addProductToFavorite } = useContext(favoriteContext);
  // const { ProductDetails } = useContext(productContext);

  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 500, color: "white", bgcolor: "black" }}>
      <Link to={`/details/${obj.id}`}>
        <CardMedia
          component="img"
          height="220"
          image={obj.img1}
          alt={obj.title}
        />
        <IconButton aria-label="settings" sx={{ color: "white" }}>
          {/* <MoreVertIcon /> */}
        </IconButton>
      </Link>
      <Typography sx={{ ml: "15px" }}>
        {obj.title} {obj.model}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="white" className="cardText">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton
          aria-label="add to favorites"
          onClick={() => addProductToFavorite(favoriteContext)}
          sx={{ color: "white" }}>
          <FavoriteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
