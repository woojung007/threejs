import { useSnapshot } from "valtio";
import { state } from "./state";
import * as S from "./styles";

export default function ColorPicker() {
  const snap = useSnapshot(state);
  console.log("snap", snap);
  return (
    <S.HexColorPickerWrapper>
      <S.HexColorPick
        className="picker"
        // @ts-ignore
        color={snap.items[snap.current]}
        // @ts-ignore
        onChange={(color) => (state.items[snap.current] = color)}
      />

      <S.HexColorCodeWrapper>
        <S.HexColorCode>Color Code</S.HexColorCode>
        <S.HexColorPickInput
          // @ts-ignore
          color={snap.items[snap.current]}
          // @ts-ignore
          onChange={(color) => (state.items[snap.current] = color)}
        />
      </S.HexColorCodeWrapper>
    </S.HexColorPickerWrapper>
  );
}
