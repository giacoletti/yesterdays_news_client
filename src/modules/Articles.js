import { api } from "./network";

const Articles = {
  async index() {
    try {
      const { data } = await api.get("/articles");
      return data.articles;
    } catch (error) {
      return error
    }
  },
};

export default Articles;
