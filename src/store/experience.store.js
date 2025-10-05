import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const experienceStore = create((set) => ({
  allExperience: null,
  allExperienceRequest: async () => {
    try {
      let res = await axios.get(baseURL + `/all-experience`);
      if (res?.data?.success) {
        set({ allExperience: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default experienceStore;
