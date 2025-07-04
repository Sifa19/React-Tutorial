import { tabContent } from "../../utils/mockData";
import { useState } from "react";

function Tab() {
  return (
    <div className="tab-container">
      <h3>Using Array TC: O(N)</h3>
      <TabUsingArray /> {/*TC: O(N) */}
      <br />
      <h3>Using Object TC: O(N)</h3>
      <TabUsingObject /> {/*TC: O(N) */}
      <br />
      <h3>Using Map TC: O(1)</h3>
      <TabUsingMap /> {/*TC: O(1) */}
    </div>
  );
}

function TabUsingArray() {
  const contentSize = tabContent.length;

  const [activeTab, setActiveTab] = useState(0);
  const [showDetails, setShowDetails] = useState(
    Array.from({ length: contentSize }).map(() => false)
  );
  const [likes, setLikes] = useState(
    Array.from({ length: contentSize }).map(() => 0)
  );

  function toggleShowDetails() {
    setShowDetails((s) => {
      const updated = [...s];
      updated[activeTab] = !updated[activeTab];
      return updated;
    });
  }

  function updateLikes(noLikes) {
    setLikes((l) => {
      const updated = [...l];
      if (noLikes == 0) updated[activeTab] = 0;
      else updated[activeTab] += noLikes;
      return updated;
    });
  }

  return (
    <>
      <div className="tabs">
        {Array.from({ length: contentSize }).map((_, index) => (
          <Button
            key={index}
            tabIndex={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <TabContent
        content={tabContent[activeTab]}
        showDetails={showDetails[activeTab]}
        toggleShowDetails={toggleShowDetails}
        likes={likes[activeTab]}
        updateLikes={updateLikes}
      />
    </>
  );
}

function TabUsingObject() {
  const contentSize = tabContent.length;

  const [activeTab, setActiveTab] = useState(0);

  const [tabsContent, setTabsContent] = useState(
    tabContent.map(() => {
      const newObject = {};
      newObject.likes = 0;
      newObject.isShow = false;
      return newObject;
    })
  );

  function toggleShowDetails() {
    setTabsContent((content) => {
      const updated = [...content];
      updated[activeTab] = {
        ...activeTab,
        isShow: !updated[activeTab]?.isShow,
      };
      return updated;
    });
  }

  function updateLikes(noLikes) {
    setTabsContent((content) => {
      const updated = [...content];
      const likes = noLikes != 0 ? updated[activeTab]?.likes + noLikes : 0;
      updated[activeTab] = { ...updated[activeTab], likes };
      return updated;
    });
  }

  return (
    <>
      <div className="tabs">
        {Array.from({ length: contentSize }).map((_, index) => (
          <Button
            key={index}
            tabIndex={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <TabContent
        content={tabContent[activeTab]}
        showDetails={tabsContent[activeTab]?.isShow}
        toggleShowDetails={toggleShowDetails}
        likes={tabsContent[activeTab]?.likes}
        updateLikes={updateLikes}
      />
    </>
  );
}

function TabUsingMap() {
  const contentSize = tabContent.length;
  const [activeTab, setActiveTab] = useState(0);

  const [tabsMap, setTabsMap] = useState(() => {
    const initial = new Map();
    for (let i = 0; i < contentSize; i++) {
      initial.set(i, { likes: 0, isShow: false });
    }
    return initial;
  });

  function toggleShowDetails() {
    setTabsMap((prevMap) => {
      const newMap = new Map(prevMap);
      const current = newMap.get(activeTab);
      newMap.set(activeTab, { ...current, isShow: !current.isShow });
      return newMap;
    });
  }

  function updateLikes(noLikes) {
    setTabsMap((prevMap) => {
      const newMap = new Map(prevMap);
      const current = newMap.get(activeTab);
      const updatedLikes = noLikes === 0 ? 0 : current.likes + noLikes;
      newMap.set(activeTab, { ...current, likes: updatedLikes });
      return newMap;
    });
  }

  const currentTabData = tabsMap.get(activeTab);

  return (
    <>
      <div className="tabs">
        {Array.from({ length: contentSize }).map((_, index) => (
          <Button
            key={index}
            tabIndex={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <TabContent
        content={tabContent[activeTab]}
        showDetails={currentTabData?.isShow}
        toggleShowDetails={toggleShowDetails}
        likes={currentTabData?.likes}
        updateLikes={updateLikes}
      />
    </>
  );
}

function Button({ tabIndex, activeTab, setActiveTab }) {
  return (
    <button
      key={tabIndex}
      className={`tab ${tabIndex == activeTab ? "selected-tab" : ""}`}
      onClick={() => setActiveTab(tabIndex)}
    >
      Tab {tabIndex + 1}
    </button>
  );
}

function TabContent({
  content,
  showDetails,
  toggleShowDetails,
  likes,
  updateLikes,
}) {
  return (
    <div className="content">
      <h2>{content.summary}</h2>
      <p>
        {showDetails ? content.details : content.details.substring(100) + "..."}
      </p>
      <div className="button-container">
        <button className="details" onClick={() => toggleShowDetails()}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        <span>{likes}</span>
        <button onClick={() => updateLikes(+1)}>👍</button>
        <button onClick={() => updateLikes(-1)}>👎</button>
        <button onClick={() => updateLikes(0)}>⛔</button>
      </div>
      <div className="button-container2">
        <button>Undo</button>
        <button>Undo 2s</button>
      </div>
    </div>
  );
}

export default Tab;
