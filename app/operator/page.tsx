import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");
  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", user.id).single();
  if (profile?.role !== "operator") {
    if (profile?.role === "member") redirect("/member");
    if (profile?.role === "operator") redirect("/operator");
    if (profile?.role === "system_admin") redirect("/admin");
    redirect("/auth/login");
  }
  return <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}><h1>Operatör Paneli</h1><p>Hoş geldiniz{profile.full_name ? ", " + profile.full_name : ""}.</p><p>{user.email}</p><p>Rol: operator</p></main>;
}