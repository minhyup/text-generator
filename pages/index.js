import React from "react";
import MenuLayout from "@/components/layout/MenuLayout";
import "@/styles/style.module.css";
import { useDispatch, useSelector } from "react-redux";
//import favicon from "@/public/favicon.ico";
//import "@/styles/test.css";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => ({ user: state.user }));
  console.log(user);

  const reT = () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: "test" });
      }, 2000);
    };
  };
  const test = () => {
    dispatch(reT());
  };
  // dispatch(
  //   (() => {
  //     return (dispatch) => {
  //       setTimeout(() => {
  //         dispatch({ type: "test" });
  //       }, 1000);
  //     };
  //   })()
  // );
  // console.log(
  //   "test!!",
  //   useSelector((state) => state)
  // );
  //dispatch({ type: "test" });
  // console.log(
  //   "test2",
  //   useSelector((state) => state)
  // );

  return (
    <MenuLayout>
      <div className="test">메인페이지 입니다.</div>
      <div className="hover"></div>
      <img src="/hor.jpg" alt="해오름 Logo" />
      <video
        className=""
        src="https://player.vimeo.com/external/418321067.sd.mp4?s=a6dce4e09cdc909847a902c7054f45e4ecf5c01e&amp;profile_id=165"
        poster="https://dev.does.kr/2017/1703_picnic/_resource/_web/images/service/detail/pet01_video_poster.jpg"
        controls
        playsInline
      ></video>
      <button onClick={test}>test</button>
    </MenuLayout>
  );
}
