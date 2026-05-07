"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Tu nombre, por favor."),
  company: z.string().min(2, "¿De qué organización?"),
  email: z.string().email("Necesitamos un correo válido."),
  vertical: z.enum([
    "notarial",
    "hospital",
    "restaurant",
    "community",
    "professional",
    "other",
  ]),
  message: z.string().min(20, "Cuéntanos un poco más (mínimo 20 caracteres)."),
});

type FormData = z.infer<typeof schema>;

const verticalOptions: { value: FormData["vertical"]; label: string }[] = [
  { value: "notarial", label: "Notarías" },
  { value: "hospital", label: "Hospitales" },
  { value: "restaurant", label: "Restaurantes" },
  { value: "community", label: "Comunidades" },
  { value: "professional", label: "Servicios profesionales" },
  { value: "other", label: "Otro / aún no lo sé" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { vertical: "other" },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    if (typeof window !== "undefined") {
      const subject = `Nueva conversación · ${data.company}`;
      const body = `Nombre: ${data.name}\nEmpresa: ${data.company}\nIndustria: ${data.vertical}\nCorreo: ${data.email}\n\n${data.message}`;
      window.location.href = `mailto:hola@arete.mx?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="border border-line p-10 md:p-14 text-center">
        <p className="eyebrow mb-4">Recibido</p>
        <h3
          className="font-display"
          style={{ fontSize: "var(--text-display-md)" }}
        >
          Gracias. Tu mensaje abrió tu cliente de correo.
        </h3>
        <p className="mt-6 text-mute max-w-md mx-auto leading-relaxed">
          Si no se abrió, escríbeme directo a{" "}
          <a
            href="mailto:hola@arete.mx"
            className="link-underline text-ink font-medium"
          >
            hola@arete.mx
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-10 btn-secondary"
        >
          Enviar otro
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field label="Nombre" error={errors.name?.message}>
          <input
            type="text"
            {...register("name")}
            className="form-input"
            autoComplete="name"
          />
        </Field>
        <Field label="Empresa u organización" error={errors.company?.message}>
          <input
            type="text"
            {...register("company")}
            className="form-input"
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field label="Correo" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className="form-input"
            autoComplete="email"
          />
        </Field>
        <Field label="Industria" error={errors.vertical?.message}>
          <select {...register("vertical")} className="form-input">
            {verticalOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensaje" error={errors.message?.message}>
        <textarea
          rows={6}
          {...register("message")}
          className="form-input resize-none"
          placeholder="¿Qué problema operativo te trae aquí?"
        />
      </Field>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-mute">
          Al enviar aceptas nuestra política de privacidad.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50"
        >
          {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          {!isSubmitting && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--color-line);
          padding: 12px 0;
          font-family: var(--font-body);
          font-size: var(--text-body);
          color: var(--color-ink);
          outline: none;
          transition: border-color 250ms ease;
        }
        .form-input:focus {
          border-color: var(--color-ink);
        }
        select.form-input {
          appearance: none;
          padding-right: 24px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%230A0A0A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/></svg>");
          background-repeat: no-repeat;
          background-position: right center;
        }
        textarea.form-input {
          padding: 12px 0;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      {children}
      {error && (
        <span className="block mt-2 text-xs text-[#A33B2A]">{error}</span>
      )}
    </label>
  );
}
