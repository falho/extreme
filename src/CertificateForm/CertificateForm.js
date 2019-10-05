import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import { useIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextInput from './components/TextInput';
import DropdownSelect from './components/DropdownSelect';

import { reducer, defaultForm } from './state/reducer';
import { updateForm as updateFormAction } from './state/actions';
import {
  getFormValue,
  isFormValid,
  getPostData,
  isValueValid
} from './state/selectors';

const styles = {
  formItem: {
    margin: '10px 0px 10px 0px'
  },
  formItemLabel: {
    marginBottom: '5px',
    marginTop: '5px'
  }
};

const onSubmit = postData => {
  axios.post('/checkout/air-conditioner', postData);
}

const CertificateForm = ({ classes, countryCodes }) => {
  const [state, dispatch] = useReducer(reducer, defaultForm);
  const intl = useIntl();

  const getInputProps = id => ({
    value: getFormValue(state, id),
    isValid: isValueValid(state, id),
    fieldId: id,
    onChange: (value) => updateFormAction(dispatch, id, value)
  });

  const getTextInput = id => (
    <TextInput { ...getInputProps(id) } label={intl.formatMessage({ id })} />
  );

  const getPhoneNumberInput = id => (
    <TextInput { ...getInputProps(id) } type="Number" />
  );

  const formTitle = (
    <Grid className={classes.formItem}>
      {intl.formatMessage({ id: 'title'})}
    </Grid>
  );

  const nameInput = (
    <Grid className={classes.formItem}>
      {getTextInput('name')}
    </Grid>
  );

  const phoneNumber = (
    <Grid item>
      <Grid item className={classes.formItemLabel}>
        {intl.formatMessage({ id: 'phone'})}
      </Grid>

      <Grid item container>
        <DropdownSelect
          onChange={(value) => updateFormAction(dispatch, 'phonePrefix', value)}
          items={countryCodes}
          value={getFormValue(state, 'phonePrefix')}
        />
        <Grid item>
          {getPhoneNumberInput('phoneNumber')}
        </Grid>
      </Grid>
    </Grid>
  );

  const phoneAndEmailInput = (
    <Grid container className={classes.formItem}>
      {phoneNumber}

      <Grid item>
        {getTextInput('email')}
      </Grid>
    </Grid>
  );

  const postalCodeAndCityInput = (
    <Grid container direction="row" className={classes.formItem}>
      <Grid item xs={3}>
        {getTextInput('postCode')}
      </Grid>
      <Grid item xs={9}>
        {getTextInput('city')}
      </Grid>
    </Grid>

  );

  const addressInput = (
    <Grid className={classes.formItem}>
      {getTextInput('address')}
    </Grid>
  );

  const disclaimer = (
    <Grid className={classes.formItem}>
      {intl.formatMessage({ id: 'disclaimer'})}
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
        {intl.formatMessage({ id: 'continue'})}
      </Button>
    </Grid>
  );

  return (
    <Grid>
        {formTitle}
        {nameInput}
        {phoneAndEmailInput}
        {postalCodeAndCityInput}
        {addressInput}
        {disclaimer}
        {submitButton}
    </Grid>);
}

export default withStyles(styles)(CertificateForm);
