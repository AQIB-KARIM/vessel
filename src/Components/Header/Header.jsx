import { Box, Container } from '@mui/system'
import React from 'react'
import "./header.css"
import Card1 from "../../assets/cards/01.png"  
import Card2 from "../../assets/cards/02.png"  
import Card3 from "../../assets/cards/03.png"  
import Card4 from "../../assets/cards/04.png"  
import Card5 from "../../assets/cards/05.png"  
import Card6 from "../../assets/cards/06.png"  
import { Email, PhoneEnabled } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import Logo from "../../assets/logo.png"
import { Nav,NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [open,setOpen]=useState(false)
  const onClose=()=>{
    setOpen(false)
  }
  const onOpen=()=>{
    setOpen(true)
  }
  return (
    <>
      <Box className="topHeader" sx={{display:"flex",alignItems:"center",width:"100%",height:"100%",display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"flex-end",py:1}}>
            <Box sx={{display:"flex",mr:{xs:0,md:8},justifyContent:"space-between"}}>
                <img src={Card1} className="paymentCard"/>
                <img src={Card2} className="paymentCard" />
                <img src={Card3} className="paymentCard" />
                <img src={Card4} className="paymentCard" />
                <img src={Card5} className="paymentCard" />
                <img src={Card6} className="paymentCard" />
            </Box>
            <Box sx={{display:"flex",pt:{xs:2,sm:0}}}>

            <Box sx={{display:"flex",mr:{xs:3,sm:8},alignItems:"center" }}>
            <Box sx={{borderRight:"1px solid rgba(255,255,255,0.7)",height:"100%",marginRight:{xs:"3vmax",md:"1vmax"}}}>
                |
            </Box>
                <PhoneEnabled sx={{color:"white",pr:2}}/>
                <Typography sx={{color:"white",fontSize:{xs:"1.6vmax",md:"1.2vmax"}}}>1300 732 006</Typography>
            </Box>
            <Box sx={{display:"flex",mr:{xs:3,sm:8},alignItems:"center" }}>
            <Box sx={{borderRight:"1px solid rgba(255,255,255,0.7)",height:"100%",marginRight:{xs:"3vmax",md:"1vmax"}}}>
                |
            </Box>
                <Email sx={{color:"white",pr:2}}/>
                <Typography sx={{color:"white",fontSize:{xs:"1.8vmax",md:"1.2vmax"}}}>ride@vessel.net.au</Typography>
            </Box>
            </Box>
            
      </Box>
    </>
  )
}

export default Header
