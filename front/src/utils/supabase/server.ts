import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL! ||
      "https://tibzmcuyztupkpqlrkfu.supabase.co/",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYnptY3V5enR1cGtwcWxya2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjUxMTYsImV4cCI6MjA1Nzg0MTExNn0.xrFVXdYs-18gn9AHmbzE1tnqNeyARQta7VvVZNAu5uI",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
