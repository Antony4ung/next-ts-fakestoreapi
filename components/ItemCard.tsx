import React, { FC } from "react";
import { Box, Typography, CardContent, Card,Chip, IconButton } from "@mui/material";
import Image from "next/image";
import { product } from "../types/productResponse";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCard: FC<product> = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <Card sx={{ minHeight: "400px" }}>
      <CardContent sx={{ p: 2 }}>
        <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>{title}</h4>
        <Box sx={{ my: 3 }}>
          <Image height={150} width={140} src={image} alt={title} />
        </Box>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Box sx={{ display: "flex", mt:3,justifyContent:"space-between" }}>
          <Box>
            <Chip label={`${price} $ `} />
            <Chip label={category} />
          </Box>
          <Box>
            <IconButton>
              <AddShoppingCartIcon/>
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
