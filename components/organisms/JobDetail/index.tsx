import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

interface JobDetailProps {}

const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, repellat cupiditate quam a vero tenetur officia
                pariatur alias voluptatibus provident sunt commodi minima sequi?
                Nostrum sit praesentium non excepturi expedita?
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Responsibilities</h2>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, repellat cupiditate quam a vero tenetur officia
                pariatur alias voluptatibus provident sunt commodi minima sequi?
                Nostrum sit praesentium non excepturi expedita?
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Who You Are</h2>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, repellat cupiditate quam a vero tenetur officia
                pariatur alias voluptatibus provident sunt commodi minima sequi?
                Nostrum sit praesentium non excepturi expedita?
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Nice-To-Haves</h2>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, repellat cupiditate quam a vero tenetur officia
                pariatur alias voluptatibus provident sunt commodi minima sequi?
                Nostrum sit praesentium non excepturi expedita?
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">About this role</h2>

          <div className="shadow text-center my-6 p-3">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3 h-2" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Aug 2024</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Post On</div>
              <div className="font-semibold">12 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">100$ - 1000$ USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Catgeory</h2>
            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Required Skills</h2>
            <div className="space-x-5">
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge variant={"outline"} key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-semibold ">Perks & Benefits</h2>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

              <div className="text-base font-semibold mb-3">Full Healthcare</div>
              <p className="text-gray-500">
                We believe in thriving communities and that starts with our team being happy and healthy
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
