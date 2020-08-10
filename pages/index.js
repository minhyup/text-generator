import React from "react";
import MenuLayout from "@/components/layout/MenuLayout";
import "@/styles/style.module.css";
//import favicon from "@/public/favicon.ico";
//import "@/styles/test.css";

export default function Home() {
  return (
    <MenuLayout>
      <div className="test">메인페이지 입니다.</div>
      <div className="hover"></div>
      <img src="/gold.jpg" alt="Vercel Logo" />
    </MenuLayout>
  );
}
