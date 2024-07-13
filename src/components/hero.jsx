import React from 'react'

export const Hero = () => {
  return (
    <main className="flex flex-col pb-[120px]">
        <div className="mt-28 flex justify-evenly mb-[61px] mr-[120px]">
          <h2 className="text-5xl font-bold">why do people choose me?</h2>
          <div className="text-light-gray">
            <p>Hi. My name is <span className="text-dark-blue">Mark</span>.</p>
            <p>I am a <span className="text-dark-blue">web developer</span> with 7 years of experience.</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <div className="grid grid-cols-2 gap-x-[80px] gap-y-[60px]">
            <div>
              <div className="mb-[22px]">
                <img src="./src/assets/icons/puzzle.svg" alt="" />
              </div>
              <p className="font-bold mb-[10]">Attention to detail</p>
              <p className="text-light-gray w-[250px]">Thorough study of layouts and specifics of display on 
              various devices</p>
            </div>
            <div>
              <div className="mb-[22px]">
                <img src="./src/assets/icons/cube.svg" alt="" />
              </div>
              <p className="font-bold mb-[10]">Modern tools</p>
              <p className="text-light-gray w-[250px]">Tracking and applying modern technologies and web design trends</p>
            </div>
            <div>
              <div className="mb-[22px]">
                <img src="./src/assets/icons/medal.svg" alt="" />
              </div>
              <p className="font-bold mb-[10]">100% reputation</p>
              <p className="text-light-gray w-[250px]">It is important for me not only to hand over the project, but to make it high quality</p>
            </div>
            <div>
              <div className="mb-[22px]">
                <img src="./src/assets/icons/like.svg" alt="" />
              </div>
              <p className="font-bold mb-[10]">No failures</p>
              <p className="text-light-gray w-[250px]">I do not miss deadlines and often close projects ahead 
              of schedule</p>
            </div>
          </div>
          <img className="ml-[74px]" src="./src/assets/imgs/person.jpg" alt="" />
        </div>
      </main>
  )
}
