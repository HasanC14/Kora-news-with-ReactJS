import { useLoaderData } from "react-router-dom";
import SharednewsCard from "../Shared/SharednewsCard/SharednewsCard";

const Category = () => {
  const Allnews = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-4">
      {Allnews.map((news) => (
        <SharednewsCard key={news._id} news={news}></SharednewsCard>
      ))}
    </div>
  );
};

export default Category;
