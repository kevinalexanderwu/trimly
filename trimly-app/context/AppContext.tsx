import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Booking, INITIAL_BOOKINGS } from "../constants/data";
import { getMeApi } from "../services/api";

type ToastType = "success" | "error";
type Toast = { msg: string; type: ToastType } | null;

type User = {
  name: string;
  email: string;
  phone: string;
};

type AppContextValue = {
  favorites: number[];
  toggleFavorite: (salonId: number) => void;
  isFavorite: (salonId: number) => boolean;

  bookings: Booking[];
  addBooking: (b: Booking) => void;
  cancelBooking: (id: string) => void;
  markRated: (id: string) => void;

  toast: Toast;
  showToast: (msg: string, type?: ToastType) => void;

  user: User;
  updateUser: (u: Partial<User>) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([1, 3]);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [toast, setToast] = useState<Toast>(null);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  const loadUser = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        console.log("NO AUTH TOKEN");
        return;
      }

      const result = await getMeApi(token);

      const profile = result.user ?? result;

      setUser({
        name: profile.name ?? "",
        email: profile.email ?? "",
        phone: profile.phone ?? "",
      });

      console.log("CONTEXT USER:", profile);
    } catch (error) {
      console.error("LOAD USER ERROR:", error);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const toggleFavorite = useCallback((salonId: number) => {
    setFavorites((prev) =>
      prev.includes(salonId)
        ? prev.filter((id) => id !== salonId)
        : [...prev, salonId],
    );
  }, []);

  const isFavorite = useCallback(
    (salonId: number) => favorites.includes(salonId),
    [favorites],
  );

  const showToast = useCallback((msg: string, type: ToastType = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  }, []);

  const addBooking = useCallback((b: Booking) => {
    setBookings((prev) => [b, ...prev]);
  }, []);

  const cancelBooking = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" as const } : b,
      ),
    );
  }, []);

  const markRated = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, rated: true } : b)),
    );
  }, []);

  const updateUser = useCallback((u: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...u }));
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
      bookings,
      addBooking,
      cancelBooking,
      markRated,
      toast,
      showToast,
      user,
      updateUser,
    }),
    [
      favorites,
      toggleFavorite,
      isFavorite,
      bookings,
      addBooking,
      cancelBooking,
      markRated,
      toast,
      showToast,
      user,
      updateUser,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
