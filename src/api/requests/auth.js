import { httpService } from "api/http";
import routes from "api/routes";
import getEndpointUrlWithName from "api/helpers/getEndpointUrlWithName";

export const loginRequest = async (postData) => {
  const route = getEndpointUrlWithName("PostUserLogin", routes);
  try {
    const response = await httpService.post(route, postData);
    if (response.status === 200) {
      const { data } = response;
      return data ?? null;
    }
  } catch (error) {
    return error;
  }
};
