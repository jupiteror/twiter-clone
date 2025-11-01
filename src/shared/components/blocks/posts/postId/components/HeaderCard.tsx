import { CardDescription } from "@/src/shared/ui/card";
import { DropDownBtn } from "./DropDownBtn";

const HeaderCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex justify-start items-center gap-2">
          <p className="m-0 p-0 user">Username</p>
          <CardDescription className="hover:border p-[5px] rounded-xl hover:">
            @username
          </CardDescription>
          <CardDescription>23 h</CardDescription>
        </div>
      </div>
      <DropDownBtn />
    </div>
  );
};

export default HeaderCard;
