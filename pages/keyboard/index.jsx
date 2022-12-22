import * as S from "../../src/components/customKeyboard/styles";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { Expo } from "gsap";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import {
  recoilEnterLength,
  recoilEscLength,
  recoilLength,
  recoilSpaceLength,
  recoilTotal,
} from "../../src/commons/store";
import React from "react";
import { state } from "../../src/components/customKeyboard/state";
import { EscChangeKey } from "../../src/components/customKeyboard/EscChangeKey";
import SpaceBarChangeKey from "../../src/components/customKeyboard/SpaceBarChangeKey";
import EnterChangeKey from "../../src/components/customKeyboard/EnterChangeKey";
import ColorPicker from "../../src/components/customKeyboard/ColorPicker";
import Keyboard from "../../src/components/customKeyboard/Keyboard";
import ChangeKey from "../../src/components/customKeyboard/ChangeKey";

export const ESC_PRICE = 7000;
export const SPACEBAR_PRICE = 8000;
export const ENTER_PRICE = 10000;
export const KEY_PRICE = 6000;

export default function ThreeJsPage() {
  useSnapshot(state);
  // useRef();
  // useMousePosition();

  const [seeImageHover, setSeeImageHover] = useState(false);
  const [escLength] = useRecoilState(recoilEscLength);
  const [spacebarLength] = useRecoilState(recoilSpaceLength);
  const [enterLength] = useRecoilState(recoilEnterLength);
  const [length] = useRecoilState(recoilLength);
  const [listPosition] = useState({
    top: 0,
    left: 0,
  });
  const [total] = useRecoilState(recoilTotal);

  return (
    <>
      <S.Wrapper>
        <S.ProductWrapper>
          <S.ProductLeftWrapper>
            <S.TitleWrapper>
              <S.ProductTitle>RAZER HUNTSMAN MINI</S.ProductTitle>

              <S.SeeIcon
                src="/images/see.png"
                onClick={() => setSeeImageHover((prev) => !prev)}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: seeImageHover ? 1 : 0,
                  x: listPosition.left,
                  y: listPosition.top,
                }}
                transition={{
                  ease: Expo.easeOut,
                  duration: 0.3,
                }}
              >
                <img
                  src="/images/keyboard.jpeg"
                  style={{
                    position: "absolute",
                    width: "200px",
                    zIndex: "999",
                    borderRadius: "10px",
                  }}
                  alt="keyboard"
                />
              </motion.div>
            </S.TitleWrapper>

            <S.ProductSelectWrapper>
              <S.PickerWrapper>
                <ColorPicker />
              </S.PickerWrapper>

              <S.ThreeDWrapper>
                <Canvas
                  style={{
                    width: "100%",
                    backgroundColor: "none",
                    // zIndex: "3",
                  }}
                  camera={{
                    fov: 45,
                    near: 0.2,
                    position: [0, 0.7, 0.6],
                  }}
                >
                  <Suspense fallback={null}>
                    <Keyboard />
                    <Environment preset="city" />
                  </Suspense>
                  <OrbitControls enableZoom={true} enablePan={false} />
                </Canvas>
              </S.ThreeDWrapper>
            </S.ProductSelectWrapper>
          </S.ProductLeftWrapper>

          <S.PriceWrapper>
            <S.OptionTableWrapper>
              <S.OptionHeader>
                <S.OptionName>Option</S.OptionName>
                <S.OptionCount>Qty</S.OptionCount>
                <S.OptionPrice>Price</S.OptionPrice>
              </S.OptionHeader>

              <S.OptionLine>
                <S.Option1Wrapper>
                  <S.Option1Name>Origin</S.Option1Name>
                  <S.Option1Count>1</S.Option1Count>
                  <S.Option1Price>169000</S.Option1Price>
                </S.Option1Wrapper>

                <S.Option1Wrapper>
                  <S.Option1Name>ESC</S.Option1Name>
                  <S.Option1Count>
                    <EscChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{escLength * ESC_PRICE}</S.Option1Price>
                </S.Option1Wrapper>

                <S.Option1Wrapper>
                  <S.Option1Name>Spacebar</S.Option1Name>
                  <S.Option1Count>
                    <SpaceBarChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>
                    {spacebarLength * SPACEBAR_PRICE}
                  </S.Option1Price>
                </S.Option1Wrapper>

                <S.Option1Wrapper>
                  <S.Option1Name>Enter</S.Option1Name>
                  <S.Option1Count>
                    <EnterChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{enterLength * ENTER_PRICE}</S.Option1Price>
                </S.Option1Wrapper>

                <S.Option1Wrapper>
                  <S.Option1Name>KeyPad</S.Option1Name>
                  <S.Option1Count>
                    <ChangeKey />
                  </S.Option1Count>
                  <S.Option1Price>{length * KEY_PRICE}</S.Option1Price>
                </S.Option1Wrapper>

                <S.Option1Wrapper style={{ border: "none" }}>
                  <S.Total1Count>
                    <div>Total</div>
                  </S.Total1Count>
                  <S.TotalPrice>₩{total}</S.TotalPrice>
                </S.Option1Wrapper>
              </S.OptionLine>
            </S.OptionTableWrapper>
          </S.PriceWrapper>
        </S.ProductWrapper>
      </S.Wrapper>
    </>
  );
}
