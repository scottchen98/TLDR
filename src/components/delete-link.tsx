"use client";

import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { deleteWebpage } from "@/app/actions";
import { useRouter } from "next/navigation";

type DeleteLinkProps = {
  userId: string;
  id: number;
  url: string;
};
export default function DeleteLink({ userId, id, url }: DeleteLinkProps) {
  const { push } = useRouter();

  async function onDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await deleteWebpage(userId, id);
    push("/summary");
  }

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="visible absolute right-2 top-[8px] z-20 ml-auto rounded-full p-1 hover:bg-[#e1e4e8] group-hover:visible md:invisible md:top-[6px]"
      >
        <EllipsisVertical className="h-7 w-7 md:h-6 md:w-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Link?</DialogTitle>
          <DialogDescription>
            You&apos;ll no longer see this link here.
          </DialogDescription>
        </DialogHeader>
        <p className="text-center text-blue-500 sm:text-left">{url}</p>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="link"
              className="p-0 text-red-500"
              onClick={onDelete}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
