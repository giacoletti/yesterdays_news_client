import { api } from "./network";

const Articles = {
  async index(category) {
    try {
      const { data } = await api.get("/articles", {
        params: {
          category: category
        }
      });
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
