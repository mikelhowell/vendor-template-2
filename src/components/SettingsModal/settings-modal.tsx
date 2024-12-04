import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SettingModal = ({
  open,
  onClose,
  setting,
  handleRemoveProduct,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  calculateTotal
}: any) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "400px",
          height: "100%",
          padding: "16px",
          overflowY: "auto",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Shopping Setting</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Setting Items */}
      {setting.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Your setting is empty.
        </Typography>
      ) : (
        <List>
          {setting.map((item: any, index: number) => (
            <ListItem key={index}>
              <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "16px" }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">${item.price.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => handleIncreaseQuantity(item)}>+</Button>
                </Box>
                <IconButton onClick={() => handleRemoveProduct(item)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      )}

      {/* Setting Total */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography variant="h6">Total:</Typography>
        <Typography variant="h6">
          ${setting.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </Typography>
      </Box>

      {/* Checkout Button */}
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" fullWidth>
          Proceed to Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingModal;
