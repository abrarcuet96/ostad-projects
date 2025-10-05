import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const blogsStore = create((set) => ({
  allBlog: null,
  totalBlog: 0,
  allBlogRequest: async (itemsNumber, pageNo) => {
    try {
      let res = await axios.get(baseURL + `/all-blog/${itemsNumber}/${pageNo}`);
      if (res?.data?.success) {
        set({ allBlog: res?.data?.data?.blogs });
        set({ totalBlog: res?.data?.data?.totalCount[0]?.count });
      }
    } catch (error) {
      console.log(error);
    }
  },
  singleBlog: null,
  singleBlogRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + `/single-blog/${id}`);
      if (res?.data?.success) {
        set({ singleBlog: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default blogsStore;
