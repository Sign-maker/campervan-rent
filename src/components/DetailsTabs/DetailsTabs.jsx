import { Fragment, useState } from "react";
import css from "./DetailsTabs.module.css";

export const DetailsTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <div>
      <ul className={css.tabList}>
        {tabs.map(({ tabName }, idx) => (
          <li key={idx} className={css.tab}>
            <button
              className={`${css.tabBtn} ${activeTab === idx && css.tabActive}`}
              type="button"
              onClick={() => handleTabClick(idx)}
            >
              {tabName}
            </button>
          </li>
        ))}
      </ul>
      {tabs.map((tab, idx) =>
        activeTab === idx ? (
          <Fragment key={idx}>{tab.tabComponent}</Fragment>
        ) : null
      )}
    </div>
  );
};
