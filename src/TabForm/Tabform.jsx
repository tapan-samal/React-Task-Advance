import React, { useState } from "react";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";
import "./tab-form.css";

const Tabform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "tapan",
    age: 30,
    email: "tapan@google.com",
    interests: ["sports", "coding"],
    theme: "dark",
  });

  const [error, setError] = useState({});

  //Config drive UI
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Enter valid name!";
        }
        if (!data.age || data.age < 18) {
          err.age = "Enter valid age!";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Enter valid email!";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        let err = {};
        if (data.interests.length < 1) {
          err.interests = "Provide atleast one interest!";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState - 1);
    }
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState + 1);
    }
  };
  const handleSubmitClick = () => {
    //API call
    // console.log(data);
    alert("Form submitted successfully!")
  };
  return (
    <>
      <h1>Tabs Form</h1>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="tab"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            <h5> {tab.name}</h5>
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      <div className="click-btn">
        <div>
          {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        </div>
        <div>
          {activeTab < tabs.length - 1 && (
            <button onClick={handleNextClick}>Next</button>
          )}
        </div>
        <div>
          {activeTab === tabs.length - 1 && (
            <button onClick={handleSubmitClick}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabform;
