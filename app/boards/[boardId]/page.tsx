export default function BoardPage({
  params,
  searchParams,
}: {
  params: { boardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      Page {params.boardId}-{JSON.stringify(searchParams)}
    </div>
  );
}
