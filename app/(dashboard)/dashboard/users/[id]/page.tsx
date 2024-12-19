export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return <h1 className="text-3xl">USER {id} DETAILS </h1>;
}
