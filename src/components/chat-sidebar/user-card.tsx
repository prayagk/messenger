export default function UserCard({ name }: { name: string }) {
  return (
    <div className="text-xl cursor-pointer p-2 border-black border-b-1 hover:bg-gray-900">
      {name}
    </div>
  );
}
