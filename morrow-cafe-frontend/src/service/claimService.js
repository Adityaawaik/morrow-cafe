const API_URL = import.meta.env.VITE_API_URL;

export const postClaimOffer = async (name, phoneNumber) => {
  try {
    const response = await fetch(`${API_URL}/api/claim`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone: phoneNumber,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Unable to connect to the server.");
  }
};
