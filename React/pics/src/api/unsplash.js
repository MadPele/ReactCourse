import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID ecd4ddbffe9b321fd7016725637210e7ef0b337f9b09aff6e0ddb44ca6116547"
  }
});
