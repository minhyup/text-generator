import React from "react";
import MenuLayout from "@/components/layout/MenuLayout";
import TeamRegisterForm from "@/components/general/TeamRegisterForm";

function team() {
  return (
    <MenuLayout>
      <h1>팀등록 영역 입니다.(회원만 입력가능합니다.)</h1>
      <TeamRegisterForm />
    </MenuLayout>
  );
}

export default team;
