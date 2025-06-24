import React, { Suspense } from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import bgImage from "./bg.png";
import logo from "./logo.png";

// Lazy load the Spline component
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  return (
    <div className=" relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* 3D Model - positioned behind content but above background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-100 border-2 border-white mix-blend-screen">
        <Suspense fallback={<div className="w-full h-full"></div>}>
          <Spline
            scene="https://prod.spline.design/PNsGO-iV5PCTFW2B/scene.splinecode"
            style={{
              width: "1300px",
              height: "1000px",
              top: "10%",
              position: "relative",
            }}
          />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-6 py-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-12 h-12" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Company
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-white transition-colors duration-200">
                Sign In
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex justify-center items-center px-6 py-12 sm:px-8 lg:px-12">
          <div className="max-w-7xl w-full text-center space-y-6">
            <div className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white border border-white/20 justify-center">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 10,000+ companies worldwide</span>
            </div>

            <h1 className="text-[26px] md:text-[54px]   font-bold text-white leading-tight">
              Build the
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Future{" "}
              </span>
              Today
            </h1>

            <p className="text-[12] md:text-[16px] text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Transform your business with cutting-edge technology solutions.
              Streamline operations, boost productivity, and stay ahead of the
              competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-[15px] md:text-[18px] group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="text-[15px] md:text-[18px] group bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Proof */}
        <div className="px-6 py-8  sm:px-8 lg:px-12">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 py-8 justify-center pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2.5M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                Microsoft
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                Google
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                Amazon
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                Netflix
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                Spotify
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
