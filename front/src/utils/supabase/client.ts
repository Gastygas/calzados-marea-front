import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL! || "https://tibzmcuyztupkpqlrkfu.supabase.co/",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYnptY3V5enR1cGtwcWxya2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjUxMTYsImV4cCI6MjA1Nzg0MTExNn0.xrFVXdYs-18gn9AHmbzE1tnqNeyARQta7VvVZNAu5uI"
);