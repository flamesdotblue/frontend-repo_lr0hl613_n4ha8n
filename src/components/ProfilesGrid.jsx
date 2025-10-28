import { MapPin, Star, MessageCircle, Heart } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'Maya, 27',
    location: 'San Francisco',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    tags: ['Hiking', 'Coffee', 'Indie Films'],
  },
  {
    id: 2,
    name: 'Liam, 29',
    location: 'New York',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1200&auto=format&fit=crop',
    tags: ['Tech', 'Street Food', 'Museums'],
  },
  {
    id: 3,
    name: 'Aisha, 26',
    location: 'Austin',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    tags: ['Live Music', 'Yoga', 'Dogs'],
  },
  {
    id: 4,
    name: 'Noah, 31',
    location: 'Seattle',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Photography', 'Thrifting', 'Books'],
  },
  {
    id: 5,
    name: 'Sofia, 28',
    location: 'Chicago',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1524504388940-1f96cfd2f54b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Baking', 'Pilates', 'Art'],
  },
  {
    id: 6,
    name: 'Ethan, 30',
    location: 'Los Angeles',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1544005313-3b3ed3ad3f3a?q=80&w=1200&auto=format&fit=crop',
    tags: ['Surfing', 'Startups', 'Travel'],
  },
];

export default function ProfilesGrid() {
  return (
    <section id="profiles" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular near you</h2>
            <p className="mt-1 text-gray-600">Handpicked profiles based on your interests.</p>
          </div>
          <a href="#explore" className="text-sm font-medium text-rose-600 hover:text-rose-500">See all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
              </div>
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {p.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-amber-700">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{p.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
                    <MessageCircle className="h-4 w-4" />
                    Message
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500">
                    <Heart className="h-4 w-4" />
                    Like
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
