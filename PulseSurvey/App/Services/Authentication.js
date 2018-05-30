
/* global fetch, Request */

const create = (baseURL) => {
  const login = (email, password) => {
    const payload = {
      grant_type: 'client_credentials',
      client_id: email,
      client_secret: password,
      app_name: 'Feedback',
      app_version: '1.5.2',
      org_id: 1,
    };
    const r = new Request(
      `${baseURL}/v2/app/auth/token`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  };

  const getAppUser = (token) => {
    const r = new Request(
      `${baseURL}/v2/app/auth/self`,
      {
        method: 'GET',
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  };

  return {
    login,
    getAppUser,
  };
};

export default { create };