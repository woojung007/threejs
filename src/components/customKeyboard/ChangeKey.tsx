import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { KEY_PRICE } from "../../../pages/keyboard";
import { recoilLength, recoilTotal } from "../../commons/store";
import { state } from "./state";

let length = 0;

export default function ChangeKey() {
  const [, setRecoilLength] = useRecoilState(recoilLength);
  const [total, setTotal] = useRecoilState(recoilTotal);

  useEffect(() => {
    setTotal(total + length * KEY_PRICE);
  }, [length]);

  useEffect(() => {
    if (
      Object.values(state.items)[14] !== "#ffffff" ||
      Object.values(state.items)[33] !== "#ffffff" ||
      Object.values(state.items)[47] !== "#ffffff"
    ) {
      if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[33] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          3;

        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 3
        );
      } else if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[33] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else if (
        Object.values(state.items)[33] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else if (
        Object.values(state.items)[14] !== "#ffffff" &&
        Object.values(state.items)[47] !== "#ffffff"
      ) {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          2;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 2
        );
      } else {
        length =
          Object.values(state.items).filter((el) => el !== "#ffffff").length -
          1;
        setRecoilLength(
          Object.values(state.items).filter((el) => el !== "#ffffff").length - 1
        );
      }
    } else {
      length = Object.values(state.items).filter(
        (el) => el !== "#ffffff"
      ).length;
      setRecoilLength(
        Object.values(state.items).filter((el) => el !== "#ffffff").length
      );
    }
  });

  return <div>{length}</div>;
}
