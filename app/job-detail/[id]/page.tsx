import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";

interface JobDetailPageProps {}

const JobDetailPage: FC<JobDetailPageProps> = ({}) => {
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-1">Brand Designer</h1>
          <div>Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetail">Job Detail</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetail">
            <JobDetail />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
