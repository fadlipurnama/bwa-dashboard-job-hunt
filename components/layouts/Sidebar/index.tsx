"use client"

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsBuildings, BsGear } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface SidebarComponentProps {}

const SidebarComponent: FC<SidebarComponentProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-2 px-4 text-lg font-semibold">Dashboard</div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={()=> router.push('/')}
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsBuildings className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineUsergroupAdd className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={()=> router.push('/job-listings')}
            >
              <HiOutlineDocument className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineCalendar className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
          <div className="space-y-4 py-4">
            <div className="px-3 py-2"></div>
          </div>
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="mb-2 px-4 text-lg font-semibold">Settings</div>
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              onClick={()=> router.push('/settings')}
              >
                <BsGear className="mr-2 text-lg" />
                Settings
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none text-red-500 hover:text-red-500 hover:bg-red-200"
              >
                <AiOutlineLogout className="mr-2 text-lg" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
