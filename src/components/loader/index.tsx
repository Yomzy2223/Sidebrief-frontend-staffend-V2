import { Skeleton } from "@/components/ui/skeleton"

export const Loader = () => {
    return (
    //     <div className="flex items-center space-x-4">
    //   <Skeleton className="h-12 w-12 rounded-full" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px]" />
    //     <Skeleton className="h-4 w-[100px]" />
    //   </div>
    // </div>
    <div className="m-5">
        {/* <Skeleton className="h-12 w-full " /> */}
        {/* <div className="h-4 w-full bg-gray-100 animate-pulse" /> */}
        <div className="h-7 w-full bg-gray-100 animate-pulse" />
        <div className="space-x-0 space-y-7">
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            <div className="h-4 w-full bg-gray-100 animate-pulse" />
            {/* <div className="flex mt-2">
                <div className="h-4 w-1/5 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-100 animate-pulse ml-4"></div>
            </div>

            <div className="flex mb-1">
                <div className="h-4 w-1/5 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-100 animate-pulse ml-2"></div>
            </div>
            <div className="flex mb-1">
                <div className="h-4 w-1/5 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-100 animate-pulse ml-2"></div>
            </div>

            <div className="flex mb-1">
                <div className="h-4 w-1/5 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-100 animate-pulse ml-2"></div>
            </div> */}
        </div>
    </div>

        /* <div className="flex justify-center items-center h-[50vh">
<Skeleton className="h-12 w-full " />
<div className="h-4 w-full bg-gray-100 animate-pulse" />
<div className="h-4 w-full bg-gray-100 animate-pulse" />
<div className="h-4 w-full bg-gray-100 animate-pulse" />
<div className="h-4 w-full bg-gray-100  animate-pulse" />
<Skeleton className="w-[100px] h-[20px] " />
</div> */

    )
}
