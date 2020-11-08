const API_BASE = "/api/";

export default [
  {
    name: "GetUser",
    route: `${API_BASE}/user`,
  },
  {
    name: "PostUserLogin",
    route: `${API_BASE}/login`,
  },
  {
    name: "PostUserRegister",
    route: `${API_BASE}/register`,
  },
];
