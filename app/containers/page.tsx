import React from "react";
import prisma from "@/lib/prisma";
import CreateForm from "@/components/containers/container-form";

export default async function page() {
  const containers = await prisma.container.findMany();

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <p>Containers</p>
      <div>
        <p>Lista</p>
        {containers.map((container, i) => (
          <div key={i}>{container.name}</div>
        ))}
      </div>

      <CreateForm />
    </div>
  );
}
