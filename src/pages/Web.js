/** @format */

import React from 'react'
import Navbar from '../components/Navbar'
import { CalculatorIcon } from '@heroicons/react/20/solid'
export default function Web() {
  var sectionStyle = {
    backgroundImage: 'url(/Team/background.jpg)',
  }
  var midSectionStyle = {
    backgroundImage: 'url(/Team/midSection.jpg)',
  }
  return (
    <div className="bg-black">
      <Navbar />
      <main className="bg-black">
        <section className="grid grid-cols-2 bg-cover " style={sectionStyle}>
          <div className="realtive ml-24">
            <img
              src="//d1.awsstatic.com/codewhisper/icon_cw_serviceicon.aa72cc4bef89718f83b412b53fe66503f3029719.svg"
              className="mt-12"
            />
            <article className="flex w-[600px] flex-col place-items-start rounded-lg">
              <h1 className="flex justify-center mt-12 font-Ubuntu font-bold text-[64px]">
                Web Development
              </h1>
              <p className=" w-[550px] font-Ubuntu font-medium text-[20px] my-4">
                The Web is amazing and a good way to implent your business model
                in the market. This represent the main channel to grow the
                global economy since the begining of the technological era.
              </p>
              <button className="w-[380px] mt-4 mb-24 py-2 rounded-full bg-orange bg-opacity-80 text-black font-Ubuntu font-semibold text-[16px]">
                Start Now
              </button>
            </article>
          </div>
          <div className="relative ">
            <div className=" absolute left-16 w-[430px] mt-16 bg-black border-1 border-[2px] border-pinkSpace border-opacity-60 rounded-xl cursor-pointer shadow-lg hover:shadow-pinkSpace transition delay-100 ease-in-out duration-200">
              <h2 className=" mt-2 ml-4 font-Ubuntu text-pinkSpace text-[20px]">
                Start knowing our development features
              </h2>
              <ul className="inline-block mt-4 mb-24 ml-4">
                <li className=" my-1 font-Sedwick font-normal text-lg ">
                  - Scrum as agile metodology
                </li>
                <li className="flex my-1 font-Inter font-light text-lg ">
                  - Custom software
                </li>
                <li className="flex my-1 font-Sedwick font-normal  text-lg ">
                  - We meet the requirements
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className="grid grid-cols-2 items-center bg-cover "
          style={midSectionStyle}>
          <article className="ml-24">
            <h2 className="font-Ubuntu font-bold text-[42px] ">
              Automated process
            </h2>
            <p className=" w-[520px] font-Ubuntu font-normal text-[20px] my-4">
              When you build a sofware product you need maximize delivery time
              ensuring quality and performance. Therefore, the enterprise
              supports on the use of trustworthy IA, like Code Whisper and other
              tools
            </p>
          </article>
          <img
            src="/Team/python.png"
            width={700}
            className="shadow-lg hover:shadow-pinkSpace transition delay-100 ease-in-out duration-200"
          />
        </section>
        <section className="grid grid-cols-2 mt-36">
          <div className="flex items-center mx-12">
            <ul className="flex">
              <li className=" px-2 py-2 flex font-Sedwick font-normal text-lg ">
                <span className=" mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64">
                    <linearGradient
                      id="SVGID_1__V6HShIzw21x7_gr1"
                      x1="32"
                      x2="32"
                      y1="9.043"
                      y2="55.011"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#1a6dff"></stop>
                      <stop offset="1" stop-color="#c822ff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGID_1__V6HShIzw21x7_gr1)"
                      d="M51,8H13c-2.8,0-5,2.2-5,5v38c0,2.8,2.2,5,5,5h38c2.8,0,5-2.2,5-5V13C56,10.2,53.8,8,51,8z M54,51	c0,1.7-1.3,3-3,3H13c-1.7,0-3-1.3-3-3V13c0-1.7,1.3-3,3-3h38c1.7,0,3,1.3,3,3V51z"></path>
                    <linearGradient
                      id="SVGID_2__V6HShIzw21x7_gr2"
                      x1="45.578"
                      x2="45.578"
                      y1="35.681"
                      y2="50.191"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#6dc7ff"></stop>
                      <stop offset="1" stop-color="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGID_2__V6HShIzw21x7_gr2)"
                      d="M46.7,41.5l-0.8-0.3c-1.4-0.6-2-1-2-2c0-0.8,0.6-1.4,1.5-1.4c0.8,0,1.3,0.3,1.8,1c0.1,0.2,0.4,0.3,0.7,0.1 l1.7-1.1c0.2-0.1,0.3-0.5,0.2-0.7c-1-1.5-2.4-2.1-4.3-2.1c-2.9,0-4.7,1.8-4.7,4.2c0,2.6,1.5,3.9,3.9,4.8l0.8,0.3 c1.5,0.6,2.2,1,2.2,2.1c0,0.9-0.7,1.6-2,1.6c-1.4,0-2.1-0.8-2.8-1.8c-0.2-0.2-0.5-0.3-0.7-0.1l-1.7,1.1c-0.2,0.1-0.3,0.4-0.2,0.7 c1,1.7,2.6,3,5.4,3c3.1,0,5.3-1.6,5.3-4.5C51,43.8,49.5,42.6,46.7,41.5z"></path>
                    <linearGradient
                      id="SVGID_3__V6HShIzw21x7_gr3"
                      x1="34.081"
                      x2="34.081"
                      y1="35.681"
                      y2="50.191"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#6dc7ff"></stop>
                      <stop offset="1" stop-color="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGID_3__V6HShIzw21x7_gr3)"
                      d="M38.5,35h-2.3c-0.3,0-0.5,0.2-0.5,0.5v10.1c0,1.6-0.6,2-1.7,2c-0.9,0-1.6-0.5-2.1-1.2 c-0.1-0.2-0.4-0.3-0.7-0.1l-1.8,1.1c-0.2,0.1-0.3,0.5-0.2,0.7c0.9,1.5,2.6,2.9,5,2.9c2.9,0,4.8-1.5,4.8-4.9V35.5 C39,35.2,38.8,35,38.5,35z"></path>
                  </svg>
                </span>
                <h2 className="py-4">Javascript</h2>
              </li>
              <li className=" px-2 py-2 flex font-Sedwick font-normal text-lg ">
                <span className=" mx-1"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48">
                  <linearGradient
                    id="atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1"
                    x1="6"
                    x2="42"
                    y1="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#0d61a9"></stop>
                    <stop offset="1" stop-color="#16528c"></stop>
                  </linearGradient>
                  <path
                    fill="url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)"
                    d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"></path>
                  <path
                    d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z"
                    opacity=".05"></path>
                  <path
                    d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z"
                    opacity=".05"></path>
                  <path
                    d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z"
                    opacity=".05"></path>
                  <path
                    fill="#fff"
                    d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"></path>
                  <polygon
                    fill="#fff"
                    points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"></polygon>
                </svg>
                <h2 className="py-4">TypeScript</h2>
              </li>
              <li className=" px-2 py-2 flex font-Sedwick font-normal text-lg ">
                <span className=" mx-1"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48">
                  <path
                    fill="#21a366"
                    d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path>
                  <path
                    fill="#21a366"
                    d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                </svg>
                <h2 className="py-4">Node Js</h2>
              </li>
              <li className="px-2 py-2 flex font-Sedwick font-normal text-lg ">
                <span className=" mx-1"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48">
                  <path
                    fill="#bdbdbd"
                    d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"></path>
                  <path
                    fill="#b71c1c"
                    d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"></path>
                  <path
                    fill="#dd2c00"
                    d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"></path>
                  <path
                    fill="#bdbdbd"
                    d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path>
                  <path
                    fill="#eee"
                    d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path>
                  <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
                  <path fill="#eee" d="M18 24H24V28H18z"></path>
                </svg>
                <h2 className="py-4">Angular Js</h2>
              </li>
            </ul>
          </div>
          <article className="flex flex-col ml-24">
            <h2 className="font-Ubuntu font-bold text-[42px]">
              Tools and Leanguages
            </h2>
            <p className=" w-[500px] font-Sedwick font-normal text-lg my-4">
              The enterprise use bunch of technologies to develop software
              realiable and powerfull. Some of these technologies are very
              popular in the industry for contributes with code open source.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}
