import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="text-gray-300 mt-5 text-3xl underline underline-offset-4">
        Search Results for:{" "}
        <span className="text-orange-400">{searchParams?.term}</span>
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
