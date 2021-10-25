import { api } from '../apiClient';

export const getAccount = () => null;

export const updateAccount = (body) =>
  api.put('/account', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const getFriends = () => null;

export const getPendingRequests = () => null;

export const sendFriendRequest = (id) => api.post(`/account/${id}/friend`);

export const removeFriend = () => null;

export const acceptFriendRequest = (id) =>
  api.post(`/account/${id}/friend/accept`);

export const declineFriendRequest = (id) =>
  api.post(`/account/${id}/friend/cancel`);
