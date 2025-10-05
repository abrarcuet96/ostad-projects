import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const userStore = create((set) => ({
  loginLoading: false,
  loginUserRequest: async (reqBody) => {
    try {
      set({ loginLoading: true });
      let res = await axios.post(baseURL + `/login`, reqBody);
      if (res?.data?.success === true) {
        set({ loginLoading: false });
        localStorage.setItem("user-token", res?.data?.token);
        toast.success(res?.data?.message);
        return true;
      } else {
        set({ loginLoading: false });
        toast.error(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ loginLoading: false });
      return false;
    }
  },

  logoutLoading: false,
  logoutRequest: async () => {
    try {
      set({ logoutLoading: true });
      let res = await axios.get("api/v1/logout");
      if (res?.data?.success === true) {
        set({ logoutLoading: false });
        localStorage.removeItem("user-token");
        toast.success(res?.data?.message);
        return true;
      } else {
        set({ logoutLoading: false });
        toast.error(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ logoutLoading: false });
      return false;
    }
  },
}));
export default userStore;
