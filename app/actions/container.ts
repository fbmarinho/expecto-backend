"use server";

import prisma from "@/lib/prisma";
import { Container } from "@prisma/client";
import { error } from "console";

export async function create(
  initialStat: { message: string },
  formData: FormData
) {
  // Mutate data
  if (!formData || formData.get("name") == "") {
    return {
      message: "",
      error: "empty",
    };
  }

  const container: Container = {
    id: 1,
    type: formData.get("type") as string,
    name: formData.get("name") as string,
    serial: formData.get("serial") as string,
    dimensions: formData.get("dimensions") as string,
    loadtest: new Date(Date.parse(formData.get("loadtest") as string)),
    expiration: 12,
    createdAt: new Date(Date.now()),
  };

  const response = await prisma.container.create({ data: container });

  return {
    message: "ok",
  };
}
