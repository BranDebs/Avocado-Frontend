// Navbar
import {makeStyles} from "@material-ui/core/styles";

const ICON_HEIGHT = 20;
const CARD_MIN_WIDTH = 300;
// const
export class UiConst {
  static get ICON_HEIGHT() {
    return ICON_HEIGHT;
  }

  static get CARD_MIN_WIDTH() {
    return CARD_MIN_WIDTH;
  }

  static get GRID_RATIO_AUTH_PAGE() {
    return 4;
  }
}

export const AUTH_PAGE_STYLE = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  paper: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  paperMargin: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  title: {
    fontSize: 32
  }
}));

export const HOME_STYLE = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(6)
  }
}));