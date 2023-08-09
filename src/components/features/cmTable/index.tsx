"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface TableProps {
  header: string[];
  body: (string | number)[][];
  rowCursor?: boolean;
  onRowClick?: (cellData?: (string | number)[], rowIndex?: number) => void;
  onCellClick?: (
    cellData?: string | number,
    rowIndex?: number,
    columnIndex?: number
  ) => void;
}

const CMTable = ({
  header,
  body,
  rowCursor,
  onRowClick,
  onCellClick,
}: TableProps) => {
  const handleCellClick = (
    cellData?: string | number,
    rowIndex?: number,
    columnIndex?: number
  ): void => {
    // Call the provided onCellClick function with the clicked cell's data
    if (onCellClick) onCellClick(cellData, rowIndex, columnIndex);
  };

  const handleRowClick = (
    rowData?: (string | number)[],
    rowIndex?: number
  ): void => {
    // Call the provided onRowClick function with the clicked cell's data
    if (onRowClick) onRowClick(rowData, rowIndex);
  };

  return (
    <Table className="min-w-full bg-white border-spacing-0">
      <TableHeader className="w-full text-base text-gray-900 bg-gray-100 border-none">
        <TableRow className="w-full ">
          {header?.map((text, index) => (
            <TableHead
              className="px-6 py-5 text-sm font-medium leading-5 text-left text-gray-900 border-b-0 max-w-max "
              key={index}
            >
              {text}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {body?.map((row, rowIndex) => (
          <TableRow
            className="w-full"
            key={rowIndex}
            onClick={() => handleRowClick(row, rowIndex)}
          >
            {row?.map((cell, columnIndex) => (
              <TableCell
                className={cn(
                  "text-sm text-gray-900 border-b-0 leading-5 text-left px-6 py-5 m-0 font-normal overflow-hidden max-w-max",
                  {
                    "text-[#0082AA]":
                      row[row.length - 1] === "Under review" &&
                      columnIndex === row.length - 1,
                    "text-[#DE4A09]":
                      row[row.length - 1] === "Completed" &&
                      columnIndex === row.length - 1,
                    "text-[#00D448]":
                      row[row.length - 1] === "Paid" &&
                      columnIndex === row.length - 1,
                  },
                  {
                    "cursor-pointer": rowCursor,
                  }
                )}
                key={columnIndex}
                onClick={() => handleCellClick(cell, rowIndex, columnIndex)}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CMTable;
