import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import axios from 'axios';

import TextInput from './components/TextInput';
import DropdownSelect from './components/DropdownSelect';

import { reducer, defaultForm } from './state/reducer';
import { updateForm as updateFormAction } from './state/actions';
import { getFormValue, isFormValid, getPostData } from './state/selectors';

const styles = {
  formItem: {
    margin: '10px 0px 10px 0px'
  },
  formItemLabel: {
    marginBottom: '5px'
  }
};

const Title = (props) => {
  return <Grid>Title</Grid>
}

const onSubmit = postData => {
  axios.post('/checkout/air-conditioner', postData);
}

const CertificateForm = ({ classes, translations }) => {
  const [state, dispatch] = useReducer(reducer, defaultForm);

  const getTextInput = (id, type) => {
    return (
    <TextInput
      label={translations[id]}
      value={getFormValue(state, id)}
      fieldId={id}
      type={type}
      onChange={(value) => updateFormAction(dispatch, id, value)}
    />
  )};

  const title = (
    <Grid className={classes.formItem}>
      {translations.title}
    </Grid>
  );

  const nameInput = (
    <Grid className={classes.formItem}>
      {getTextInput('name')}
    </Grid>
  );

  const phoneNumberInput = (
    <Grid container className={classes.formItem} direction="row">
      <Grid item>
        <Grid item className={classes.formItemLabel}>
          {translations['phone']}
        </Grid>
        <Grid item container alignItems="center">
          <DropdownSelect
            onChange={(value) => updateFormAction(dispatch, 'phonePrefix', value)}
            items={[1, 2, 3, 4, 5, 6, 7]}
            value={getFormValue(state, 'phonePrefix')}
          />
          {getTextInput('phoneNumber', 'Number')}
        </Grid>
      </Grid>
      <Grid item>
        {getTextInput('email')}
      </Grid>
    </Grid>
  );

  const postalCodeAndCityInput = (
    <Grid container direction="row" className={classes.formItem}>
      {getTextInput('postCode')}
      {getTextInput('city')}
    </Grid>
  );

  const addressInput = (
    <Grid className={classes.formItem}>
      {getTextInput('address')}
    </Grid>
  );

  const disclaimer = (
    <Grid className={classes.formItem}>
      {translations.disclaimer}
    </Grid>
  );

  const submitButton = (
    <Grid className={classes.formItem}>
      <Button
        color="primary"
        variant="contained"
        disabled={!isFormValid(state)}
        onClick={() => onSubmit(getPostData(state))}
        fullWidth
      >
        {translations.continue}
      </Button>
    </Grid>
  );

  return (
    <Grid>
        {title}
        {nameInput}
        {phoneNumberInput}
        {postalCodeAndCityInput}
        {addressInput}
        {disclaimer}
        {submitButton}
    </Grid>);
}

export default withStyles(styles)(CertificateForm);
