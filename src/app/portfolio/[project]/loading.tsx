export default function Loading() {
  return (
    <main className="flex-grow pt-24 pb-20 relative w-full min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl animate-pulse">
        <div className="w-48 h-4 bg-white/5 rounded-md mb-8"></div>
        
        <div className="w-full h-16 bg-white/5 rounded-lg mb-6"></div>
        
        <div className="w-full h-32 bg-white/5 rounded-lg mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="h-32 bg-white/5 rounded-lg"></div>
          <div className="h-32 bg-white/5 rounded-lg"></div>
        </div>
        
        <div className="glass-card p-10 h-48 border-white/5 mb-16"></div>
      </div>
    </main>
  );
}
