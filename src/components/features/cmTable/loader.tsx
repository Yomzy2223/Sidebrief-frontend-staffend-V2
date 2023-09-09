import { Skeleton } from "@/components/ui/skeleton"

export const Loader = () => {
    return (
    <div className="m-5">
        <Skeleton className="h-7 w-full bg-gray-100" />
        <div className="space-x-0 space-y-7">
            <Skeleton className="h-4 w-full bg-gray-100" />
            <Skeleton className="h-4 w-full bg-gray-100" />
            <Skeleton className="h-4 w-full bg-gray-100" />
            <Skeleton className="h-4 w-full bg-gray-100" />
            <Skeleton className="h-4 w-full bg-gray-100" />
            <Skeleton className="h-4 w-full bg-gray-100" />
        </div>
    </div>
    )
}
