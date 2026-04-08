export default function Loading() {
  return (
    <main className="flex-grow pt-24 pb-20 relative w-full min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl animate-pulse">
        {/* Breadcrumb Skeleton */}
        <div className="w-48 h-4 bg-white/5 rounded-md mb-8"></div>
        
        {/* Title Skeleton */}
        <div className="w-3/4 h-16 bg-white/5 rounded-lg mb-6"></div>
        
        {/* Subtitle / Overview Skeleton */}
        <div className="w-full h-24 bg-white/5 rounded-lg mb-12"></div>
        
        {/* Features / Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 h-48 border-white/5"></div>
          <div className="glass-card p-8 h-48 border-white/5"></div>
        </div>
        
        {/* Secondary Section Skeleton */}
        <div className="glass-card p-10 h-64 border-white/5 mb-16"></div>
      </div>
    </main>
  );
}
