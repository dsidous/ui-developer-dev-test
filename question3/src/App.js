import React from 'react';
import useForm from './hooks/useForm';
import validate from './utils/validateForm';

import useStyles from './styles';

export default () => {

  const handleFormPost = () => {
    alert(`
      --SUBMITTING--
      First Name: ${state.firstname}
      Last Name: ${state.lastname}
      DOB: ${state.dob}
      Favourite Australian State: ${state.austate}
    `);
  }

  const classes = useStyles();

  const { handleChange, handleSubmit, state, errors } = useForm(
    handleFormPost,
    validate
  );

  return (
    <main>
      <header>
        <h1>StarRez: Question 3</h1>
      </header>

      <article>
        <p>Create an accessible form</p>
        
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <div className={classes.inputField}>
          <label htmlFor='firstname'>First Name</label>
          <input
            className={errors.firstname && classes.error}
            placeholder='First Name'
            type='text'
            name='firstname'
            id='firstname'
            onChange={handleChange}
            value={state.firstname}
          />
          {errors.firstname && (
            <span className={classes.errorMessage}>{errors.firstname}</span>
          )}
        </div>
        <div className={classes.inputField}>
          <label htmlFor='lastname'>Last Name *</label>
          <input
            className={errors.lastname && classes.error}
            placeholder='Last Name'
            type='text'
            name='lastname'
            id='lastname'
            onChange={handleChange}
            value={state.lastname}
          />
          {errors.lastname && (
            <span className={classes.errorMessage}>{errors.lastname}</span>
          )}
        </div>
        <div className={classes.inputField}>
          <label htmlFor='dob'>Date of birth *</label>
          <input
            className={errors.dob && classes.error}
            placeholder='dd/mm/yyyy'
            name='dob'
            id='dob'
            onChange={handleChange}
            value={state.dob}
          />
          {errors.dob && (
            <span className={classes.errorMessage}>{errors.dob}</span>
          )}
        </div>

        <div className={classes.inputField}>
          <label htmlFor='austate'>Favourite Australian State *</label>
          <select
            className={errors.color && classes.error}
            name='austate'
            id='austate'
            onChange={handleChange}
            value={state.austate}
          >
            <option label='Please select one...' value='' disabled hidden>
              Please select one...
            </option>
            <option label='NSW' value='NSW'>
              NSW
            </option>
            <option label='VIC' value='VIC'>
              VIC
            </option>
            <option label='WA' value='WA'>
              WA
            </option>
            <option label='NT' value='NT'>
              NT
            </option>
            <option label='ACT' value='ACT'>
              ACT
            </option>
            <option label='TAS' value='TAS'>
              TAS
            </option>
            <option label='SA' value='SA'>
              SA
            </option>
            <option label='QLD' value='QLD'>
              QLD
            </option>
          </select>
          {errors.austate && (
            <span className={classes.errorMessage}>{errors.austate}</span>
          )}
        </div>

        <div className={classes.submit}>
          <button type='submit' aria-label='Submit'>
            Submit
          </button>
        </div>
      </form>

      </article>
    </main>
  );
}
