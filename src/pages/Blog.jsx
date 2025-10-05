import { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import MasterLayout from "../layout/MasterLayout";
import blogsStore from "../store/blogs.store";

const Blog = () => {
  const { allBlog, allBlogRequest } = blogsStore();

  useEffect(() => {
    allBlogRequest(6, 1);
  }, [allBlogRequest]);
  return (
    <MasterLayout>
      <div className="max-w-screen-xl mx-auto my-10">
        <div>
          <div className="text-center">
            <h1 className="text-3xl font-bold my-5">My Blogs</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {allBlog?.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Blog;
