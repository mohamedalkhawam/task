import { useState } from "react";
import { Column, ObjectColumn } from "../../../types/table/table";
export default function useColumns(columnObject: ObjectColumn[]): Column[] {
  const [columns, setColumns] = useState<Column[]>(
    columnObject.map((item) => ({
      ...item,
      isVisible: true,
      cell(value: string | number): string | number {
        return value;
      },
      toggle() {
        this.isVisible = !this.isVisible as true;
        setColumns(
          columns.filter((item) =>
            item.accesor === this.accesor
              ? { ...item, isVisible: this.isVisible }
              : item
          )
        );
      },
    }))
  );
  return columns;
}
