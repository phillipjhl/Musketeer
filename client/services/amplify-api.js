import { RestAPI } from "@aws-amplify/api-rest";

const ApiName = 'musketeerapi';

export function post(path, body, options = {}) {
    let defaultOptions = {
        body: body,
        headers: {
            "Accept": "application/json"
        }
    };
    options = { ...defaultOptions, ...options };
    return RestAPI.post(ApiName, path, options);
}
