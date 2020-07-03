import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Post from './Post';
import About from './About';


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
        marginTop: '65px',
    },
}));

export default function MenuBar() {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState('about');

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={activeTab}>
                <AppBar position="fixed" className={classes.appBar}>
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
                            <Tab className={classes.fullHeight} label="Moore On Tech" id="moore_on_tech" value="home" />
                            <Tab className={classes.fullHeight} label="About" id="about" value="about" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <div className={classes.panelWrapper} >
                    <TabPanel value="home">
                        <Post />
                    </TabPanel>
                    <TabPanel value="about">
                        <About />
                    </TabPanel>
                </div>
            </TabContext>
        </div>
    );
}