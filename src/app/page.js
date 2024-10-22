import Image from "next/image";
import HomePage from "./(pages)/home/page";
import GesturesPage from "./(pages)/home/gestures.js/page";
import ViewBasedAnimation from "./(pages)/view-based-animation/page";
import ScrollBasedAnimation from "./(pages)/scroll-based-animation/page";

export default function Home() {
  return (
    <main>
      <div>
        {/* <HomePage /> */}
        {/* <GesturesPage /> */}
        {/* <ViewBasedAnimation /> */}
        <ScrollBasedAnimation />
      </div>
    </main>
  );
}
