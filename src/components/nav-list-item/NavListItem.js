import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }
const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
}

export default function NavListItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="nav">
      <Link to={props.link} style={LinkStyle}>
        <ListItem button onClick={props.clicked}>
          <ListItemIcon>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItem>
        </Link>
      </List>
      {/* <Divider /> */}
      {/* <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List> */}
    </div>
  );
}
