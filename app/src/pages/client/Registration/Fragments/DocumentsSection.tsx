import React from 'react';
import { FormLabel } from '@material-ui/core';

export default function DocumentsSection({ generateBunch }: any) {
  return (
    <>
      <FormLabel component="legend">Documents</FormLabel>
      {[
        { field: 'documents_aadhaar', label: 'Aadhar' },
        { field: 'documents_community', label: 'Community certificate' },
        { field: 'documents_income', label: 'Income certificate' },
        { field: 'documents_HSC', label: 'HSC Mark sheet' },
        { field: 'documents_nativity', label: 'Nativity certificate' },
        { field: 'documents_birth', label: 'Birth certificate' },
        { field: 'documents_photograph', label: 'Professional photograph' },
        { field: 'documents_signature', label: 'Signature' },
      ].map(generateBunch)}
    </>
  );
}
