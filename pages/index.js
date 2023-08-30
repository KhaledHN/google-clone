import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Avatar from "@/components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}
      <header className=" flex w-full p-5 justify-between text-sm text-gray-700 ">
        {/* Left */}
        <div className=" flex space-x-4 items-center ">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className=" flex space-x-4 items-center ">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className=" h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer " />

          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/a/AAcHTtcdNoItMI_Enq1Er0axcEKntEvQJUyKK38e1aGFu4L-DInI=s288-c-no" />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  );
}
