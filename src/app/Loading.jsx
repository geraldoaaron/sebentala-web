
import { Button, Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
    <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default Loading;