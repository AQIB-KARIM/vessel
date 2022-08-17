import { Box, Divider, Drawer, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "./Drawer.css"
import {CardGiftcardOutlined,Camera,ContentCopyOutlined,LogoutOutlined,TabletMacOutlined, BusinessCenter, Domain, Celebration, TableBar, LocalActivity} from "@mui/icons-material"
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";


const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{padding:"2vmax 0"}} sx={{pl:{xs:"2vmax",md:0}}}>
        
        <ListItem>
            <Box className="listItem">
                <FaPlane style={{paddingRight:"2vmax",fontSize:"30px",color:"#231f60"}}/>
                <Typography fontSize="14px" fontWeight="500" sx={{color:"#231f60"}} >AIRPORT</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <Domain style={{paddingRight:"2vmax" ,color:"#231f60"}}/>
                <Typography fontSize="14px" fontWeight="500" sx={{color:"#231f60"}}>BUSINESS</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <Celebration style={{paddingRight:"2vmax" ,color:"#231f60"}}/>
                <Typography fontSize="14px" fontWeight="500" sx={{color:"#231f60"}}>WEDDINGS</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <TableBar style={{paddingRight:"2vmax" ,color:"#231f60"}}/>
                <Typography fontSize="14px" fontWeight="500" sx={{color:"#231f60"}}>DINING</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <LocalActivity style={{paddingRight:"2vmax",color:"#231f60"}}/>
                <Typography fontSize="14px" fontWeight="500" sx={{color:"#231f60"}}>FUNCTIONS</Typography>
            </Box>
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer
        
        anchor={"right"}
        open={drawerOpen["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default Sidebar;
