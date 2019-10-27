import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ApplicationsTable from './ApplicationsTable';
import Timer from './Timer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
export default function Tabbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const kimm = require('../Images/061118-kim-jong-un-feature.jpg');
    const slap = require('../Images/p8xoszwqtwp31.png');
    const commy = require('../Images/c6t4f7c3h7p31.jpg')
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Applications" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Create Entry" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        {/* <img src={commy} /> */}
          <ApplicationsTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src={slap} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src={kimm} />
          <Timer/>
        </TabPanel>
      </div>
    );
  }
  
  
  
  