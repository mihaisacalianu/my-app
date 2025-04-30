import { FaBookmark } from "react-icons/fa";
export default function Header() {
  return(
    <section className="flex-col gap-2  p-3 border rounded-md border-gray-200">
      <h2><strong>My favorites</strong></h2>
      <div className="flex gap-2 items-center mt-2">
        <p>Add a recipe by clicking on the bookmark icon</p>
        <FaBookmark className="text-lg text-green-600"/>
      </div>
    </section>
  );
}
