import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import TextInput from './components/TextInput';
import DropdownSelect from './components/DropdownSelect';

import { reducer, defaultForm } from './state/reducer';
import { updateForm as updateFormAction } from './state/actions';
import { getFormValue } from './state/selectors';

const styles = {
  formItem: {
    margin: '10px 0px 10px 0px'
  },
  formItemLabel: {
    marginBottom: '5px'
  }
};

const formLabels = {
  name: 'Telepitest igenylo neve',
  phone: 'Telepitest igenylo telefonszama',
  email: 'Telepitest igenylo email cime',
  postCode: 'Iranyitoszam',
  city: 'Varos',
  address: 'Telepites helye (utca, hazszam, emelet, ajto)'
};

const Title = (props) => {
  return <Grid>Title</Grid>
}

const CertificateForm = ({ classes }) => {
  const [state, dispatch] = useReducer(reducer, defaultForm);

  const getTextInput = (id, type) => {
    return (
    <TextInput
      label={formLabels[id]}
      value={getFormValue(state)}
      fieldId={id}
      type={type}
      onChange={(value) => updateFormAction(dispatch, id, value)}
    />
  )};

  return (
    <Grid>
      <Title />

      <Grid className={classes.formItem}>
        {getTextInput('name')}
      </Grid>

      <Grid container className={classes.formItem} direction="row">
        <Grid container item>
          <Grid item className={classes.formItemLabel}>
            {formLabels['phone']}
          </Grid>
          <Grid item container alignItems="center">
            <DropdownSelect />
            {getTextInput('phoneNumber', 'Number')}
          </Grid>
        </Grid>
        {getTextInput('email')}
      </Grid>

      <Grid container direction="row" className={classes.formItem}>
        {getTextInput('postCode')}
        {getTextInput('city')}

      </Grid>

      <Grid>
        {getTextInput('address')}
      </Grid>

    </Grid>);
}

export default withStyles(styles)(CertificateForm);
