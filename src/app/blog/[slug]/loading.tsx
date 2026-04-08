export default function Loading() {
  return (
    <main className="flex-grow pt-24 pb-20 relative w-full min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl animate-pulse">
        <div className="flex justify-between items-center mb-10">
            <div className="w-48 h-4 bg-white/5 rounded-md"></div>
            <div className="w-24 h-4 bg-white/5 rounded-md"></div>
        </div>
        
        <div className="w-full h-20 bg-white/5 rounded-lg mb-8"></div>
        
        <div className="w-full h-8 bg-white/5 rounded-md mb-12 border-t border-b border-white/10 py-6"></div>
        
        <div className="w-full h-32 bg-white/5 rounded-lg mb-10"></div>
        
        <div className="w-full h-96 bg-white/5 rounded-xl mb-10"></div>
        
        <div className="space-y-4">
            <div className="w-full h-4 bg-white/5 rounded-md"></div>
            <div className="w-full h-4 bg-white/5 rounded-md"></div>
            <div className="w-3/4 h-4 bg-white/5 rounded-md"></div>
            <div className="w-full h-4 bg-white/5 rounded-md"></div>
            <div className="w-5/6 h-4 bg-white/5 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
