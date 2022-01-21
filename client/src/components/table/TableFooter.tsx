import Button from "../form/Button";
import Input from "../form/Input";
import { MdNavigateNext, MdOutlineChevronLeft } from "react-icons/md";
import { useState } from "react";
type PropsType = {
  goTo: (currentpage: number) => void;
  totalpages: number;
};
export default function TableFooter({ goTo, totalpages }: PropsType) {
  const [currentPage, setCurrentpage] = useState<number>(1);
  const canGoNext = (): boolean => {
    if (currentPage < totalpages) {
      return true;
    } else {
      return false;
    }
  };
  const canGoPrev = (): boolean => {
    if (currentPage - 1 > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section
      aria-label="table footer"
      className="w-full grid grid-cols-3 items-center justify-center py-4 relative"
    >
      <div className="">
        <Input
          name="currentpage"
          onChange={(e: any) => {
            if (Number(totalpages) >= e.target.value) {
              setCurrentpage(e.target.value);
              goTo(e.target.value);
            }
          }}
          type="number"
          value={currentPage}
          min={1}
          max={totalpages}
          defaultValue={1}
          inputClassName="w-16 text-center  font-semibold h-8"
        />
      </div>
      <div className="flex items-center gap-2 mx-auto text-gray-600 dark:text-gray-300 font-semibold ">
        <Button
          onClick={() => {
            if (canGoPrev()) {
              goTo(currentPage - 1);
              setCurrentpage(currentPage - 1);
            }
          }}
          disabled={!canGoPrev()}
          aria-label="Previous Page"
          icon={
            <div className=" text-gray-600 dark:text-gray-300  text-xl font-bold  ">
              <MdOutlineChevronLeft className=" " />
            </div>
          }
          className=" dark:bg-neutral-800 bg-gray-300  py-2 w-6 px-2"
        />

        <p>{currentPage}</p>
        <p>Of</p>
        <p>{totalpages}</p>
        <Button
          onClick={() => {
            if (canGoNext()) {
              goTo(currentPage + 1);
              setCurrentpage(currentPage + 1);
            }
          }}
          disabled={!canGoNext()}
          icon={
            <div className=" text-gray-600 dark:text-gray-300 text-xl font-bold  ">
              <MdNavigateNext className=" " />
            </div>
          }
          aria-label="Next Page"
          className=" dark:bg-neutral-800 bg-gray-300  py-2 w-6 px-2 "
        />
      </div>
    </section>
  );
}
