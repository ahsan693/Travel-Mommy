'use client';

import { useRouter } from 'next/navigation';

export default function SearchWidget() {
  const router = useRouter();

  return (
    <div className="relative w-full">
      <iframe
        title="TravelMommy flight search"
        src="/flights-widget.html"
        className="w-full min-h-[400px] border-0 bg-transparent lg:min-h-[160px]"
        onClick={() => router.push('/searchwidgetpage')}
      />
      <button
        type="button"
        aria-label="Open full search widget"
        className="absolute inset-0 cursor-pointer"
        onClick={() => router.push('/searchwidgetpage')}
      />
    </div>
  );
}