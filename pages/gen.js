import React from "react";
import MenuLayout from "@/components/layout/MenuLayout";
import TextGeneratorContainer from "@/components/container/TextGeneratorContainer";
// import TextGeneratorForm from "@/components/general/TextGeneratorForm";
function gen() {
  return (
    <MenuLayout>
      <h1>text generator 영역 입니다.(회원만 입력가능합니다.)</h1>
      {/* <TextGeneratorForm /> */}
      <TextGeneratorContainer />
    </MenuLayout>
  );
}

export default gen;
