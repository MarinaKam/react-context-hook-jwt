import React, {Component} from 'react';
import {Link, Typography, Box} from '@material-ui/core/index';

class Footer extends Component {
    render() {
        const myLink = 'https://github.com/MarinaKam/react-redux-jwt';
        return (
            <Box display='flex'
                 flexDirection='column'
                 alignItems='center'
                 component='footer'
            >
                <Link href={myLink}>React + Redux + JWT + Material UI</Link>
                <Typography component='p' style={{fontSize: '12px'}}>
                    made with love from <Link style={{fontSize: '16px'}} href={myLink}>Marie Kam</Link>
                </Typography>
            </Box>
        );
    }
}

export default Footer;