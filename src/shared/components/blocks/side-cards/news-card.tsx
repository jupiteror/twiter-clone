import type { NewsPropsType } from "@/shared/types/news-props.type";


const NewsCard = ({ title, subtitle }: NewsPropsType) => {
  return (
    <div className="flex justify-center border rounded-sm my-2">
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

export default NewsCard;
