import React from "react";
import "./Main.css";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Footer from "../components/Footer/Footer";
export default function Main() {
  return (
    <>
      <div className="container-1-block">
        <span className="text-con">
          A World of Knowledge at <br /> Your Fingertips
        </span>
      </div>
      <section className="container-2-block">
        <span>About Us</span>
        <div className="flex">
          <div
            className="dfg-123"
            style={{
              fontSize: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              Learning Together From <br /> the Comfort of <br /> Your Home
            </div>
            <br />
            <span className="button">Learn More</span>
          </div>
          <div className="dfg-456"></div>
        </div>
      </section>
      <section className="container-3-block">
        <div className="position-absolute">Welcome to</div>
        <div style={{ fontSize: "80px", fontWeight: "1000" }}>
          THE NEXT BIG THING
        </div>
      </section>
      <section className="container-4-block">
        <div className="wid-60">
          <span style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
            Our Courses
          </span>
          <div className="text-con-4">
            Your New
            <br />
            Journey Begins Here, <br /> Today
          </div>
        </div>
        <div className="wid-40">
          Enterpreneaurship <br /> made fun
          <br />
          <br />
          <br />
          <span className="button1">Explore Here</span>
        </div>
      </section>
      <section className="container-5-block">
        <div className="da-con"></div>
        <div
          style={{
            flex: "1",
            display: "flex",
            width: "50%",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              width: "50%",
              paddingTop: "40px",
              display: "flex",
              color: "white",
              fontSize: "40px",
              backgroundColor: "rgb(216, 6, 63)",
              textAlign: "center",
            }}
          >
            Digital <br /> Marketing
          </div>
          <div className="con4-img">hi1</div>
        </div>
      </section>
      <section className="container-5-block">
        <div className="flex1 bc-5">
          Product Management <br /> like a pro
          <br />
          <br />
          <br />
          <span className="button1">Explore Here</span>
        </div>
        <div className="flex1 bc-4"></div>
      </section>
      <ImageSlider />
      <div className="back-video">
        <video
          src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute-con">Power of TEN Consulting</div>
        <div className="button2">Explore Here</div>
      </div>
      <Footer />
    </>
  );
}
