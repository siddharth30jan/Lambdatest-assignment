import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.css";

function App() {
  const Template = ({
    data,
    index,
    setSelectedTemplate,
    selectedTemplate,
    setUserInteraction,
    userInteraction,
  }) => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [height, setHeight] = useState(50);

    useEffect(() => {
      setShowSubtitle(index === selectedTemplate);
      if (!userInteraction && index === selectedTemplate) {
        //Initiate current height and initiate next call
        if (!showSubtitle) {
          let id;
          id = setInterval(() => {
            setHeight((height) => {
              if (height == 255) {
                console.log("Increasing height", height);
                clearInterval(id);

                setSelectedTemplate((index + 1) % 5);

                setShowSubtitle(index === (index + 1) % 5);
              }
              return height + 1;
            });
          }, 10);
        }
      }
    }, [selectedTemplate]);

    useEffect(() => {
      if (selectedTemplate !== index && height != 50) {
        //eleminate height
        let id;
        id = setInterval(() => {
          setHeight((height) => {
            console.log("clearing height", height);
            if (height <= 51) {
              clearInterval(id);
            }
            return --height;
          });
        }, 10);
      }
    }, [selectedTemplate]);

    return (
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          marginBottom: "3px",
          background: height >= 235 ? `#fff` : `#eef5ff`,
          width: "340px",
        }}
        className={
          showSubtitle ? "infoContainer_expanded" : "infoContainer_collapsed"
        }
      >
        <div
          className={`heading && ${!showSubtitle && "faded"}`}
          onClick={() => {
            if (!userInteraction) setUserInteraction(true);
            if (!showSubtitle) {
              let id;
              id = setInterval(() => {
                setHeight((height) => {
                  if (height == 255) {
                    clearInterval(id);
                  }
                  return height + 1;
                });
              }, 10);
              for (let i = 1; i < id; i++) {
                window.clearInterval(i);
              }
              setSelectedTemplate(index);
            }
          }}
        >
          {data.title}
        </div>
        <span className="progress-bar">
          <span
            className="progress-bar__inner"
            style={{ transform: !showSubtitle ? "scaleY(0)" : "scaleY(1)" }}
          ></span>
        </span>
        <div
          className={`${showSubtitle ? "expanded" : "collapsed"}`}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.subTitle}
          <div className="lowerBlock">
            <a
              href="https://www.lambdatest.com/hyperexecute"
              className="learnMore"
            >
              Learn More
              <img
                src="https://www.lambdatest.com/resources/images/slider/arrow.svg"
                className="inline-block"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };
  const Main = () => {
    const data = [
      {
        title: "Automated Testing",
        subTitle:
          "Perform automated browser tests on a scalable, secure, and reliable automation cloud. Run Selenium, Cypress, Appium, Hyperexecute, Playwright and Puppeteer tests at scale on 3000+ browsers and devices.",
        img: (
          <img
            src="https://www.lambdatest.com/resources/images/all_offering_homefold2.png"
            alt="Powerful Cloud Testing Platform"
            className="imageClass"
            width="664"
            height="427"
          ></img>
        ),
      },
      {
        title: "HyperExecute",
        subTitle:
          "Blazing fast test execution on cloud that will beat your local test execution speeds. A LambdaTest exclusive platform that is guaranteed faster than any other cloud grid offering.",
        img: (
          <img
            src="https://www.lambdatest.com/resources/images/slider/Hypertest_silder.png"
            alt="Powerful Cloud Testing Platform"
            className="imageClass"
            width="664"
            height="427"
          ></img>
        ),
      },

      {
        title: "Live Testing",
        subTitle:
          "Perform live interactive cross browser testing of your public or locally hosted websites and web apps on 3000+ real mobile and desktop browsers running on real operating system.",
        img: (
          <img
            src="https://www.lambdatest.com/resources/images/slider/Browser_Testing_silder.png"
            alt="Powerful Cloud Testing Platform"
            className="imageClass"
            width="664"
            height="427"
          ></img>
        ),
      },
      {
        title: "Mobile App Testing",
        subTitle:
          "Perform live interactive testing of your mobile apps on a multitude of Android and iOS devices. Test and debug your mobile apps faster on both Emulators/Simulators or online real device cloud.",
        img: (
          <img
            src="https://www.lambdatest.com/resources/images/slider/App_Testing_silder.png"
            alt="Powerful Cloud Testing Platform"
            className="imageClass"
            width="664"
            height="427"
          ></img>
        ),
      },
      {
        title: "Test at Scale",
        subTitle:
          "Accelerate your whole pipeline from dev to release. Get faster feedback on code changes, manage flaky tests, and keep master green. Industry-leading test intelligence platform.",
        img: (
          <img
            src="https://www.lambdatest.com/resources/images/slider/new/TAS-slider-image.png"
            alt="Powerful Cloud Testing Platform"
            className="imageClass"
            width="664"
            height="427"
          ></img>
        ),
      },
    ];
    const [selectedTemplate, setSelectedTemplate] = useState(0);
    const [userInteraction, setUserInteraction] = useState(false);

    useLayoutEffect(() => {
      let id = setInterval(() => {}, 0);
      for (let i = 1; i < id; i++) {
        window.clearInterval(i);
      }
    }, []);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: "1100px", paddingLeft: "75px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "800" }}>
            Powerful Cloud Testing Platform to Accelerate Your Go-To-Market
          </h2>
          <p style={{ fontSize: "18px", fontWeight: 300 }}>
            Secure, Reliable, and High Performance Test Execution Cloud Built
            For Scale
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "40%", padding: "75px 0 75px 75px" }}>
            {data.map((data, index) => {
              return (
                <div>
                  <Template
                    data={data}
                    index={index}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    userInteraction={userInteraction}
                    setUserInteraction={setUserInteraction}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ width: "60%", display: "flex", alignItems: "center" }}>
            {data[selectedTemplate].img}
          </div>
        </div>
      </div>
    );
  };

  return <Main />;
}

export default App;
