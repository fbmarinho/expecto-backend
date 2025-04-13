"use server";

import prisma from "@/lib/prisma";
import { Container } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
    type: "container",
    name: formData.get("name") as string,
    serial: "222",
    dimensions: "11 x 1 x 1",
    loadtest: new Date(Date.now()),
    expiration: 12,
    createdAt: new Date(Date.now()),
  };

  const response = await prisma.container.create({ data: container });

  revalidatePath("/containers")
}
