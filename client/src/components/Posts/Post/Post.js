import { Card, CardActions, CardMedia, Button , Typography} from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = (props)=>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.post.selectedFile} title={props.post.title}>
                <div className={classes.overlay}>
                    <Typography varriant="h6">{props.post.creator}</Typography>
                    <Typography varriant="body6"></Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={()=>{}}>
                        <MoreHorizIcon fontsize="default"></MoreHorizIcon>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body6" color="textSecondary">{props.post.tags.map((tag)=> `#${tag}`)}</Typography>
                </div>
                <CardActions className={classes.cardActions}>
                    <Typography className={classes.title} variant="h5">{props.post.message}</Typography>
                </CardActions>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize="small">{props.post.likeCount}</ThumbUpAltIcon>
                    </Button>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                    </Button>
                </CardActions>
            </CardMedia>
        </Card>
    );
}


export default Post;