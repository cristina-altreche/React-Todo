import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarIcon from '@material-ui/icons/Star';
import CheckIcon from '@material-ui/icons/Check';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import Switch from '@material-ui/core/Switch';
import useDarkMode  from '../hooks/useDarkMode'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: '#313843'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideNav(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <div className={classes.toolbar}  />
      <Divider />
      <List >
          <ListItem >
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText>Inbox</ListItemText>
          </ListItem>
          <ListItem>
              <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
              <ListItemText>Future</ListItemText>
          </ListItem>
          <ListItem>
              <ListItemIcon><StarIcon/></ListItemIcon>
              <ListItemText>Starred</ListItemText>
          </ListItem>
          <ListItem>
              <ListItemIcon><CheckIcon/></ListItemIcon>
              <ListItemText>Completed</ListItemText>
          </ListItem>
      </List>
      <Divider/>
      <List>
          <ListItem>
              <ListItemIcon><div className="circles" style={{backgroundColor: "dodgerblue"}}></div></ListItemIcon>
              <ListItemText>Finance</ListItemText>
          </ListItem>
          <ListItem>
              <ListItemIcon><div className="circles" style={{backgroundColor: "deepPink"}}></div></ListItemIcon>
              <ListItemText>Shopping</ListItemText>
          </ListItem>
          <ListItem>
              <ListItemIcon><div className="circles" style={{backgroundColor: "blueViolet"}}></div></ListItemIcon>
              <ListItemText>Study</ListItemText>
          </ListItem>
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Todo App
          </Typography>
          <div className="dark-mode__toggle">
          <Switch  inputProps={{ 'aria-label': 'primary checkbox' }}  onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'} />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TodoForm addTaskFn={props.addTaskFn} clearTodoFn={props.clearTodoFn} />
        <TodoList todos={props.todos} toggleTask={props.toggleTask} />
      </main>
    </div>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;