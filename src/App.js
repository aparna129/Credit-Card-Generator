import React, { useState } from "react";
import "./style.css";
import leftbg from "./images/leftbg.png";
import frontcard from "./images/frontcard.png";
import backcard from "./images/backcard.png";
import ellipse1 from "./images/Ellipse 1.png";
import ellipse2 from "./images/Ellipse 2.png";

function App() {
  const [Name, setName] = useState("JaneAppleseed");
  const [Cardno, setCardno] = useState("0000 0000 0000 0000");
  const [Month, setMonth] = useState("00");
  const [Year, setYear] = useState("00");
  const [CVC, setCVC] = useState("000");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Name.length == 0 ||
      Name == "JaneAppleseed" ||
      Cardno.length == 0 ||
      Cardno == "0000 0000 0000 0000" ||
      Cardno.length != 16 ||
      Month.length == 0 ||
      Month == "00" ||
      Month.length > 2 ||
      Month > 12 ||
      Year.length == 0 ||
      Year == "00" ||
      Year.length > 2 ||
      CVC.length == 0 ||
      CVC == "000" ||
      CVC.length > 3
    ) {
      setError(true);
    } else {
      alert("Success");
    }
    if (Name && Cardno && Month && Year && CVC) {
      console.log(
        "Name: ",
        Name,
        "\nCard Number: ",
        Cardno,
        "\nMonth: ",
        Month,
        "\nYear: ",
        Year,
        "\n CVC: ",
        CVC
      );
    }
  };

  return (
    <div>
      <div className="flexbox">
        <div>
          <img
            className="parent"
            src={leftbg}
            height="645px"
            width="500px"
          ></img>
          <div className="front">
            <img src={frontcard} height="250px" width="500px"></img>
            <p className="card-no"> {Cardno}</p>
            <p className="name">{Name}</p>
            <p className="Month-Year">
              {Month}/{Year}
            </p>
            <div className="circle1">
              <img src={ellipse1}></img>
            </div>
            <div className="circle2">
              <img src={ellipse2}></img>
            </div>
          </div>
          <div className="back">
            <img src={backcard} height="250px " width="500px"></img>
            <p className="CVC">{CVC}</p>
          </div>
        </div>
        <div className="card-details">
          <form onSubmit={handleSubmit}>
            <p>CARDHOLDER NAME </p>
            <input
              className="input box1"
              type="text"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
            ></input>{" "}
            {(error && Name.length <= 0) ||
            (error && Name == "JaneAppleseed") ? (
              <p>
                <label> First Name can't be Empty</label>
              </p>
            ) : (
              ""
            )}
            <p> CARD NUMBER </p>
            <input
              className="input box1"
              type="text"
              pattern="[0-9]*"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) => setCardno(e.target.value)}
            ></input>
            {error && Cardno.length <= 0 ? (
              <p>
                <label> Card Number can't be Empty</label>
              </p>
            ) : (
              ""
            )}
            {(error && Cardno.length != 16) ||
            (error && Cardno == "0000 0000 0000 0000") ? (
              <p>
                <label> Card Number is not valid</label>
              </p>
            ) : (
              ""
            )}
            <div className="flex">
              <div className="child1">
                <p> EXP. DATE (MM/YY) </p>
                <input
                  className="input box2"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="MM"
                  onChange={(e) => setMonth(e.target.value)}
                ></input>
                {error && Month.length <= 0 ? (
                  <p>
                    <label> Month can't be Empty</label>
                  </p>
                ) : (
                  ""
                )}
                {(error && Month.length > 2) ||
                (error && Month == "00") ||
                (error && Month > 12) ? (
                  <p>
                    <label> Month is not valid</label>
                  </p>
                ) : (
                  ""
                )}
                <input
                  className="input box2"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="YY"
                  onChange={(e) => setYear(e.target.value)}
                ></input>
                {error && Year.length <= 0 ? (
                  <p>
                    <label> Year can't be Empty</label>
                  </p>
                ) : (
                  ""
                )}
                {error && Year.length > 2 ? (
                  <p>
                    <label> Year is not valid</label>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="child2">
                <p>CVC </p>
                <input
                  className="input box3"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="e.g. 123"
                  onChange={(e) => setCVC(e.target.value)}
                ></input>

                {error && CVC.length <= 0 ? (
                  <p>
                    <label> CVC can't be Empty</label>
                  </p>
                ) : (
                  ""
                )}
                {(error && CVC.length > 3) || (error && CVC == "000") ? (
                  <p>
                    <label> CVC is not valid</label>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button className="btn">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
