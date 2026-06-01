export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-xl space-y-6">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          Digital Studio
        </p>

        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#f0ede6] leading-none">
          Somethings
          <br />
          Off Studio
        </h1>

        <p className="text-neutral-400 text-lg">
          We&apos;re building something. Check back soon.
        </p>

        <a
          href="mailto:hello@somethingsoffstudio.com"
          className="inline-block text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200 border-b border-neutral-700 hover:border-neutral-400 pb-px"
        >
          hello@somethingsoffstudio.com
        </a>
      </div>

      <p className="absolute bottom-8 text-xs text-neutral-700">
        © {new Date().getFullYear()} Somethings Off Studio
      </p>
    </main>
  );
}
