"use client";

import { useId, useState } from "react";
import { cn } from "@/lib";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm() {
  const id = useId();
  const [invalid, setInvalid] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = new FormData(event.currentTarget).get("email");
        setInvalid(!EMAIL.test(String(email)));
      }}
      className="flex gap-2"
    >
      <div className="min-w-0 grow lg:grow-0">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          placeholder="Updates in your inbox…"
          aria-invalid={invalid}
          aria-describedby={invalid ? `${id}-error` : undefined}
          onChange={() => setInvalid(false)}
          className={cn(
            "h-11 w-full rounded-pill bg-white px-4 text-label tracking-note text-very-dark-blue outline-offset-0 placeholder:text-muted lg:w-50",
            { "outline outline-error": invalid },
          )}
        />
        <p
          id={`${id}-error`}
          aria-live="polite"
          className="mt-1 px-4 text-label tracking-note text-error-inverse italic empty:mt-0"
        >
          {invalid && "Please insert a valid email"}
        </p>
      </div>

      <button
        type="submit"
        className="v-btn h-11 w-20 v-btn-primary px-0 lg:w-16"
      >
        Go
      </button>
    </form>
  );
}
