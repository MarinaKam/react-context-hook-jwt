import React, { Fragment, useContext } from 'react';
import { Flag } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core";
import LanguageContext from '../contexts/LanguageContext';

const useStyles = makeStyles(theme => ({
   flag: {
       paddingLeft: '10px',
       paddingRight: '10px',
       cursor: 'pointer'
   }
}));

const HeaderIcons = () => {
    const context = useContext(LanguageContext);
    const classes = useStyles();
    return (
        <Fragment>
            <Flag
                onClick={() => context.onLanguageChange('ukraine')}
                name='ua'
                className={classes.flag}
                />
            <Flag
                onClick={() => context.onLanguageChange('english')}
                name='us'
                className={classes.flag}
            />
        </Fragment>
    );
};



export default HeaderIcons;
