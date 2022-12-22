import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ENTER_PRICE } from "../../../pages/keyboard";
import { recoilEnterLength, recoilTotal } from "../../commons/store";
import { state } from "./state";

let enterLength = 0;

export default function EnterChangeKey() {
  const [, setRecoilEnterLength] = useRecoilState(recoilEnterLength);
  const [total, setTotal] = useRecoilState(recoilTotal);

  useEffect(() => {
    setTotal(total + enterLength * ENTER_PRICE);
  }, [enterLength]);

  useEffect(() => {
    enterLength = Object.values(state.items)[14] !== "#ffffff" ? 1 : 0;
    setRecoilEnterLength(Object.values(state.items)[14] !== "#ffffff" ? 1 : 0);
  });

  return <div>{enterLength}</div>;
}
