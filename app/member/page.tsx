import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function MemberPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Üye Alanı</h1>
      <p>Hoş geldiniz.</p>
      <p>{user.email}</p>
    </main>
  );
}
