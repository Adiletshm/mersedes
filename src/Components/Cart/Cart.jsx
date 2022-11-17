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
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { grey } from "@mui/material/colors";

import "./Cart.css";
import OrderForm from "../OrderForm/OrderForm";

const Cart = () => {
  const {
    productsInBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
  } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState();

  useEffect(() => {
    getBasket();
  }, []);
  return (
    <>
      {modalOpen ? <OrderForm close={setModalOpen} /> : null}
      <Container maxWidth="lg">
        <Typography variant="h3">КОРЗИНА</Typography>
        {productsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      ФОТО
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      СУММА
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      КОЛИЧЕСТВО
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      ОБЩ СУММА
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "19px" }}>
                      УДАЛИТЬ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInBasket.products.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell>
                        <img src={elem.item.img1} alt="Sneakers" width={420} />
                      </TableCell>
                      <TableCell> {elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={e =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} $</TableCell>
                      <TableCell
                        onClick={() => deleteBasketProduct(elem.item.id)}>
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
              onClick={() => setModalOpen(true)}
              sx={{ margin: "20px auto", bgcolor: grey[900] }}>
              ОФОРМИТЬ ЗАКАЗ {productsInBasket.totalPrice}
            </Button>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Cart;
