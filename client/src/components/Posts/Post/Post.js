import { Card, CardActions, CardContent, CardMedia, Button , Typography} from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = (props)=>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
                    <Typography varriant="h6">{post.creator}</Typography>
                    <Typography varriant="body6">{moment(post.createdAt).fromNow(à)}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={()=>{}}>
                        <MoreHorizIcon fontsize="default"></MoreHorizIcon>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body6" color="textSecondary">{post.tags.map((tag)=> `#${tag}`)}</Typography>
                </div>
                <CardActions className={classes.cardActions}>
                    <Typography className={classes.title} variant="h5">{post.message}</Typography>
                </CardActions>
                <CardActions className={classes.cardActions}>
                    <Buutton size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize="small">{post.likeCount}</ThumbUpAltIcon>
                    </Buutton>
                    <Buutton size="small" color="primary" onClick={()=>{}}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                    </Buutton>
                </CardActions>
            </CardMedia>
        </Card>
    );
}


export default Post;