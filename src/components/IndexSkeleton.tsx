import { Skeleton } from "@/components/ui/skeleton";

export const IndexSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 bg-dark">
        <Skeleton className="h-10 w-32 bg-muted/10" />
        <div className="hidden md:flex gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-16 bg-muted/10" />
          ))}
        </div>
        <Skeleton className="h-10 w-28 rounded-full bg-muted/10" />
      </div>

      {/* Hero skeleton - Two columns like real Hero */}
      <div className="relative min-h-screen flex items-center bg-dark px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column */}
            <div className="pt-10 lg:pt-20 space-y-6 text-center lg:text-left">
              {/* Subheader */}
              <Skeleton className="h-4 w-48 bg-muted/10 mx-auto lg:mx-0" />
              {/* Title line 1 */}
              <Skeleton className="h-12 md:h-16 lg:h-20 w-full bg-muted/10 mx-auto lg:mx-0" />
              {/* Title line 2 */}
              <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 bg-muted/10 mx-auto lg:mx-0" />
              {/* Button */}
              <Skeleton className="h-12 w-52 rounded-full bg-muted/10 mx-auto lg:mx-0" />
            </div>
            {/* Right column - circle indicator */}
            <div className="hidden lg:flex justify-end items-center">
              <Skeleton className="w-40 h-40 rounded-full bg-muted/10" />
            </div>
          </div>
        </div>
      </div>

      {/* About skeleton - Two columns */}
      <div className="py-16 md:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left - text content */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-4/5" />
            <Skeleton className="h-10 w-3/5" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
            <div className="pt-2 space-y-2">
              <Skeleton className="h-5 w-56" />
              <Skeleton className="h-5 w-48" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
          {/* Right - image */}
          <Skeleton className="h-[300px] md:h-[450px] w-full rounded-2xl" />
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-16 md:py-28 px-6 sm:px-10 lg:px-16 bg-background">
        <div className="max-w-[1400px] mx-auto">
          {/* Decorative line */}
          <div className="flex justify-center mb-10 md:mb-16">
            <Skeleton className="w-px h-16" />
          </div>
          {/* Header */}
          <div className="text-center space-y-4 mb-10 md:mb-16">
            <Skeleton className="h-4 w-28 mx-auto" />
            <Skeleton className="h-10 w-64 mx-auto" />
          </div>
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-secondary/80 p-6 md:p-8 pt-8 md:pt-10 pb-20 md:pb-24 space-y-4 relative">
                <Skeleton className="absolute top-4 right-4 w-8 h-8 rounded-full" />
                <Skeleton className="w-12 h-12 rounded-xl" />
                <Skeleton className="h-5 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="absolute bottom-4 right-4 w-12 h-12 rounded-full" />
              </div>
            ))}
          </div>
          {/* Show more button */}
          <div className="flex justify-center mt-12">
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
