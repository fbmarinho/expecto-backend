import prisma from "@/lib/prisma";

import RefreshButton from "./refresh-button";
import UserCard from "./user-card";

export default async function Table() {
  const startTime = Date.now();
  const users = await prisma.users.findMany();
  const duration = Date.now() - startTime;

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}
