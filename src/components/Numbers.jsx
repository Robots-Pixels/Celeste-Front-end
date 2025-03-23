import React from 'react'

export default function Numbers() {
  return (
    <div>
        <section className="w-full bg-[#2b2b2b] z-1">
            
            <div
                className="h-120 md:h-30 bg-cover bg-no-repeat bg-fixed flex items-center"
                style={{backgroundImage: "url(/waves.svg)"}}
            >

        <div className="max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 md:gap-20">
            
            <div className="flex flex-col gap-2">
              <div className="text-3xl text-[#cd9d4b] md:text-4xl">
                380
              </div>

              <div className="text-xl">
                CLIENTS EVERY DAYS
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-3xl text-[#cd9d4b] md:text-4xl">
                32
              </div>

              <div className="text-xl">
                YEARS OF EXPERIENCE
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-3xl text-[#cd9d4b] md:text-4xl">
                5
              </div>

              <div className="text-xl">
                PRESTIGIOUS AWARD
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    </div>
  )
}
