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

      {/* Hero skeleton */}
      <div className="relative min-h-screen flex items-center bg-dark px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <Skeleton className="h-5 w-40 bg-muted/10" />
          <Skeleton className="h-14 w-full bg-muted/10" />
          <Skeleton className="h-14 w-3/4 bg-muted/10" />
          <Skeleton className="h-5 w-2/3 bg-muted/10" />
          <Skeleton className="h-12 w-40 rounded-full bg-muted/10" />
        </div>
      </div>

      {/* About skeleton */}
      <div className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          <Skeleton className="h-80 w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-20 px-6 sm:px-10 lg:px-16 bg-muted/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center space-y-3 mb-12">
            <Skeleton className="h-4 w-28 mx-auto" />
            <Skeleton className="h-10 w-64 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
