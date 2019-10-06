import React from 'react';
import CertificateFormCmp from './CertificateForm/CertificateForm';

const CertificateForm = ({ config }) => (
  <CertificateFormCmp countryCodes={config.countryCodes} />
);

export default CertificateForm;
