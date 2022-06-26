import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  select: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  displayXs: {
    display: 'block',
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
}));