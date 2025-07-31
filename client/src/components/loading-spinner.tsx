export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-[var(--ethiopia-beige)] rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-[var(--ethiopia-brown)] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-[var(--ethiopia-brown)] rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-[var(--ethiopia-brown)] rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-[var(--ethiopia-brown)] rounded-full animate-bounce delay-200"></div>
    </div>
  );
}