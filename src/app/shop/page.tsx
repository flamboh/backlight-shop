import Navbar from "@/components/ui/navbar";

export default function Shop() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-[100vh]">
      <Navbar />
      <div className="flex flex-col items-center justify-items-center min-h-[100vh]">
        <h1 className="text-4xl font-bold ">{"Shop"}</h1>
      </div>
    </div>
  );
}
