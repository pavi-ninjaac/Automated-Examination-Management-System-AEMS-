import React from 'react';
import { FormLabel } from '@material-ui/core';

export default function DocumentsSection({ controller: formik, generateBunch }: any) {
  return (
    <>
      <FormLabel component="legend">Documents</FormLabel>
      {[
        { field: 'documents_aadhaar', label: 'Aadhar' },
        { field: 'documents_voter', label: 'Voter' },
        { field: 'documents_SSLC', label: 'SSLC' },
        { field: 'documents_HSC', label: 'HSC' },
        { field: 'documents_deg', label: 'Degree' },
        { field: 'documents_photo', label: 'Photo' },
        { field: 'documents_signature', label: 'Signature' }
      ].map(generateBunch)}
    </>
  );
}
