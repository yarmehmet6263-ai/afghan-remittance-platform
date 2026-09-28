"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
if (!user) { setMessage("Oturum alınamadı."); setLoading(false); return; }
const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
if (!profile) { setMessage("Kullanıcı profili bulunamadı."); setLoading(false); return; }
if (profile.role === "operator") router.push("/operator");
else if (profile.role === "system_admin") router.push("/admin");
else router.push("/member");
router.refresh();
  }

  return (
    <main style={{ maxWidth: 420, margin: "80px auto", padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 24 }}>
        <input aria-label="E-posta" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" />
        <input aria-label="Şifre" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" />
        <button type="submit" disabled={loading}>{loading ? "Giriş yapılıyor..." : "Giriş Yap"}</button>
      </form>
      {message && <p role="alert">{message}</p>}
      <p style={{ marginTop: 24 }}>Henüz hesabınız yok mu? <a href="/auth/sign-up">Üye ol</a></p>
    </main>
  );
}
