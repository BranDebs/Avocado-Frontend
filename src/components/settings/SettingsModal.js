import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Settings from 'components/settings/Settings';

const SettingsModal = ({ settings, onSettings, onSave }) => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 4, 4, 4)
    }
  }));

  const classes = useStyles();
  const handleClose = () => {
    onSettings(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={settings.active}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={settings.active}>
          <div className={classes.paper}>
            <Settings
              onSettings={onSettings}
              onSave={onSave}
              settings={settings.settings}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SettingsModal;
