import React, { useReducer } from 'react';
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
  },
  grow: {
    flexGrow: 1,
    width: '200px'
  },
  button: {
    marginRight: '10px'
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
    <React.Fragment>
      <Grid className={classes.formItemLabel}>
        {intl.formatMessage({ id: 'phone'})}
      </Grid>

      <Grid container>
        <Grid item>
          <DropdownSelect
            onChange={(value) => updateFormAction(dispatch, 'phonePrefix', value)}
            items={countryCodes}
            value={getFormValue(state, 'phonePrefix')}
          />
        </Grid>

        <Grid item className={classes.grow}>
          {getPhoneNumberInput('phoneNumber')}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const phoneAndEmailInput = (
    <Grid container className={classes.formItem}>
      <Grid item xs={12} sm={7}>
        {phoneNumber}
      </Grid>

      <Grid item xs={12} sm={5}>
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
    <Grid className={`${classes.formItem} ${classes.button}`}>
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
