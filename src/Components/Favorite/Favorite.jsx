import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../context/FavoriteContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { grey } from "@mui/material/colors";

const Favorite = () => {
  const { productsInFavorite, getFavorite, deleteFavoriteProduct } =
    useContext(favoriteContext);

  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">FAVORITE</Typography>
        {productsInFavorite ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      ФОТОГРАФИИ
                    </TableCell>

                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      УДАЛИТЬ ИЗБРАННОЕ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInFavorite.products.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell>
                        <img src={elem.item.img1} alt="Sneakers" width={420} />
                      </TableCell>

                      <TableCell
                        onClick={() => deleteFavoriteProduct(elem.item.id)}>
                        <DeleteForeverIcon
                          sx={{ color: grey[900] }}
                          color="primary"
                          className="deleteIconBasket"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              sx={{ margin: "20px auto", bgcolor: grey[900] }}>
              ЗАКАЗАТЬ {productsInFavorite.totalPrice}
            </Button>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Favorite;
