import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ESC_PRICE } from "../../../pages/keyboard";
import { recoilEscLength, recoilTotal } from "../../commons/store";
import { state } from "./state";

let escLength = 0;

export function EscChangeKey() {
  const [, setRecoilEscLength] = useRecoilState(recoilEscLength);
  const [total, setTotal] = useRecoilState(recoilTotal);

  useEffect(() => {
    setTotal(total + escLength * ESC_PRICE);
  }, [escLength]);

  useEffect(() => {
    escLength = Object.values(state.items)[47] !== "#ffffff" ? 1 : 0;
    setRecoilEscLength(Object.values(state.items)[47] !== "#ffffff" ? 1 : 0);
  });

  return <div>{escLength}</div>;
}
