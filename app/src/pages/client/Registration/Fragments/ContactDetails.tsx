import React from 'react';
export default function ContactDetails({ controller: formik, generateBunch }: any) {

  const ContactGroup = [
    { field: 'mobileNumber', label: 'Mobile Number', helper: 'without +91' },
    { field: 'email', label: 'Email' },
    { field: 'permanentAddress', label: 'Permanent Address' },
    { field: 'presentAddress', label: 'Present Address' },
  ];

  return (
    <>
      {ContactGroup.map(generateBunch)}
    </>
  )
}
