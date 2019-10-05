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
import {
  getFormValue,
  isFormValid,
  getPostData,
  isValueValid
} from './state/selectors';

import { useIntl } from 'react-intl';

const styles = {
  formItem: {
    margin: '10px 0px 10px 0px'
  },
  formItemLabel: {
    marginBottom: '5px',
    marginTop: '5px'
  }
};

const Title = (props) => {
  return <Grid>Title</Grid>
}

const onSubmit = postData => {
  axios.post('/checkout/air-conditioner', postData);
}

const CertificateForm = ({ classes, countryCodes }) => {
  const [state, dispatch] = useReducer(reducer, defaultForm);
  const intl = useIntl();

  const getInputProps = (id, showLabel = true) => ({
    label: showLabel && intl.formatMessage({ id }),
    value: getFormValue(state, id),
    isValid: isValueValid(state, id),
    fieldId: id,
    onChange: (value) => updateFormAction(dispatch, id, value)
  });

  const getTextInput = id => (
    <TextInput { ...getInputProps(id) } />
  );

  const getPhoneNumberInput = id => {
    const showLabel = false;

    return (
    <TextInput { ...getInputProps(id, showLabel) } type="Number" />
  )};

  const title = (
    <Grid className={classes.formItem}>
      {intl.formatMessage({ id: 'title'})}
    </Grid>
  );

  const nameInput = (
    <Grid className={classes.formItem}>
      {getTextInput('name')}
    </Grid>
  );

  const phoneNumberInput = (
    <Grid container xs={12} className={classes.formItem}>
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
