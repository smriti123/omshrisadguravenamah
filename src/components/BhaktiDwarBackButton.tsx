import { ArrowLeft } from "lucide-react";

const BhaktiDwarBackButton = () => (
  <a
    href="/home-new#explore"
    className="fixed left-3 top-[4.35rem] z-40 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 bg-amber-50/95 px-4 py-2 font-body text-sm font-semibold text-primary shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    aria-label="Back to Bhakti ke Pavan Dwar"
  >
    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
    <span>भक्ति के पावन द्वार</span>
  </a>
);

export default BhaktiDwarBackButton;
