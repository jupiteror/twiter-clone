import { Button } from "@/shared/components/ui/button";
import { CardDescription } from "@/src/shared/ui/card";
import { Settings } from "lucide-react";

const HeaderCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex justify-start items-center gap-2">
          <p className="m-0 p-0 user">Username</p>
          <CardDescription className="border-r border-l px-2 rounded-xl hover:bg-secondary">
            @username
          </CardDescription>
          <CardDescription>23 h</CardDescription>
        </div>
      </div>
      <Button>
        <Settings className="w-full h-full" />
      </Button>
    </div>
  );
};

export default HeaderCard;
