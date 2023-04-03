export default function ErrorMessage({
  message,
}: {
  message: string | undefined
}) {
  return (
    <div className="w-full text-left">
      <p className="text-red-500 text-xs">{message}</p>
    </div>
  );
}
