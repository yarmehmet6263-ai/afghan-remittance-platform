"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Kayıt başarılı. E-posta doğrulaması gerekiyorsa gelen kutunuzu kontrol edin.");
    }

    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 420, margin: "80px auto", padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Üye Ol</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 24 }}>
        <input aria-label="E-posta" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" />
        <input aria-label="Şifre" type="password" minLength={6} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" />
        <button type="submit" disabled={loading}>{loading ? "Kayıt oluşturuluyor..." : "Üye Ol"}</button>
      </form>
      {message && <p role="status">{message}</p>}
      <p style={{ marginTop: 24 }}>Zaten hesabınız var mı? <a href="/auth/login">Giriş yap</a></p>
    </main>
  );
}
