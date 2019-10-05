import React from 'react';
import PropTypes from 'prop-types';

import CertificateFormCmp from './CertificateForm/CertificateForm';

const CertificateForm = ({ config }) => (
  <CertificateFormCmp countryCodes={config.countryCodes} />
);

export default CertificateForm;
