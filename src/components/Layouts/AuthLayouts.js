import ImagePlaceholder from "../Elements/ImagePlaceholder";

const AuthLayouts = props => {
  const {children, title} = props;
  return (
    <div className="flex w-full h-screen items-center">
      <ImagePlaceholder />
      <div className="flex-col flex justify-center w-1/2 h-screen bg-gray-950 items-center">
        <h1 className="text-center text-mandarin text-2xl font-bold">
          Welcome back!
        </h1>
        <h6 className="text-center text-metal font-medium mb-6">
          {title} and pick your weapon!
        </h6>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
