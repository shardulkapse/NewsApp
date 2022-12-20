"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500 transition-all duration-300 ease-in-out"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
