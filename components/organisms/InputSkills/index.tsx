import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobFormSchema } from "@/lib/form-schema";
import { PlusIcon } from "lucide-react";
import React, { FC, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface InputSkillsProps {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
}

const InputSkills: FC<InputSkillsProps> = ({ form }) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValues = () => {
    const value = inputRef.current?.value;

    if (value === "") {
      return;
    }

    const newValue: any = [...values, value];

    setValues(newValue);

    form.setValue("requiredSkills", newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item != value);

    setValues(skills);
    form.setValue("requiredSkills", skills);
  };
  return (
    <FormField
      control={form.control}
      name={"requiredSkills"}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">Add Skils</FormLabel>
          <FormControl>
            <div>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Skills
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input ref={inputRef} className="w-[246px]" />
                  <Button type="button" onClick={handleSaveValues}>
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((item: string, key: number) => (
                  <Badge
                    variant={"outline"}
                    key={item}
                    role="button"
                    onClick={() => {
                      console.log(item, "|", "key:", key);
                      handleDeleteValue(item);
                    }}
                  >
                    {item}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  </Badge>
                ))}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSkills;