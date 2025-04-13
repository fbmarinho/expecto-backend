"use client";
import { useActionState, useEffect } from "react";
import { create } from "@/actions/container";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
  error: "",
};

type StateType = {
  message: string;
  error: string;
};

export default function CreateForm() {
  const [state, formAction, isPending] = useActionState<StateType, FormData>(
    create,
    initialState
  );

  const router = useRouter();

  // Atualiza a página após sucesso
  useEffect(() => {
    if (state.message && !isPending) {
      router.refresh(); // Isso revalida os dados do servidor
    }
  }, [state, isPending, router]);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="rounded text-xl p-3" />
      </div>
      <button type="submit" className="bg-gray-400 p-3 rounded">
        Adicionar
      </button>
      {isPending ? "Loading..." : state.message}
    </form>
  );
}
