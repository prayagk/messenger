export default function Header({ name }: { name: string }) {
  return <div className="text-2xl px-5 py-3 border-b border-black">{name}</div>;
}
