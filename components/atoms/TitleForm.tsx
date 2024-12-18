import React, { FC } from "react";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="texxt-lg font-semibold">{title}</div>
      <div className="text-gray-500">{subtitle}</div>
    </>
  );
};

export default TitleForm;
