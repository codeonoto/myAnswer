import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className="text-sm font-semibold text-gray-700 ">
            myAnswer is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with Documents in a Snap:{" "}
          <span className="text-green-600">MyAnswer</span> Makes It Simple..!
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Engage in dynamic PDF discussions with myAnswer. Upload your document,
          ask questions, and let the conversation begin instantly!
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank">
          Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Value Proposition Section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"></div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"></div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start Chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Seamlessly unlock instant conversations with your PDFs using
              myAnswer - where easy PDF reading meets effortless chatting..!
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign Up For An Account
              </span>
              <span className="mt-2 text-zinc-700">
                Begin your journey with myAnswer by opting for our free plan, or
                elevate your experience with the{" "}
                <Link
                  href="/pricing"
                  className="text-green-700 underline underline-offset-2">
                  pro plan
                </Link>{" "}
                - the choice is yours!
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF File
              </span>
              <span className="mt-2 text-zinc-700">
                Sit back as we process your file, ensuring it&apos;s perfectly
                primed for you to dive into seamless and enjoyable chats.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start Asking Questions
              </span>
              <span className="mt-2 text-zinc-700">
                Simplicity at its best. Dive into myAnswer today - just a minute
                is all it takes to unlock a world of effortless possibilities!
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading-preview"
                width={1419}
                height={732}
                quality={100}
                priority={true}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-100/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
