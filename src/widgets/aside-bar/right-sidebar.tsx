import NewsBlock from "@/shared/components/blocks/side-cards/block-news";

import type { PropsType } from "@/shared/types/props.type";

const RightSideBar = ({ className }: PropsType) => {
  return (
    <div className={`w-1/6 h-[1315px] ${className}`}>
      <NewsBlock />
    </div>
  );
};

export default RightSideBar;
