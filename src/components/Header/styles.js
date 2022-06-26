import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(2),
      width: 'auto' },
  },
  searchIcon: {
    padding: '0 5% 0 5%', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  searchInput: {
    paddingLeft: '22%'
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between'
  },
  displayXs: {
    display: 'block',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  displayLg: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  }
}));