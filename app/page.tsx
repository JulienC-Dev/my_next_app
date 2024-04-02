import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  return (
    <ul>
      Home - Users:
      {allUsers.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
      <button>
        <a href="/boards/new">Click me!</a>
      </button>
    </ul>
  );
}
