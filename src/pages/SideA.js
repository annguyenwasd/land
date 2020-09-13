import React from "react";
import { useRecoilState } from "recoil";
import Side from "../components/Side";
import { sideA as sideAAtom } from "../state";

function SideA() {
  const [sideA, setSideA] = useRecoilState(sideAAtom);
  return <Side sideName="A" people={sideA} onChange={(ppl) => setSideA(ppl)} />;
}

SideA.propTypes = {};

SideA.defaultProps = {};

export default React.memo(SideA);
