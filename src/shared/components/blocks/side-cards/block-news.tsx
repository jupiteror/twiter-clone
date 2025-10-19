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
    <div className="border rounded-sm p-2">
        {mock_news.map((data, key) => (
        <NewsCard key={key} title={data.title} subtitle={data.subtitle}/>
      ))}
    </div>
  );
};

export default NewsBlock;
