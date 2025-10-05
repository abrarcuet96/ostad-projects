import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogsStore from "../store/blogs.store";

const BlogDetails = () => {
  const { id } = useParams();
  const { singleBlog, singleBlogRequest } = blogsStore();

  useEffect(() => {
    singleBlogRequest(id);
  }, [singleBlogRequest, id]);

  return (
    <div>
      <div className="flex flex-col border border-pink-300 p-2 gap-2 rounded-md bg-pink-200">
        <img src={singleBlog?.img} />
        <h1 className="text-xl font-bold text-pink-600">{singleBlog?.title}</h1>

        <p className="text-sm">{singleBlog?.sortDescription}</p>
        <div className="flex justify-end">
          <p className="border px-2 py-1 rounded-md border-pink-300 bg-pink-100 w-fit font-semibold">
            {singleBlog?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
