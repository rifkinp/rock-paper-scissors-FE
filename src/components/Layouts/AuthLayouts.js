import ImagePlaceholder from "../Elements/ImagePlaceholder";
import TitleH1 from "../Elements/TitleH1";

const AuthLayouts = props => {
  const {children, title} = props;
  return (
    <div className="flex w-full h-full items-center">
      <ImagePlaceholder />
      <div className="flex-col flex justify-center w-1/2 h-full bg-gray-950 items-center">
        <TitleH1 title1="Welcome Back" />
        <h6 className="text-center text-metal font-medium mb-6">
          {title} and pick your weapon!
        </h6>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
