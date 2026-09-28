"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Status = "checking" | "connected" | "error";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<Status>("checking");
  const [message, setMessage] = useState("Supabase bağlantısı kontrol ediliyor...");

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession()
      .then(({ error }) => {
        if (!mounted) return;

        if (error) {
          setStatus("error");
          setMessage(error.message);
          return;
        }

        setStatus("connected");
        setMessage("Supabase bağlantısı başarılı.");
      })
      .catch((error: unknown) => {
        if (!mounted) return;

        setStatus("error");
        setMessage(error instanceof Error ? error.message : "Supabase bağlantısı kurulamadı.");
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Supabase Connection Test</h1>
      <p>
        Durum:{" "}
        <strong>
          {status === "checking"
            ? "Kontrol ediliyor"
            : status === "connected"
              ? "Bağlandı"
              : "Hata"}
        </strong>
      </p>
      <p>{message}</p>
    </main>
  );
}
