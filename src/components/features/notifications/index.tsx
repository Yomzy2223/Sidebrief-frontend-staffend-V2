import Image from "next/image";
import { Button } from "@/components/ui/button";
import Notification from "@/assets/icons/Notification.svg";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const userNotifications = [
  {
    id: "1",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "2 mins ago",
  },
  {
    id: "2",
    title: "Access Request",
    message: "Ola@gtbank.com request for access to the dashboard",
    timeline: "1 min ago",
  },
  {
    id: "3",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "just now",
  },
  {
    id: "4",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "5 min ago",
  },
];

// type CardProps = React.ComponentProps<typeof Card>

export const NotificationCard = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger> */}
        <Image src={Notification} alt={"profile icon"} className="w-8 h-8 " />
        {/* </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="m-4 w-[calc(100vw-32px)] sm:w-380" align="end" forceMount>
        <>
          <div className="flex items-center justify-between m-4 space-y-2">
            <div>
              {/* <CardTitle className="flex items-center"> */}
              <p className="text-sm font-semibold">Notifications</p>
              {/* </CardTitle> */}
            </div>
            <div className="flex items-center mx-1 space-x-3">
              <p className="underline text-destructive">Delete</p>
              <p className="underline">Clear all</p>
            </div>
          </div>

          <div className="m-4 notificationsContainer">
            {userNotifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <Checkbox />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    <p className="py-2 text-xs text-muted-foregroun">{notification.message}</p>
                  </div>
                  <div className="text-sm timeline whitespace-nowrap mb-7">
                    <p>{notification?.timeline}</p>
                  </div>
                </div>

                <div className="flex m-5 space-x-4 buttons">
                  <div>
                    <Button
                      variant={"outline"}
                      className="items-center justify-center gap-2 bg-transparent border-2 text-destructive rounded-8 border-destructive"
                    >
                      Decline
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-secondary">Accept</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
