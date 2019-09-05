import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"


const Navbar = () =>{
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant='title' color='inherit'>
                        React & Material UI Sample Yaba 
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default Navbar;