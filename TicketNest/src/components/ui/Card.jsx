import React from "react";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";
import Skeleton from "../SkeletonShimmer/Skeleton";


const Card = React.forwardRef(({ className, isLoading, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
      className
    )}
    {...props}
  >
    {isLoading ? (
      <div className="p-6 space-y-2">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="80%" height="20px" />
      </div>
    ) : children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className,isLoading, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {isLoading ? (
        <tr>
          <th><Skeleton width="100px" height="20px" /></th>
          <th><Skeleton width="150px" height="20px" /></th>
        </tr>
      ) : props.children}
      </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, isLoading, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  >
    {isLoading ? (
        <tr>
          <td><Skeleton width="100%" height="20px" /></td>
          <td><Skeleton width="100%" height="20px" /></td>
        </tr>
      ) : props.children}
    </h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className,isLoading, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 ", className)}
    {...props}
  >
    {isLoading ? (
        <tr>
          <td><Skeleton width="100%" height="20px" /></td>
          <td><Skeleton width="100%" height="20px" /></td>
        </tr>
      ) : props.children}
  </p>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className,isLoading, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} >
    {isLoading ? (
        <CardContent>
          <td><Skeleton width="100%" height="20px" /></td>
          <td><Skeleton width="100%" height="20px" /></td>
        </CardContent>
      ) : props.children}
  </div>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, isLoading, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  >
    {isLoading ? (
        <CardContent>
          <td><Skeleton width="100%" height="20px" /></td>
          <td><Skeleton width="100%" height="20px" /></td>
        </CardContent>
      ) : props.children}

  </div>

));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

// Define propTypes for each component
Card.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};

CardHeader.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};

CardTitle.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};

CardDescription.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};

CardContent.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};

CardFooter.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.string
};
