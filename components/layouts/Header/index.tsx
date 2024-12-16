"use client"

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {

    const router= useRouter()

    const navCreateJobPage = () => router.push('/post-a-job')

  return (
    <header className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <span>Company</span>
        <span className="font-semibold ">Twitter</span>
      </div>
      <div>
        <Button onClick={navCreateJobPage} className="rounded-none py-3 px-6 bg-primary/90 hover:bg-primary">
          <PlusIcon className="mr-2 w-4 h-4" />
          Post a job
        </Button>
      </div>
    </header>
  );
};

export default Header;
