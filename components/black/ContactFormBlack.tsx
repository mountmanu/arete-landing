"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Su nombre, por favor."),
  firm: z.string().min(2, "Indique la casa o firma."),
  role: z.string().min(2, "¿Cuál es su cargo?"),
  email: z.string().email("Necesitamos un correo válido."),
  country: z.enum(["MX", "CO", "OTRO"]),
  branches: z.enum(["1", "2-4", "5-9", "10+"]),
  preferred: z.enum(["correo", "llamada", "presencial"]),
  message: z.string().min(20, "Cuéntenos un poco más (mínimo 20 caracteres)."),
});

type FormData = z.infer<typeof schema>;

const countryOptions: { value: FormData["country"]; label: string }[] = [
  { value: "MX", label: "México" },
  { value: "CO", label: "Colombia" },
  { value: "OTRO", label: "Otro país" },
];

const branchOptions: { value: FormData["branches"]; label: string }[] = [
  { value: "1", label: "Una boutique" },
  { value: "2-4", label: "2 a 4 boutiques" },
  { value: "5-9", label: "5 a 9 boutiques" },
  { value: "10+", label: "10 o más" },
];

const preferredOptions: { value: FormData["preferred"]; label: string }[] = [
  { value: "correo", label: "Correo" },
  { value: "llamada", label: "Llamada" },
  { value: "presencial", label: "Visita presencial" },
];

export function ContactFormBlack() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "MX",
      branches: "2-4",
      preferred: "correo",
    },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    if (typeof window !== "undefined") {
      const subject = `Areté Black · Solicitud de acceso · ${data.firm}`;
      const body = [
        `Nombre: ${data.name}`,
        `Cargo: ${data.role}`,
        `Casa / firma: ${data.firm}`,
        `País: ${data.country}`,
        `Boutiques: ${data.branches}`,
        `Correo: ${data.email}`,
        `Canal preferido: ${data.preferred}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:black@arete.mx?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="border border-line p-10 md:p-14 text-center bg-[var(--color-paper-pure)]">
        <p className="eyebrow text-gold mb-4">Recibido</p>
        <h3
          className="font-display"
          style={{ fontSize: "var(--text-display-md)" }}
        >
          Gracias. Le responderemos en menos de 48 horas.
        </h3>
        <p className="mt-6 text-mute max-w-md mx-auto leading-relaxed">
          Si necesita contactar directamente, escriba a{" "}
          <a
            href="mailto:black@arete.mx"
            className="link-underline text-gold font-medium"
          >
            black@arete.mx
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-10 btn-secondary"
        >
          Enviar otra solicitud
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
            className="form-input-black"
            autoComplete="name"
          />
        </Field>
        <Field label="Cargo" error={errors.role?.message}>
          <input
            type="text"
            {...register("role")}
            className="form-input-black"
            autoComplete="organization-title"
            placeholder="Director general, CFO, oficial de cumplimiento…"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field label="Casa o firma" error={errors.firm?.message}>
          <input
            type="text"
            {...register("firm")}
            className="form-input-black"
            autoComplete="organization"
          />
        </Field>
        <Field label="Correo" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className="form-input-black"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Field label="País" error={errors.country?.message}>
          <select {...register("country")} className="form-input-black">
            {countryOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Boutiques activas" error={errors.branches?.message}>
          <select {...register("branches")} className="form-input-black">
            {branchOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Canal preferido" error={errors.preferred?.message}>
          <select {...register("preferred")} className="form-input-black">
            {preferredOptions.map((o) => (
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
          className="form-input-black resize-none"
          placeholder="¿Qué obligación de cumplimiento le trae aquí? ¿Hay un evento regulatorio próximo?"
        />
      </Field>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-mute max-w-sm">
          Sus datos se mantienen bajo confidencialidad. Solo el fundador
          recibe esta solicitud.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50"
        >
          {isSubmitting ? "Enviando…" : "Solicitar acceso"}
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
        .form-input-black {
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
        .form-input-black::placeholder {
          color: var(--color-mute);
          opacity: 0.7;
        }
        .form-input-black:focus {
          border-color: var(--color-gold);
        }
        select.form-input-black {
          appearance: none;
          padding-right: 24px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%23C9A961' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/></svg>");
          background-repeat: no-repeat;
          background-position: right center;
        }
        select.form-input-black option {
          background: #0A0908;
          color: #F5F1E8;
        }
        textarea.form-input-black {
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
      <span className="eyebrow text-gold mb-2 block">{label}</span>
      {children}
      {error && (
        <span className="block mt-2 text-xs text-[#D97755]">{error}</span>
      )}
    </label>
  );
}
