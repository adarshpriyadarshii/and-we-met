import React,{useState} from 'react'
import {
  Grid,
   Card,
   CardContent,
   CardMedia,
   Stack, 
   Typography,
   Button,
   TextField,
   Input,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   Avatar
  } from '@mui/material';
import { useSelector, useDispatch} from 'react-redux';
import { addComment } from '../actions/actions';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import displayPic from '../assets/pictures/dp.JPG'

function Post(props) {
 // const comments=useSelector(state=>state.comments);
 // const dispatch=useDispatch();
  const [comment,setComment]=useState("add comment");
  const [liked,setLiked]=useState(false);
  const [likes,setLikes]=useState(props.like);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleLike=()=>{
    setLikes(likes+1);
    setLiked(true);
  }
  const handleDislike=()=>{
    setLikes(likes-1);
    setLiked(false);
  }
  var newC="";
  const handleChange= e =>{
  /*  newC=e.target.value;
    setComment([...comment,
      newC]
    )*/
    setComment(e.target.value);
  }
  const newComment=(e)=>{
    e.preventDefault();
    console.log(comment);
    
    //dispatch(addComment(comment));
  }
  return (
    <>
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="200"
      image={props.image}
      alt="post"
      onClick={handleOpen}
    />
    <CardContent>
        <Grid container 
        spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        alignItems="center" 
        justifyContent="center"
        >
            <Grid item xs={6} sm={6} md={6} >
              <Stack direction="row">
                {liked===true?(<FavoriteRoundedIcon onClick={handleDislike}/>):(<FavoriteBorderRoundedIcon onClick={handleLike}/>)}
                <Typography>{likes}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={6} >
              <Stack direction="row-reverse">
                <ModeCommentOutlinedIcon onClick={handleOpen}/>
              </Stack>
            </Grid>
        </Grid>
    </CardContent>
  </Card>
  <Dialog open={open} onClose={()=>setOpen(false)}>
        <Grid 
        container 
        spacing={{ xs: 2, md: 2 }} 
        columns={{ xs: 1, sm: 12, md: 12 }} 
        alignItems="center" 
        justifyContent="center"
        >
            <Grid item xs={1} sm={6} md={6} >
               <img 
               src={props.image}
              alt="post"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} >
                <Typography variant="h6" gutterBottom>
                <Stack direction="row">
                <Avatar src={displayPic}/>
                adarsh
                </Stack>
                </Typography>
                <Typography variant="caption" gutterBottom> {props.caption}</Typography>
                <DialogContent>
                  <Stack direction="row">
                    <Typography>Comment 1</Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="caption">reply 1</Typography>
                    <Input placeholder="reply" />
                  <Button variant="text" size="small">reply</Button>
                  </Stack>
                  <DialogContentText>
                   {/*comments*/}
                   {comment}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                 <Input placeholder="Add a Comment" value={comment} onChange={handleChange}/>
                  {/*<TextField
                    autoFocus
                    margin="dense"
                    id="comment"
                    label="Comment"
                    fullWidth
                    variant="standard"
                    value={comment}
                    onChange={handleChange}
                  />*/}
                  <Button variant="text" size="small" onClick={newComment}>Post</Button>
                </DialogActions>
            </Grid>
        </Grid>
    </Dialog>
    </>
    
  )
}

export default Post

