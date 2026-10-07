"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SearchForm({ defaultValue }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleClear() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <form className="mx-auto my-8 flex w-full max-w-2xl items-center gap-3 px-4">
      <div className="relative flex-1">
        <input
          type="search"
          name="q"
          placeholder="Search products..."
          defaultValue={defaultValue}
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 pr-12 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/10"
        />

        {defaultValue && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-lg leading-none text-gray-600 transition hover:bg-black hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      <button
        type="submit"
        className="h-12 rounded-xl bg-black px-6 font-medium text-white shadow-sm transition hover:bg-gray-800 active:scale-95"
      >
        Search
      </button>
    </form>
  );
}
