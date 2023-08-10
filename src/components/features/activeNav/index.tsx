'use client'
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

interface TabProps {
    title: string;
    path: string
    length?: number;
    status?: boolean;

  }


export const ActiveNav = ({title, path='',  length, status}:TabProps) => {
    const pathname= usePathname();
    const isActive = pathname === path;
    return (
      <Link 
        href={path} 
        passHref 
        className={cn("flex pl-4 h-16 items-center justify-center gap-4", 
          {
            "border-b-4  border-[#00A2D4]":isActive && !status,
            "bg-white":isActive && status,
            "bg-gray-300": isActive && (title === 'Verified' || title === 'Pending')
          })
        }
        >
      <p className={cn("text-base not-italic font-normal leading-6 text-[#959697]", {
          
      'text-gray-900': isActive})}>{title}</p>
      <div className={cn("flex py-1 px-2 mr-3 flex-col justify-center items-center bg-tab rounded-[10px]",{
      
      "bg-orangeTab": status && title ==='Pending' ,
      "bg-[#CFFFEC]": status && title ==='Verified',
        })}>
                    <p className={cn("text-sm not-italic font-normal  text-[#00A2D4]", {
                      'text-[#9E3427]' :status && title ==='Pending',
                      'text-greenTab': status && title ==='Verified',

                    })}>{length}</p>
                  </div>
    </Link>
        
      
    )
}


