let BASE_URL = `https://proshop-api-n2t7.onrender.com`;

if (process.env.NODE_ENV === "development") {
  BASE_URL = `http://localhost:4000`;
}

export default BASE_URL;
