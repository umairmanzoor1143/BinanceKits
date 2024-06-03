// /heal/app - version;

import request, { cancellableRequest1 } from 'utils/request';

export const getAppVersion = async () => {
  return cancellableRequest1({
    requestId: 'app-version',
    url: `/heal/app-version`,
    options: {
      method: 'GET',
    },
    customError: {
      statusCodes: [404],
    },
  }).then((res: any) => {
    if (!res.success) {
      throw new Error(res.data.message);
    }
    return res;
  });
};
export const healUser = async () => {
  return request(`/heal/`, {
    method: 'GET',
  }).then((res: any) => {
    if (!res.success) {
      throw new Error(res.data.message);
    }
    return res;
  });
};
