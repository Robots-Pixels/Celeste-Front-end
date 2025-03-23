import React from "react";

export default function CoreFeatures() {
  return (
    <section className="w-full bg-[#2b2b2b] z-1">
      <div
        className="h-120 md:h-54 bg-cover bg-no-repeat bg-fixed flex items-center"
        style={{backgroundImage: "url(/waves.svg)"}}
      >
        <div className="max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-3xl md:text-4xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="seedling"
                  className="svg-inline--fa fa-seedling "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"
                  ></path>
                </svg>
              </div>
              <div className="text-xl text-[#cd9d4b]">
                Exquisite Culinary Craftsmanship
              </div>
              <div className="max-w-96">
                <p className="text-sm md:text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  id.
                </p>
              </div>
            </div>

            <div className="hidden md:block p-1 rotate-45 bg-[#cd9d4b]"></div>

            <div className="flex flex-col gap-2">
              <div className="text-3xl md:text-4xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="mobile-screen"
                  className="svg-inline--fa fa-mobile-screen "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"
                  ></path>
                </svg>
              </div>
              <div className="text-xl text-[#cd9d4b]">
                Effortless Online Reservations
              </div>
              <div className="max-w-96">
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  id.
                </p>
              </div>
            </div>

            <div className="hidden md:block p-1 rotate-45 bg-[#cd9d4b]"></div>

            <div className="flex flex-col gap-2">
              <div className="text-3xl md:text-4xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user-group"
                  className="svg-inline--fa fa-user-group "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                  ></path>
                </svg>
              </div>
              <div className="text-xl text-[#cd9d4b]">
                Personalized Guest Experience
              </div>
              <div className="max-w-96">
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
