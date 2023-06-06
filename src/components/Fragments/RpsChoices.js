import RpsImageContainer from "../Elements/RpsImageContainer";
import IMAGES from "../Assets";

const RpsChoices = props => {
  const {title, id} = props;
  return (
    <div className="w-1/3 h-full flex flex-col justify-center items-center p-5 bg-gray-200">
      <div className="h-1/6 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {title}
        </h2>
      </div>
      <div className="h-5/6 flex flex-col justify-between">
        <RpsImageContainer src={IMAGES.RpsBatu} id={id + "batu"} />
        <RpsImageContainer src={IMAGES.RpsKertas} id={id + "kertas"} />
        <RpsImageContainer src={IMAGES.RpsGunting} id={id + "gunting"} />
      </div>
    </div>
  );
};

export default RpsChoices;
