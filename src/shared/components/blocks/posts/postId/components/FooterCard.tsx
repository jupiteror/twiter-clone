import { Button } from "@/shared/components/ui/button";
import type { PropsType } from "@/shared/types/props.type";
import { Copy, Repeat2, Star, ThumbsUp } from "lucide-react";

const FooterCard = ({ className }: PropsType) => {
  return (
    <div className="flex justify-center px-4 gap-3">
      <Button className={`flex items-center ${className}`}>
        <ThumbsUp className="w-5 h-5" />
        <p className="pl-3">1.2k</p>
      </Button>
      <Button className={`flex items-center ${className}`}>
        <Star className="w-5 h-5" />
        <p className="pl-3">3.4kk</p>
      </Button>
      <Button className={`flex items-center ${className}`}>
        <Repeat2 className="w-5 h-5" />
        <p className="pl-3">5.6k</p>
      </Button>
      <Button className={`flex items-center ${className}`}>
        <Copy className="w-5 h-5" />
        <p className="pl-3">345</p>
      </Button>
    </div>
  );
};

export default FooterCard;
