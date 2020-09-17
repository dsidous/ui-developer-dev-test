import { createUseStyles } from 'react-jss';

export default createUseStyles({
  form: {
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
    border: '1px solid #ccc',
    margin: '50px auto',
    padding: 20,
    width: '80vw',

    '@media (min-width: 576px)': {
      width: 360,
    },

    '& h2': {
      marginTop: 0,
    },

    '& label': {
      fontSize: '0.9em',
      marginBottom: '0.25em',
      color: '#222',
      fontWeight: 'lighter',
    },

    '& input': {
      padding: '10px 10px',
      borderRadius: 5,
      outline: 'none',
      border: '1px solid #cfcfcf',

      '&::placeholder': {
        fontSize: '1.2em',
        fontWeight: 'lighter',
        color: '#999',
      },

      '&[type="range"]': {
        padding: 0,
      },
    },

    '& $error': {
      border: '1px solid red',
    },

    '& select': {
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: 5,
      outline: 'none',
      border: '1px solid #cfcfcf',

      '&:invalid': {
        color: 'gray',
      },
    },

    '& option': {
      color: 'black',
      padding: '10px',
    },
  },

  inputField: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },

  error: {
    border: '1px solid red',
  },

  errorMessage: {
    color: 'red',
    display: 'relative',
    fontSize: '.8em',
    marginTop: 5,
  },

  salaryValue: {
    textAlign: 'center',
  },

  submit: {
    '& button': {
      backgroundColor: '#519e8a',
      color: '#fff',
      border: '2px solid #fff',
      width: '100%',
      marginTop: '1em',
      padding: '8px 0px',
      fontSize: '1em',
      fontWeight: 'lighter',
      letterSpacing: 1,
      marginBottom: '0.25em',
    },
  },
});
