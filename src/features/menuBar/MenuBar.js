import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './pages/Home';
import About from './pages/About';
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.colors.lightGreen,
        display: 'flex',
    },
    toolBar: {
    },
    barTitle: {
        color: theme.colors.darkGrey,
        fontSize: "30px",
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
    fullHeight: {
        ...theme.mixins.toolbar,
    },
    panelWrapper: {
        marginTop: theme.spacing(3),
    },
}));

export default function MenuBar() {
    const classes = useStyles();
    const history = useHistory();
    const [activeTab, setActiveTab] = React.useState('/posts');

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
        history.push(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={activeTab}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <Typography className={classes.barTitle}>
                            Moore On Tech
                    </Typography>
                        <Tabs
                            value={activeTab}
                            className={classes.fullHeight}
                            onChange={handleChange}
                            aria-label="tabs"
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab className={classes.fullHeight} label="Moore On Tech" id="moore_on_tech" value="/posts" />
                            <Tab className={classes.fullHeight} label="About" id="about" value="/about" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <div className={classes.panelWrapper} >
                    <Switch>
                        <Route path='/about'>
                            <About />
                        </ Route>
                        <Route path='/posts'>
                            <Home />
                        </ Route>
                    </Switch>
                </div>
            </TabContext>
        </div>
    );
}