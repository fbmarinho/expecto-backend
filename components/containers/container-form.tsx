"use client";

import { useActionState } from "react";
import { create } from "@/actions/container";

const initialState = {
  message: "",
  error: ""
};



export default function CreateForm() {
  const [state, formAction] = useActionState(create, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="rounded text-xl p-3" />
      </div>
      <button type="submit" className="bg-gray-400 p-3 rounded">
        Adicionar
      </button>
    </form>
  );
}
