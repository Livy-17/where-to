import { useMediaQuery, alpha } from "@mui/material";
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
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
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
  },
  moonIcon: {
    [theme.breakpoints.up('lg')]: { '&:hover': {backgroundColor: 'gray', borderRadius: '5px'} },
    p: '5px 5px 5px 5px',
    height: '40px',
    width: '40px',
    transition: 'ease-in-out 0.2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5px'
  },
  sunIcon: {
    [theme.breakpoints.up('lg')]: { '&:hover': {backgroundColor: 'orange', borderRadius: '5px'} },
    padding: '5px 5px 5px 5px',
    height: '40px',
    width: '40px',
    transition: 'ease-in-out 0.2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5px'
  },
  bgLight: {
    backgroundColor: 'white'
  },
  bgDark: {
    backgroundColor: '#272727'
  }
}));