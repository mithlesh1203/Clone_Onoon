import * as React from "react";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";
import "../Navbar.css";

export const ActiveWearNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ display: "flex" }}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "none",
          padding: "5px",
          color: "black",
          fontSize: "12px",
          borderRadius: "0",
          boxShadow: "0",
          margin: "0px 40px 0px 40px",
          ":hover": {
            borderBottom: "1px solid black",
            background: "white",
            boxShadow: "0",
          },
        }}
      >
        Active Wears
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "centre",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popoverBox">
          <div>
            <div className="catHead">Clothing</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Activewear
              </a>
              <a href="/Home" className="categories">
                Blazers and sports coats
              </a>
              <a href="/Home" className="categories">
                Coats and Jackets
              </a>
              <a href="/Home" className="categories">
                Dress shirts
              </a>
              <a href="/Home" className="categories">
                Jeans
              </a>
              <a href="/Home" className="categories">
                Joggers and sweatpants
              </a>
              <a href="/Home" className="categories">
                Lounges, Pajamas and Robes
              </a>
              <a href="/Home" className="categories">
                Pants
              </a>
              <a href="/Home" className="categories">
                Polo Shirts
              </a>
              <a href="/Home" className="categories">
                Shirts
              </a>
              <a href="/Home" className="categories">
                Socks
              </a>
              <a href="/Home" className="categories">
                Suits & Separates
              </a>
              <a href="/Home" className="categories">
                Sweaters
              </a>
              <a href="/Home" className="categories">
                Sweatshirts & hoodies
              </a>
              <a href="/Home" className="categories">
                T-shirts
              </a>
              <a href="/Home" className="categories">
                Underwares & Boxers
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Shoes</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Boots
              </a>
              <a href="/Home" className="categories">
                Comfort
              </a>
              <a href="/Home" className="categories">
                Dress shoes
              </a>
              <a href="/Home" className="categories">
                Dress shirts
              </a>
              <a href="/Home" className="categories">
                Loafers and Slip-ons
              </a>
              <a href="/Home" className="categories">
                Oxford & Derbys
              </a>
              <a href="/Home" className="categories">
                Running Shoes
              </a>
              <a href="/Home" className="categories">
                Sandals and Flip-flops
              </a>
              <a href="/Home" className="categories">
                Shoes cares and Accessories
              </a>
              <a href="/Home" className="categories">
                Slippers
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Accessories</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Bags & Bagpacks
              </a>
              <a href="/Home" className="categories">
                Belts
              </a>
              <a href="/Home" className="categories">
                Face masks
              </a>
              <a href="/Home" className="categories">
                Gloves
              </a>
              <a href="/Home" className="categories">
                Hats
              </a>
              <a href="/Home" className="categories">
                Headphones
              </a>
              <a href="/Home" className="categories">
                Jewelry
              </a>
              <a href="/Home" className="categories">
                Phonecases
              </a>
              <a href="/Home" className="categories">
                Scarves
              </a>
              <a href="/Home" className="categories">
                Sunglasses & eyewears
              </a>
              <a href="/Home" className="categories">
                Ties & pocket Squares
              </a>
              <a href="/Home" className="categories">
                Wallets
              </a>
              <a href="/Home" className="categories">
                Watches
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Designers</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Designer Clothing
              </a>
              <a href="/Home" className="categories">
                Designer shoes
              </a>
              <a href="/Home" className="categories">
                Designer Accessories
              </a>
            </div>

            <div className="catHead">Big & Tall</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Clothing
              </a>
              <a href="/Home" className="categories">
                Jeans
              </a>
              <a href="/Home" className="categories">
                Pants
              </a>
              <a href="/Home" className="categories">
                Shirts
              </a>
            </div>

            <div className="catHead">Grooming & Cologne</div>
            <div className="catBox">
              <a href="/Home" className="categories">
                Body care & Deodrant
              </a>
              <a href="/Home" className="categories">
                Cologne
              </a>
              <a href="/Home" className="categories">
                Dopp Kits & Toiletry
              </a>
              <a href="/Home" className="categories">
                Gifts and Sets
              </a>
              <a href="/Home" className="categories">
                Hair Products
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=''
              style={{ marginTop: "50px", height: "350px" }}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
};
