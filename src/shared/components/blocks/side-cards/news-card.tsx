import type { NewsPropsType } from "@/shared/types/news-props.type";

const NewsCard = ({ title, subtitle }: NewsPropsType) => {
  return (
    <div className="flex hover:bg-secondary w-full p-2">
      <ul className="">
        <li>
          <h1 className="text-xl">{title}</h1>
        </li>
        <li className="text-sm">{subtitle}</li>
      </ul>
    </div>
  );
};

export default NewsCard;
