import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "42eb8c2094f6471eb162a19c98ffcac9",
  },
});
