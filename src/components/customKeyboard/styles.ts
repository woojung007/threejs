import styled from "@emotion/styled";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ProductLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;

  color: #fff;

  margin-bottom: 23px;
`;

export const SeeIcon = styled.img`
  width: 38px;
  height: 38px;

  margin-top: 5px;
  cursor: pointer;
`;

export const ProductSelectWrapper = styled.div`
  width: 908px;
  height: 80vh;
  display: flex;

  background: none;
  border: 1px solid #f1f1f1;

  border-radius: 10px;
`;

export const TwoDColorWrapper = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;

  margin-top: auto;
`;

export const TwoDImage = styled.img`
  width: 231px;
  height: 177px;
  background-color: #c4c4c4;
  margin-left: 30px;
`;

export const PickerWrapper = styled.div`
  background-color: transparent;
  position: absolute;
  z-index: 10;
`;

export const HexColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
`;

export const HexColorPick = styled(HexColorPicker)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const HexColorCodeWrapper = styled.div`
  display: flex;
`;

export const HexColorCode = styled.span`
  font-size: 14px;
  line-height: 30px;
  margin-right: 10px;
  color: #f1f1f1;
`;

export const HexColorPickInput = styled(HexColorInput)`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
  color: #f1f1f1;
`;

export const ThreeDWrapper = styled.div`
  width: 100%;
  margin-bottom: -200px;

  cursor: pointer;
`;

export const PriceWrapper = styled.div`
  width: 300px;
  margin-left: 20px;
`;

export const Options = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #666;
`;

export const OptionTableWrapper = styled.div`
  width: 300px;
  height: 524px;
  border: 1px solid #666;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

export const OptionLine = styled.div`
  padding: 0px 20px;
`;

export const OptionHeader = styled.div`
  width: 298px;
  height: 80px;
  display: flex;
  background: #2c2c2c;

  padding-top: 30px;

  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #666;
`;

export const OptionName = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin-left: 20px;
`;

export const OptionCount = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #fff;

  margin-left: 68px;
`;

export const OptionPrice = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #fff;

  margin-left: 81px;
`;

export const Option1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 23px;
  padding-bottom: 23px;

  border-bottom: 1px solid #666;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option1Name = styled.div`
  width: 70px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;

  color: #1b1b1b;
`;

export const Option1Count = styled.div`
  width: 15px;
  font-size: 16px;
  line-height: 24px;

  color: #1b1b1b;
`;

export const Option1Price = styled.div`
  width: 70px;
  font-size: 16px;
  line-height: 24px;
  text-align: right;

  color: #1b1b1b;
`;

export const Total1Count = styled(Option1Name)`
  font-weight: 700;
  font-size: 16px;
`;

export const TotalPrice = styled(Option1Price)`
  font-weight: 700;
`;

export const TotalAccount = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #666;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const GetCouponButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 13px;
  height: 60px;
  padding-right: 18px;
  background: url("/images/coupon/coupon.png") no-repeat;
  cursor: pointer;
`;

export const CouponText = styled.span`
  width: 240px;
  color: #b150f2;
  font-size: 20px;
  text-align: center;
`;

export const GetCouponImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const PayNowButton = styled.button`
  height: 60px;
  background: #b150f2;
  border: none;
  border-radius: 10px;
  color: #f1f1f1;
  font-size: 20px;
  margin-bottom: 13px;
`;

export const AddToCartButton = styled.button`
  height: 60px;
  font-size: 20px;
  border: 1px solid #666;
  border-radius: 10px;
`;
