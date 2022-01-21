export default function Loader() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center dark:bg-[#121212] bg-[#121212] ">
      <div className="font-semibold loader text-sky-500 animate-spin"></div>
      <div className="absolute font-semibold text-sky-400 animate-bounce ">
        MaxinAI
      </div>
    </div>
  );
}
