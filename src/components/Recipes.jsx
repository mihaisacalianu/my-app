export default function Header() {
  return(
    <section className="flex-col gap-2">
      <h2>Browse recipes by ingredient</h2>
      <form action="" className="flex gap-3 mt-2">
        <input type="text" placeholder="Search for a recipe..." className="border rounded-md border-gray-200 p-1"/>
        <button className="bg-blue-400 text-white py-0.4 px-2 rounded-sm">Search</button>
      </form>
    </section>
  );
}
