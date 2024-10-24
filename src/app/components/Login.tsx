"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormError } from "./FormError";
import { db } from "../lib/db";
import { isLoggedIn } from "../lib/isLoggedIn";
import { Card } from "./card";

export const Login = () => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isLoggedIn()) {
      redirect("/dashboard");
    }
  }, []);

  const handleSubmit = (formData: FormData) => {
    const { email, password } = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    if (!email || !password) {
      setError('"Email" and "Password" are required');
      return;
    }

    db.login(email);
    redirect("/dashboard");
  };

  return (
    <Card className="max-w-sm w-full">
      <form action={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4">
          <Input
            label="E-mail"
            type="text"
            id="email"
            name="email"
            placeholder="pikachu@pokecenter.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="pika123"
          />
        </div>
        <Button type="submit">Login</Button>
        {error && <FormError error={error} />}
      </form>
    </Card>
  );
};
