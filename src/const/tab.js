import {withStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import {THEME} from 'const/theme';

export const StyledTabs = withStyles((THEME) => ({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: THEME.palette.secondary.main,
        },
    },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const StyledTab = withStyles((theme) => ({
    root: {
        minWidth: theme.spacing(6),
    },
}))((props) => <Tab disableRipple {...props} />);