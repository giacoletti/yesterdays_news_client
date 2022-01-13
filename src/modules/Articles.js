import { api } from "./network";

const Articles = {
  async index() {
    const { data } = await api.get("/articles");
    return data.articles;
  },
};

export default Articles;