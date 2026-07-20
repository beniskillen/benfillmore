import React from 'react';
import { ROI_GUARANTEE_CTA_LABEL, ROI_GUARANTEE_FORM_URL } from '../../lib/cta';

export default function RoiGuaranteeLink({
  children = ROI_GUARANTEE_CTA_LABEL,
  ...props
}) {
  return (
    <a
      {...props}
      href={ROI_GUARANTEE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
