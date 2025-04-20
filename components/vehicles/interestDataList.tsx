import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const MOCK_INTERESTING_DATA = [
  {
    name: "ปลอดภัย",
    value: "9.37%",
  },
  {
    name: "สะดวก",
    value: "7.43%",
  },
  {
    name: "ทนทาน",
    value: "6.34%",
  },
  {
    name: "เดินทาง",
    value: "5.64%",
  },
  {
    name: "น่าเชื่อถือ",
    value: "2.34%",
  },
  {
    name: "น่าเชื่อถือ1",
    value: "2.14%",
  },
  {
    name: "น่าเชื่อถือ2",
    value: "1.64%",
  },
  {
    name: "น่าเชื่อถือ3",
    value: "1.34%",
  },
  {
    name: "น่าเชื่อถือ4",
    value: "0.34%",
  },
];

export default function InterestDataList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-xl top-3">ข้อมูลน่าสนใจ</CardTitle>
      </CardHeader>
      <CardContent className="max-h-40 overflow-y-auto">
        <ul className="space-y-5">
          {MOCK_INTERESTING_DATA.map((data) => (
            <li className="flex w-full pr-3 justify-between" key={data.name}>
              <p>{data.name}</p>
              <p>{data.value}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
