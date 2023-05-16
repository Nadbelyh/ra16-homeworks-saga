export const fetchAPI = async (id = null) => {
  const response = await fetch(
    !id
      ? "http://localhost:7070/api/services"
      : `http://localhost:7070/api/services/${id}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
