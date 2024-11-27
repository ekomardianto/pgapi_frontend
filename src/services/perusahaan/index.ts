import instance from "@/lib/axios/instance";
const perusahaanServices = {
  getAllPerusahaans: (token: string) =>
    instance.get("/api/perusahaans", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getPerByIdArray: (id: string, token: string) =>
    instance.get(`/api/perusahaans/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  addPerusahaan: (data: any, token: string) =>
    instance.post("/api/perusahaan", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getSearchPer: (search: string, token: string) =>
    instance.get(`/api/perusahaanSearch/${search}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  deletePer: (data: any, token: string) =>
    instance.delete(`/api/perusahaan`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    }),
  updatePer: (id: string, data: any, token: string) =>
    instance.put(`/api/perusahaan/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default perusahaanServices;
