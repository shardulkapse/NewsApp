import { notFound } from "next/navigation";
type Props = {
  searchParams?: Article;
};
function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article className="mt-10">
      <section className="flex flex-col lg:flex-row pb-24 px-0  text-white">
        {article.image && (
          <img
            className="h-50 max-w-xs mx-auto md:max-w-md lg:max-w-lg object-cover rounded-lg"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10 ">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <p className="text-xs mb-5">
            Published on: {new Date(article.published_at).toLocaleDateString()}
          </p>
          <div className="flex divide-x-2 space-x-4 tracking-wider">
            <h2 className="font-normal">
              By: <span className="text-orange-400">{article.author}</span>
            </h2>
            <h2 className="font-normal pl-4">Source: {article.source}</h2>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
