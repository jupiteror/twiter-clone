import type { IWrapperProps } from "@/shared/types/wrapper.interface";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/shared/ui/dialog";
import { Textarea } from "@/src/shared/ui/textarea";
import { Copy } from "lucide-react";

const PostWindow = ({ className }: IWrapperProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className={`${className}`}>Twit</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <Textarea
                className="w-full resize-[20px] h-[200px] border-none text-card"
                placeholder="Twit now baby..."
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="border-t pt-2 px-1">
            <Copy className="h-5 w-5" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostWindow;
