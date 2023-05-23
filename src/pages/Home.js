/** @format */
import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  var sectionStyle = {
    backgroundImage: 'url(/Home/wave.png)',
  }
  var hederStyle = {
    backgroundImage: 'url(/Team/midSection.jpg)',
  }
  var teamStyle = {
    backgroundImage: 'url(/Home/whole.png )',
  }
  return (
    <div className=" container bg-black">
      <header>
        <Navbar />
      </header>
      <main>
        <section className=" grid grid-cols-1 items-center lg:grid-cols-2  mt-12 bg-cover">
          <article className="flex flex-col items-center mt-4 sm:ml-24 sm:place-items-start sm:mt-12">
            <h1 className=" font-Ubuntu font-bold sm:text-[54px]  ">
              Software Development
            </h1>
            <span className="font-Ubuntu font-normal text-[16px] text-space">
              Acecode Enterprises Inc
            </span>
            <p className=" w-[300px] mt-4 font-Ubuntu font-normal sm:w-[540px] sm:text-[20px] ">
              Create software is like approaching space, it is beacoming more
              and more necessary. Acecode brings you closer to the solution that
              your company requires with quality software.
            </p>
            <button className="w-[380px] mt-8 py-2 rounded-full bg-space font-Ubuntu font-bold text-[16px] hover:cursor-pointer hover:bg-opacity-80">
              Start Now
            </button>
            <img src="/Home/rocket.png" className="w-[300px] rounded-lg " />
          </article>
          <div className="relative mx-auto">
            <video
              class="lb-bg-video-tag"
              autoplay="true"
              muted="true"
              preload="auto"
              playsinline="true"
              poster="//d1.awsstatic.com/codewhisper/img_cw_landing_getmoredone.8c3c97dca674b7db2a7586805f953efec7093b7a.png"
              src="//d1.awsstatic.com/codewhisper/cw_get_more_done_faster.3a9084876df23f3a367537ae2be18dc9718f42d3.mp4"
              width={600}
              height={400}
              className="lg:ml-0 lg:w-[600px]"></video>
          </div>
        </section>
        {/* Add Video */}
        {}
        <section
          className="grid grid-cols-1 lg:grid-cols-2 items-center mt-12 bg-cover"
          style={hederStyle}>
          <div className=" w-[600px] mx-auto my-24 rounded-lg border-[1px] border-pinkSpace bg-blue shadow-sm order-2 lg:order-1 ">
            <ul className="inline-block my-24 ml-12 mr-12 ">
              <li className="flex mt-4">
                <span className="mx-6">
                  <img src="/Home/geers.png" width={48} />
                </span>
                <p className="font-Ubuntu font-normal text-[18px] ">
                  No matter the field, we always develop custom software
                </p>
              </li>
              <li className="flex mt-4">
                <span className="mx-6">
                  <img src="/Home/increase.png" width={64} />
                </span>
                <p className="font-Ubuntu font-normal text-[18px] ">
                  Performance is priority for any business model, here we give
                  you the 100% you need
                </p>
              </li>
              <li className="flex mt-4 ">
                <span className="mx-6">
                  <img src="/Home/scalable.png" width={32} />
                </span>
                <p className="font-Ubuntu font-normal text-[18px]">
                  We develop scalable source code to last over time.
                </p>
              </li>
            </ul>
          </div>
          <article className="flex flex-col place-items-start ml-24  lg:order-1 ">
            <h2 className=" font-Ubuntu font-bold text-[42px] my-4 ">
              Features
            </h2>
            <p className="w-[530px] font-Ubuntu font-normal text-[20px]">
              We are the company with the best projection in the last decade.
              The leading technology brands in the market trust us. We improve
              your workflow and scale your businness
            </p>
          </article>
        </section>
        <section className="flex flex-col items-center ">
          <img
            src="/Home/whole.png"
            className="absolute left-2"
            width={200}></img>
          <h2 className="py-12 font-Ubuntu font-bold  text-[42px] ">
            Our Team
          </h2>
          <p className="w-[550px] font-Ubuntu font-normal text-[20px]">
            The work team 🥇 is internationally recognized for its contribution
            and advance in the software Development for different areas of the
            industry 🌍
          </p>
          <div className="grid grid-cols-1 mt-8 justify-items-center cursor-pointer md:grid-cols-2 w-[800px] md:space-x-6 ">
            <Card
              link={'/Team/gaby.png'}
              name={'Gaby Suarez'}
              description={
                'With 5 years of experience developing software in the technology industry. Gaby currently leads the design group at the company.'
              }
              charge={'EXPERT UI/UX DESIGN'}
            />
            <Card
              link={'/Team/andres.png'}
              name={'Sergio Serrano'}
              description={
                'Business leader and CEO of the company. Hes is in charge of establishing an maintining links with partners in the network.'
              }
              charge={'CEO'}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
