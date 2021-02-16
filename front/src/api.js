let api = "http://ripley.ycanales.com";
if (process.env.NODE_ENV !== "production") {
  api = "http://localhost:3001";
}

export default api;
