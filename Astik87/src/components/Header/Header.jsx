import './Header.scss';

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class Header extends Component {

    render() {
        return (
            <div>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" >
                    Chats
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
          );
    }

}

