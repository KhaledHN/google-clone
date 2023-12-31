import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Avatar from "@/components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
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
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5 ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className=" flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input type="text" className=" flex-grow focus:outline-none  " />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className=" flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button className="btn">Google Search</button>

          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
