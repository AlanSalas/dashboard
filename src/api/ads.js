import API from "./config";

export const getAds = async () => await API.get("/ads");

export const postAd = async (newAd) => await API.post("/ads", newAd);

export const putAd = async (id, ad) => await API.put(`/ads/${id}`, ad);

export const removeAd = async (id) => await API.delete(`/ads/${id}`);
