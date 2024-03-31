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

import { handleDelete } from "@/app/actions";

type DeleteLinkProps = {
  userId: string;
  id: number;
};
export default function DeleteLink({ userId, id }: DeleteLinkProps) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="invisible absolute right-2 top-[6px] z-20 ml-auto rounded-full p-1 hover:bg-[#e1e4e8] group-hover:visible"
      >
        <EllipsisVertical className="h-6 w-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Link?</DialogTitle>
          <DialogDescription>
            You&apos;ll no longer see this link here.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="link"
              className="p-0 text-red-500"
              onClick={() => handleDelete(userId, id)}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
