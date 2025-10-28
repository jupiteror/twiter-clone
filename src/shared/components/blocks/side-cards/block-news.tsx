import { Button } from "../../ui/button";
import NewsCard from "./news-card";

//mock-data
//title
//subtitle

const mock_news = [
  {
    title: "Философия Канта",
    subtitle: "Философия Канта",
  },
  {
    title: "Философия Канта",
    subtitle: "Философия Канта",
  },
  {
    title: "Философия Канта",
    subtitle: "Философия Канта",
  },
];

const NewsBlock = () => {
  return (
    <div className="border w-[350px] rounded-2xl mx-5">
      <h1 className="text-2xl text-center pt-2">What’s happening:</h1>
      {mock_news.map((data, key) => (
        <NewsCard key={key} title={data.title} subtitle={data.subtitle} />
      ))}
      <Button className="hover:bg-secondary w-full rounded-t-none rounded-b-xl">
        show more...
      </Button>
    </div>
  );
};

export default NewsBlock;
