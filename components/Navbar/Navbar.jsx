import howToPlayToast from "../toasts/howToPlayToast";
import {
  CubeTransparentIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { bgColorState, bgImageState } from "../../atoms/bgAtom";
import getImage from "../../utilities/getImage";
// import getColor from "../../utilities/getColor";

const Navbar = () => {
  const [bgImage, setBgImage] = useRecoilState(bgImageState);
  // const [bgColor, setBgColor] = useRecoilState(bgColorState);

  const handleBgImageColor = () => {
    // setBgColor(getColor);
    setBgImage(getImage);
  };

  return (
    <div className='flex w-full px-3 justify-between items-center shadow-lg  bg-white/80'>
      <CubeTransparentIcon
        className='hover:scale-105 h-6 w-6 transition-all ease-in cursor-pointer '
        onClick={handleBgImageColor}
      />
      <h1 className='lg:py-3 py-2 lg:text-3xl text-2xl dark:text-white heading'>
        Anidle
      </h1>
      <InformationCircleIcon
        className='hover:scale-105 h-7 w-7 transition-all ease-in cursor-pointer '
        onClick={howToPlayToast}
      />
    </div>
  );
};

export default Navbar;
