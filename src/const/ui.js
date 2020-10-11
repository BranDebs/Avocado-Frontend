const ICON_HEIGHT = 20;
const CARD_WIDTH = 300;
// const
export class UiConst {
  static get ICON_HEIGHT() {
    return ICON_HEIGHT;
  }

  static get CARD_WIDTH() {
    return CARD_WIDTH;
  }

  static get GRID_RATIO_AUTH_PAGE() {
    return 4;
  }
}

export const AUTH_PAGE_STYLE = theme => ({
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
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: '30ch'
  }
});
