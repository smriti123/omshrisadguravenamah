import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BhaktiDwarBackButton = () => (
  <Link
    to="/#explore"
    className="fixed left-3 top-[4.35rem] z-40 inline-flex min-h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-amber-50/90 p-0 font-body text-sm font-semibold text-primary shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    aria-label="Back"
  >
    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
  </Link>
);

export default BhaktiDwarBackButton;
