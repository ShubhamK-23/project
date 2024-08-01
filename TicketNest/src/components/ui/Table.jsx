/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { cn } from "../../lib/utils";
import Skeleton from "../SkeletonShimmer/Skeleton";

const Table = React.forwardRef(function Table({ className, isLoading, children, ...props }, ref) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      >
        {isLoading ? (
      <div className="p-6 space-y-2">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="80%" height="20px" />
      </div>
    ) : children}
      </table>
    </div>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef(function TableHeader({ className, isLoading, ...props }, ref) {
  return (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props}>
      {isLoading ? (
        <tr>
          <th><Skeleton width="100px" height="20px" /></th>
          <th><Skeleton width="150px" height="20px" /></th>
        </tr>
      ) : props.children}
    </thead>
  );
});
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(function TableBody({ className, isLoading, ...props }, ref) {
  return (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props}>
      {isLoading ? (
        <tr>
          <td><Skeleton width="100%" height="20px" /></td>
          <td><Skeleton width="100%" height="20px" /></td>
        </tr>
      ) : props.children}
    </tbody>
  );
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(function TableFooter({ className, isLoading, ...props }, ref) {
  return (
    <tfoot
      ref={ref}
      className={cn(
        "border-t bg-gray-100/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <tr>
          <td><Skeleton width="100px" height="20px" /></td>
          <td><Skeleton width="150px" height="20px" /></td>
        </tr>
      ) : props.children}
    </tfoot>
  );
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(function TableRow({ className,isLoading, ...props }, ref) {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 ",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <tr>
          <td><Skeleton width="100px" height="20px" /></td>
          <td><Skeleton width="150px" height="20px" /></td>
        </tr>
      ) : props.children}
      </tr>
  );
});
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(function TableHead({ className,isLoading, ...props }, ref) {
  return (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0 ",
        className
      )}
      {...props}
    >{isLoading ? (
      <tr>
        <td><Skeleton width="100px" height="20px" /></td>
        <td><Skeleton width="150px" height="20px" /></td>
      </tr>
    ) : props.children}
    </th>
  );
});
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(function TableCell({ className, isLoading, ...props }, ref) {
  return (
    <td
      ref={ref}
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    >
      {isLoading ? (
      <tr>
        <td><Skeleton width="100px" height="20px" /></td>
        <td><Skeleton width="150px" height="20px" /></td>
      </tr>
    ) : props.children}
    </td>
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(function TableCaption({ className, isLoading, ...props }, ref) {
  return (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-gray-500", className)}
      {...props}
    >
      {isLoading ? (
      <tr>
        <td><Skeleton width="100px" height="20px" /></td>
        <td><Skeleton width="150px" height="20px" /></td>
      </tr>
    ) : props.children}
    </caption>
  );
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
