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
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />

      <S.HexColorCodeWrapper>
        <S.HexColorCode>Color Code</S.HexColorCode>
        <S.HexColorPickInput
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
      </S.HexColorCodeWrapper>
    </S.HexColorPickerWrapper>
  );
}
