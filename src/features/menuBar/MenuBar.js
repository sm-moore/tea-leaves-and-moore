import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.colors.lightGreen,
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        // marginRight: theme.spacing(2),
        // flexGrow: 1,
    },
}));

export default function MenuBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                {/* <Typography variant="h6" className={classes.title}>
                    Moore On Tech
                    </Typography> */}
                <Tabs
                    value={value}
                    className={classes.tabs}
                    onChange={handleChange}
                    aria-label="tabs"
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Moore On Tech" id="moore_on_tech" />
                </Tabs>
                {/* <Toolbar> */}
                {/* <Typography variant="h6" edge="start" className={classes.title}>
                        Moore On Tech
                    </Typography>
                    <Tabs value={value} className={classes.tabs} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Home" {...a11yProps(0)} />
                    </Tabs> */}
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>*/}
                {/* <Button color="inherit">Login</Button> */}
                {/* </Toolbar> */}
            </AppBar>
        </div>
    );
}