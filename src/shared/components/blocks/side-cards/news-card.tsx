import type { NewsPropsType } from "@/shared/types/news-props.type";

const NewsCard = ({ title, subtitle }: NewsPropsType) => {
  return (
    <div className="flex justify-center hover:bg-secondary w-full">
      <ul>
        <li>
          <h1 className="text-xl">{title}</h1>
        </li>
        <li className="text-sm flex justify-center">{subtitle}</li>
      </ul>
    </div>
  );
};

export default NewsCard;
