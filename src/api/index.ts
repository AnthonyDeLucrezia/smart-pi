export type Api = "raspberryPi";
type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
type RequestType = "json" | "formData";

export const getApiUrl = (api: Api) => {
  switch (api) {
    case "raspberryPi":
      return process.env.API_PI_URL;
  }
};

const handleErrorStatus = async (response: Response) => {
  switch (response.status) {
    case 400: {
      const data = await response.json();
      let error = "";
      for (const [key, value] of Object.entries(data.errors)) {
        if (Array.isArray(value)) {
          error += `${key}: `;
          for (const err of value) {
            error += `${err} `;
          }
          error += "\n";
        } else {
          error += `${key}: ${value}\n`;
        }
      }
      return error;
    }
    case 401:
      return `You do not have authorization to access this resource. Are you connected to the app ?`;
    case 404:
      return `Couldn't find the call route.`;
    default:
      return response.statusText;
  }
};

const generateHeaders = (
  method: RequestMethod,
  type?: RequestType,
  api?: Api
) => {
  const headers: HeadersInit = {};

  if (method === "POST" || method === "PATCH" || method === "PUT") {
    if (!type || (type && type !== "formData")) {
      headers["Content-Type"] = "application/json";
    }
  }

  return headers;
};

export const performReq = async <T>(
  api: Api,
  method: RequestMethod,
  endpoint: string,
  body?: FormData | object,
  type?: RequestType
) => {
  const headers = generateHeaders(method, type);

  const bodyInput =
    type === "formData" ? (body as FormData) : JSON.stringify(body);

  try {
    const apiUrl = getApiUrl(api);
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method,
      headers: headers,
      body: bodyInput,
    });

    if (response.ok) {
      return response.json() as Promise<T>;
    }

    return Promise.reject(await handleErrorStatus(response));
  } catch (e) {
    return Promise.reject("Network error. Cannot communicate with api.");
  }
};
