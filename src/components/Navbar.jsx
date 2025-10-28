import { Heart, MessageCircle, User, Stars } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Pulse</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#explore" className="hover:text-gray-900">Explore</a>
            <a href="#matches" className="hover:text-gray-900">Matches</a>
            <a href="#messages" className="hover:text-gray-900 flex items-center gap-2"><MessageCircle className="h-4 w-4"/>Messages</a>
            <a href="#profile" className="hover:text-gray-900 flex items-center gap-2"><User className="h-4 w-4"/>Profile</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              <Stars className="h-4 w-4 text-amber-500" />
              Upgrade
            </button>
            <button className="inline-flex items-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400">
              Join Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
