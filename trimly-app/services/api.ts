const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function getSalons() {
  const response = await fetch(`${API_URL}/salons`);

  if (!response.ok) {
    throw new Error("Failed to fetch salons");
  }

  return response.json();
}

export async function getSalon(id: string | number) {
  const response = await fetch(`${API_URL}/salons/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch salon");
  }

  return response.json();
}

export async function createBooking(data: {
  salon_id: number;
  hairstylist_id?: number | null;
  booking_date: string;
  booking_time: string;
  service_ids: number[];
}) {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.log("CREATE BOOKING ERROR:", result);
    throw new Error(result.message || "Failed to create booking");
  }

  return result;
}

export async function getBookings() {
  const response = await fetch(`${API_URL}/bookings`);

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return response.json();
}

export async function cancelBookingApi(id: number) {
  const response = await fetch(`${API_URL}/bookings/${id}/cancel`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to cancel booking");
  }

  return result;
}

export async function rescheduleBookingApi(
  id: number,
  booking_date: string,
  booking_time: string,
) {
  const response = await fetch(`${API_URL}/bookings/${id}/reschedule`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      booking_date,
      booking_time,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to reschedule booking");
  }

  return result;
}

export async function completeBookingApi(id: number) {
  const response = await fetch(`${API_URL}/bookings/${id}/complete`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to complete booking");
  }

  return result;
}

export async function getBooking(id: number | string) {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch booking");
  }

  return result;
}

export async function submitReviewApi(
  bookingId: number,
  rating: number,
  comment: string,
) {
  const response = await fetch(`${API_URL}/bookings/${bookingId}/review`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      comment,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit review");
  }

  return result;
}

export async function registerApi(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.log("REGISTER ERROR:", result);
    throw new Error(result.message || "Failed to create account");
  }

  return result;
}

export async function loginApi(data: { email: string; password: string }) {
  const url = `${API_URL}/login`;

  console.log("========== LOGIN DEBUG ==========");
  console.log("LOGIN URL:", url);
  console.log("LOGIN DATA:", data.email);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("RESPONSE STATUS:", response.status);

    const result = await response.json();

    console.log("LOGIN RESPONSE:", result);

    if (!response.ok) {
      throw new Error(result.message || "Failed to login");
    }

    return result;
  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
}

export async function getFavoritesApi(token: string) {
  const response = await fetch(`${API_URL}/favorites`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch favorites");
  }

  return result;
}

export async function addFavoriteApi(token: string, salonId: number) {
  console.log("=== ADD FAVORITE REQUEST ===");
  console.log("URL:", `${API_URL}/favorites`);
  console.log("Salon ID:", salonId);
  console.log("Token exists:", !!token);

  const response = await fetch(`${API_URL}/favorites`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      salon_id: salonId,
    }),
  });

  const result = await response.json();

  console.log("STATUS:", response.status);
  console.log("ADD FAVORITE RESPONSE:", result);

  if (!response.ok) {
    throw new Error(result.message || "Failed to add favorite");
  }

  return result;
}

export async function removeFavoriteApi(token: string, salonId: number) {
  const response = await fetch(`${API_URL}/favorites/${salonId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to remove favorite");
  }

  return result;
}

export async function getMeApi(token: string) {
  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch profile");
  }

  return result;
}

export async function logoutApi(token: string) {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to logout");
  }

  return result;
}

export async function updateProfileApi(
  token: string,
  data: {
    name: string;
    email: string;
    phone: string;
  },
) {
  const response = await fetch(`${API_URL}/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.log("UPDATE PROFILE ERROR:", result);
    throw new Error(result.message || "Failed to update profile");
  }

  return result;
}
