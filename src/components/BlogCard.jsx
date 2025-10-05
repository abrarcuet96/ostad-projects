import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, img, sortDescription, category, _id } = blog;
  return (
    <div className="flex flex-col border border-pink-300 p-2 gap-2 rounded-md bg-pink-200">
      <img src={img} />
      <Link to={`/blog-detail/${_id}`}>
        <h1 className="text-xl font-bold text-pink-600">{title}</h1>
      </Link>
      <p className="text-sm">{sortDescription}</p>
      <div className="flex justify-end">
        <p className="border px-2 py-1 rounded-md border-pink-300 bg-pink-100 w-fit font-semibold">
          {category}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
