"use client";

import React, { ReactNode, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyList } from "@/components/features/emptyList";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loader } from "./loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

interface TableProps {
  header: string[];
  body: (string | number | { imageLink: string; bankName: string } | ReactNode)[][];
  link?: boolean;
  isLoading?: boolean;
  lastColumnCursor?: boolean;
  bankLogo?: string;
  rowCursor?: boolean;
  onRowClick?: (
    cellData?: (string | number | { imageLink: string; bankName: string } | ReactNode)[],
    rowIndex?: number
  ) => void;
  onCellClick?: (
    cellData?: string | number | { imageLink: string; bankName: string },
    rowIndex?: number,
    columnIndex?: number
  ) => void;
}

// const loadTable = async () => {
//   throw new Error("Fetch data function not provided");
// };

const CMTable = ({
  header,
  body,
  link,
  rowCursor,
  onRowClick,
  onCellClick,
  lastColumnCursor,
  isLoading,
}: TableProps) => {
  const handleCellClick = (
    cellData?: string | number,
    rowIndex?: number,
    columnIndex?: number
  ): void => {
    // Call the provided onCellClick function with the clicked cell's data
    if (onCellClick) onCellClick(cellData, rowIndex, columnIndex);
  };

  const matches = useMediaQuery("(min-width: 768px)");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const itemsPerPage = 10;
  const itemOffset: string = searchParams.get("itemOffset") || "";
  const parsedItemOffset = parseInt(itemOffset) || 0;

  const endOffset = (parsedItemOffset || 0) + itemsPerPage;
  const currentItems = body?.slice(parsedItemOffset, endOffset);
  const pageCount = Math.ceil(body?.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % body?.length;
    router.push(pathname + "?" + "itemOffset=" + newOffset);
  };

  const handleRowClick = (
    rowData?: (string | number | { imageLink: string; bankName: string } | ReactNode)[],
    rowIndex?: number
  ): void => {
    if (onRowClick) onRowClick(rowData, rowIndex);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : body?.length ? (
        <div>
          {matches ? (
            <Table className="min-w-full bg-white border-spacing-0">
              <TableHeader className="w-full text-base text-gray-900 border-none bg-muted">
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
                {currentItems?.map((row, rowIndex) => (
                  <TableRow
                    className="w-full"
                    key={rowIndex}
                    onClick={() => handleRowClick(row, rowIndex)}
                  >
                    {row?.map((cell: any, columnIndex) => (
                      <TableCell
                        className={cn(
                          "text-sm text-gray-900 border-b-0 leading-5 text-left px-6 py-5 m-0 font-normal overflow-hidden max-w-max ",
                          {
                            "text-[#0082AA]":
                              row[row.length - 1] === "Under review" &&
                              columnIndex === row.length - 1,
                            "text-[#DE4A09]":
                              row[row.length - 1] === "Completed" && columnIndex === row.length - 1,
                            "text-[#00D448]":
                              row[row.length - 1] === "Paid" && columnIndex === row.length - 1,
                            "underline text-[#00A2D4]": columnIndex === row.length - 1 && link,
                          },
                          {
                            "cursor-pointer":
                              rowCursor || (lastColumnCursor && columnIndex === row.length - 1),
                          }
                        )}
                        key={columnIndex}
                        onClick={() => handleCellClick(cell, rowIndex, columnIndex)}
                      >
                        {typeof cell === "object" && "imageLink" in cell ? (
                          <>
                            <div className="flex items-center gap-4">
                              <Image
                                src={cell?.imageLink}
                                alt={"bankLogo"}
                                width={25}
                                height={25}
                              />
                              <span>{cell?.bankName}</span>
                            </div>
                          </>
                        ) : (
                          cell
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-4 rounded-sm border border-[#EDF1F6] space-y-[22px]">
              {currentItems.map((row, rowIndex) => {
                return (
                  <Accordion
                    key={rowIndex}
                    type="multiple"
                    value={openItems}
                    onValueChange={(value: any) => setOpenItems(value)}
                    className="p-4 text-sm border rounded-sm"
                  >
                    <AccordionItem value={`${row[0]}`} className="space-y-4 border-b-0">
                      <div className="flex items-start justify-between">
                        <div
                          className="flex flex-col gap-4"
                          onClick={() => handleRowClick(row, rowIndex)}
                        >
                          {row.slice(0, 3).map((cell, index) => {
                            if (
                              typeof cell === "object" &&
                              "imageLink" in cell! &&
                              "bankName" in cell
                            ) {
                              return (
                                <div key={index}>
                                  <Image src={cell.imageLink} alt={cell.bankName} />
                                  <span>{cell.bankName}</span>
                                </div>
                              );
                            }
                            return (
                              <div key={index}>
                                {index !== 0 ? (
                                  <div className="flex items-center gap-1">
                                    <span className="text-foreground-grey">{header[index]}:</span>{" "}
                                    <span className="font-medium text-foreground">{cell}</span>
                                  </div>
                                ) : (
                                  <span className="font-medium text-foreground">{cell})</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <AccordionTrigger>
                          {openItems.includes(`${row[0]}`) ? <Minus /> : <Plus />}
                        </AccordionTrigger>
                      </div>
                      <AccordionContent onClick={() => handleRowClick(row, rowIndex)}>
                        <div className="flex flex-col gap-4">
                          {row.slice(3).map((cell, index) => {
                            if (
                              typeof cell === "object" &&
                              "imageLink" in cell! &&
                              "bankName" in cell
                            ) {
                              return (
                                <div key={index}>
                                  <Image src={cell.imageLink} alt={cell.bankName} />
                                  <span>{cell.bankName}</span>
                                </div>
                              );
                            }
                            return (
                              <div key={index}>
                                <div className="flex items-center gap-1">
                                  <span className="text-foreground-grey">{header[index + 3]}:</span>{" "}
                                  <span className="font-medium text-foreground">{cell}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          )}

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            containerClassName="flex gap-4 my-4 max-w-max m-auto p-2 border border-border rounded"
            pageClassName=""
            pageLinkClassName="px-3 py-1.5 text-muted-foreground "
            previousClassName=""
            previousLinkClassName="px-3 py-1.5 text-black border-r border-border"
            nextClassName=""
            nextLinkClassName="px-3 py-1.5 text-black border-l border-border"
            activeClassName=""
            activeLinkClassName="!text-black !bg-background-blue !rounded"
          />
        </div>
      ) : (
        <div className="flex justify-center mt-12">
          <EmptyList />
        </div>
      )}
    </>
  );
};

export default CMTable;
