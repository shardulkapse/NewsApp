import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  const res = await fetch(
    "https://nkoteng.stepzen.net/api/sanguine-porcupine/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey nkoteng::stepzen.net+1000::baf377f0582b589565bba3002f69b7bd1f30de4080fc23d4c5766ad6e2aee744`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: "5332ddd1e8b241fe8cd66618fddc0b5b",
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return news;
};

export default fetchNews;

// 5332ddd1e8b241fe8cd66618fddc0b5b

// stepzen    nkoteng::stepzen.net+1000::baf377f0582b589565bba3002f69b7bd1f30de4080fc23d4c5766ad6e2aee744
