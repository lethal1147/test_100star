import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type BaseSelectorType = {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  withAllOption?: boolean;
  label: string;
};

export default function BaseSelector({
  value,
  onChange,
  options,
  label,
  withAllOption = true,
}: BaseSelectorType) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-white text-black">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {withAllOption && <SelectItem value="all">All</SelectItem>}
          {options.map((val) => (
            <SelectItem key={val} value={val}>
              {val}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
