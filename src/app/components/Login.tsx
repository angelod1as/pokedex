"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormError } from "./FormError";
import { db } from "../lib/db";
import { checkLogin } from "../lib/checkLogin";

export const Login = () => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (checkLogin()) {
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
    <form action={handleSubmit}>
      <div className="">
        <Input
          label="E-mail"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        ></Input>
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        ></Input>
        <Button type="submit">Login</Button>
        {error && <FormError error={error} />}
      </div>
    </form>
  );
};
