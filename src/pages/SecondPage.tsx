import { Link } from "react-router-dom";
import centerPortrait from "@/assets/swamiji-photo.jpg";
import topFoot from "@/assets/pic5.jpg";
import leftFoot from "@/assets/pic2.jpg";
import rightFoot from "@/assets/pic3.jpg";
import bottomLeft from "@/assets/pic4.jpg";
import bottomRight from "@/assets/pic1.jpg";

const petals = [
  { id: 1, image: topFoot, className: "top-4 left-1/2 -translate-x-1/2" },
  { id: 2, image: leftFoot, className: "top-32 left-2 md:left-10" },
  { id: 3, image: rightFoot, className: "top-32 right-2 md:right-10" },
  { id: 4, image: bottomLeft, className: "bottom-20 left-2 md:left-10" },
  { id: 5, image: bottomRight, className: "bottom-20 right-2 md:right-10" },
];

const SecondPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-amber-100 px-4 py-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-amber-300/80 bg-[radial-gradient(circle_at_center,_#fff7e6_0%,_#f6e3c4_45%,_#ecd2a7_100%)] shadow-2xl">
        <header className="flex items-center justify-between border-b border-amber-300/70 px-5 py-4 md:px-10">
          <h1 className="text-lg font-semibold tracking-wide text-amber-900 md:text-2xl">
            चरण वंदन
          </h1>
          <Link
            to="/"
            className="rounded-full border border-amber-600/70 bg-white/80 px-4 py-1.5 text-sm font-medium text-amber-900 transition hover:bg-amber-100"
          >
            Back to Home
          </Link>
        </header>

        <section className="relative overflow-hidden px-2 py-8 md:px-8 md:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,_#d8b26c_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="relative mx-auto h-[860px] w-full max-w-[980px] md:h-[980px]">
            {petals.map((petal) => (
              <article
                key={petal.id}
                className={`absolute ${petal.className} flex h-56 w-56 flex-col items-center rounded-t-[8rem] rounded-b-[2rem] border-4 border-amber-300 bg-white/70 p-2 shadow-xl backdrop-blur-sm md:h-72 md:w-72`}
              >
                <span className="absolute -top-4 right-3 grid h-10 w-10 place-items-center rounded-full border-2 border-amber-200 bg-rose-900 text-lg font-bold text-amber-100">
                  {petal.id}
                </span>
                <img
                  src={petal.image}
                  alt={`Charan image ${petal.id}`}
                  className="h-full w-full rounded-t-[7rem] rounded-b-[1.6rem] object-cover"
                />
              </article>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-amber-300 bg-gradient-to-b from-amber-100 to-orange-100 p-3 shadow-[0_0_80px_rgba(217,119,6,0.45)] md:h-96 md:w-96">
              <img
                src={centerPortrait}
                alt="Pujya Swamiji"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 w-[94%] max-w-2xl -translate-x-1/2 rounded-[2.5rem] border border-amber-300/80 bg-white/70 px-6 py-8 text-center shadow-xl backdrop-blur-sm md:px-12">
              <p className="text-2xl leading-relaxed text-amber-950 md:text-4xl">
                हे शंकर-रूप! हे वेदांत-मूर्ति!
                <br />
                हे ब्रह्मसूत्र, उपनिषद्, भगवद्गीता
                <br />
                रामायण व भागवत के मूर्तिमान स्वरूप!
              </p>
              <p className="mt-4 text-xl text-amber-800 md:text-3xl">ॐ पूर्णमदः पूर्णमिदं…</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SecondPage;
