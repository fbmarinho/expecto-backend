"use server";

import prisma from "@/lib/prisma";

type StateType = {
  message: string;
  error: string;
};

export async function create(prevState: StateType, formData: FormData) {
  // Mutate data
  if (!formData || formData.get("name") == "") {
    return {
      message: "",
      error: "Não pode ficar em branco",
    };
  }

  const container = {
    type: "container",
    name: formData.get("name") as string,
    serial: "222",
    dimensions: "11 x 1 x 1",
    loadtest: new Date(Date.now()),
    expiration: 12,
    createdAt: new Date(Date.now()),
  };

  const response = await prisma.container.create({ data: container });

  return {
    message: "ok",
    error: "",
  };
}
