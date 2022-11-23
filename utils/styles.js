import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#ffffff',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#000000',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 3,
  },
  mt1: { marginTop: '1rem' },

  // search
  searchSection: {
    display: 'none',
    padding: '5px 5px 5px 5px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {},
  searchInput: {
    paddingLeft: 2,
    '& ::placeholder': {
      color: '',
    },
  },
  iconButton: {
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },
}));
export default useStyles;
