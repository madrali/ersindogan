import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-sm w-full">
          <Image
            src="/edcut.png"
            alt="Box Office News"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl"
            layout="responsive"
          />
        </div>
        <div className="lg:ml-8">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
