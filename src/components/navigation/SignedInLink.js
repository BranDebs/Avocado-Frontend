import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import SettingsModal from "../dashboard/timer/SettingsModal";

// Functional component
const SignedInLink = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [settingOpen, setSettingOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingOpen = () => {
    setSettingOpen(true);
  }

  const handleSettingClose = () => {
        setSettingOpen(false);
  }
  return (
    <div>
      <Typography display={'inline'}>69</Typography>
        <IconButton onClick={()=>handleSettingOpen()} color="inherit">
            <SettingsIcon />
        </IconButton>
      <IconButton onClick={handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default SignedInLink;
