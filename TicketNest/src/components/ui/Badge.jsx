/* eslint-disable no-unused-vars */
import React from "react";
import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';
import { badgeVariants } from "./badgeUtils"; // Import badgeVariants from the separate file

const Badge = ({ className, variant, ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
};

export { Badge };
