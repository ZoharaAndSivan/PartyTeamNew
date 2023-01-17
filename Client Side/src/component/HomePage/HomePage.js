
import { useNavigate } from 'react-router';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// import ImageButton from '@mui/material/ImageButton';
import "./HomePage.css";
import a from "./חופה.jpg"
import b from "./יומולדת.jpg"
import c from "./מסיבה.jpg"
import d from "./נחל-כזיב-גליל.jpg"

const images = [
   {
      url: a,
      title: 'חתונה',
      width: '40%',
   },
   {
      url: b,
      title: 'ימי הולדת',
      width: '30%',
   },
   {
      url: c,
      title: 'מסיבות',
      width: '30%',
   },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
   position: 'relative',
   height: 200,
   [theme.breakpoints.down('sm')]: {
     width: '100% !important', // Overrides inline-style
     height: 100,
   },
   '&:hover, &.Mui-focusVisible': {
     zIndex: 1,
     '& .MuiImageBackdrop-root': {
       opacity: 0.15,
     },
     '& .MuiImageMarked-root': {
       opacity: 0,
     },
     '& .MuiTypography-root': {
       border: '4px solid currentColor',
     },
   },
 }));
 
 const ImageSrc = styled('span')({
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   backgroundSize: 'cover',
   backgroundPosition: 'center 40%',
 });
 
 const Image = styled('span')(({ theme }) => ({
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: theme.palette.common.white,
 }));
 
 const ImageBackdrop = styled('span')(({ theme }) => ({
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   backgroundColor: theme.palette.common.black,
   opacity: 0.4,
   transition: theme.transitions.create('opacity'),
 }));
 
 const ImageMarked = styled('span')(({ theme }) => ({
   height: 3,
   width: 18,
   backgroundColor: theme.palette.common.white,
   position: 'absolute',
   bottom: -2,
   left: 'calc(50% - 9px)',
   transition: theme.transitions.create('opacity'),
 }));

const HomePage = () => {
   let nav = useNavigate();

 const HomePage = () => {
   }
   return (
      <>
<<<<<<< Updated upstream
         {/* <h1>דף הבית </h1> */}
         {/* <div className="warp">
            <div className="block" onClick={passToType}><img src={c} /></div>
            <div className="block" onClick={passToType}><img src={a} /></div><br/>
            <div className="block" onClick={passToType}><img src={d} /></div>
            <div className="block" onClick={passToType}><img src={b} /></div>
         </div> */}
=======
>>>>>>> Stashed changes
         <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
               <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                     width: image.width,
                  }}
               >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                     <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                           position: 'relative',
                           p: 4,
                           pt: 2,
                           pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                     >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                     </Typography>
                  </Image>
               </ImageButton>
            ))}
         </Box>
      </>
   )
}
export default  {HomePage};
