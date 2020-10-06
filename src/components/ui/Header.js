import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,//delay wen user scrolling
        threshold: 0,//how far user need to scroll before trigger flow effect
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,//shadow when scroll : shadow on top
    });
}


export default function Header(props) {
    return (
        <ElevationScroll>
            <AppBar position="fixed" >
                <Toolbar>Arc Development</Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}