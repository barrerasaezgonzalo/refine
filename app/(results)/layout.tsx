export default function RefineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-900 px-5 py-8 md:px-10">
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center overflow-hidden">
        <div className="relative grid w-full gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-8 lg:items-start font-mono text-neutral-300">
          {children}
        </div>
      </div>
    </main>
  );
}
