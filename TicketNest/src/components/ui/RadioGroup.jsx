/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Root as RadioGroupRoot, Item as RadioGroupItem, Indicator as RadioGroupIndicator } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "../../lib/utils"

const RadioGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupRoot
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

RadioGroup.propTypes = {
  className: PropTypes.string,
};

const CustomRadioGroupItem = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupItem
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-gray-200 text-gray-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupIndicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupIndicator>
    </RadioGroupItem>
  );
});
CustomRadioGroupItem.displayName = "CustomRadioGroupItem";

CustomRadioGroupItem.propTypes = {
  className: PropTypes.string,
};

export { RadioGroup, CustomRadioGroupItem as RadioGroupItem };
