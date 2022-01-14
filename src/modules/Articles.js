import { api } from "./network";

const Articles = {
  async index() {
    try {
      const { data } = await api.get("/articles");
      return data.articles;
    } catch (error) {
      return error;
    }
  },
  async show(id) {
    try {
      const { data } = await api.get(`/articles/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default Articles;
