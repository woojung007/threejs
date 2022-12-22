import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { SPACEBAR_PRICE } from "../../../pages/keyboard";
import { recoilSpaceLength, recoilTotal } from "../../commons/store";
import { state } from "./state";

let spacebarLength = 0;

export default function SpaceBarChangeKey() {
  const [, setRecoilSpaceLength] = useRecoilState(recoilSpaceLength);
  const [total, setTotal] = useRecoilState(recoilTotal);

  useEffect(() => {
    setTotal(total + spacebarLength * SPACEBAR_PRICE);
  }, [spacebarLength]);

  useEffect(() => {
    spacebarLength = Object.values(state.items)[33] !== "#ffffff" ? 1 : 0;
    setRecoilSpaceLength(Object.values(state.items)[33] !== "#ffffff" ? 1 : 0);
  });

  return <div>{spacebarLength}</div>;
}
