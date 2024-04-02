import { PropsWithChildren } from "react";

export default function layoutBoard({
  params,
  children,
}: PropsWithChildren<{
  params: { boardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  return (
    <div>
      <h2>Layout Bord - {children}</h2>
    </div>
  );
}
