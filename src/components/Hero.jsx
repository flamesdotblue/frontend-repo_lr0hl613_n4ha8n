import { Heart, Sparkles } from 'lucide-react';

const collage = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502378735452-bc7d86632805?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-3b3ed3ad3f3a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005314-9e0a1f005a53?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1 text-sm text-rose-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Find someone who matches your vibe
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Love at your own pace. Chemistry that feels natural.
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Pulse helps you meet authentic people nearby. Smart matching, real profiles, and meaningful conversations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <Heart className="h-5 w-5" />
                Get Started
              </a>
              <a
                href="#profiles"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
              >
                Browse Profiles
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-rose-200/60 via-fuchsia-200/60 to-sky-200/60 blur-2xl" aria-hidden="true" />
            <div className="relative grid grid-cols-3 gap-3 rounded-3xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
              {collage.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt="People collage"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
