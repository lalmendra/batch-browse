'use client'

import OpenWebsiteListButton from "@/components/OpenWebsiteListButton/OpenWebsiteListButton.jsx"; 

export default function Home() {
  return (
    <div className="button-container">
      <OpenWebsiteListButton buttonName={'routine'} websiteListName={'routine'}/>
      <OpenWebsiteListButton buttonName={'to_do'} websiteListName={'to_do'}/>
      <OpenWebsiteListButton buttonName={'jobs_priority'} websiteListName={'jobs_priority'}/>
      <OpenWebsiteListButton buttonName={'jobs'} websiteListName={'jobs'}/>
      <OpenWebsiteListButton buttonName={'courses'} websiteListName={'courses'}/>
      <OpenWebsiteListButton buttonName={'internships'} websiteListName={'internships'}/>
      <OpenWebsiteListButton buttonName={'freelance'} websiteListName={'freelance'}/>
      <OpenWebsiteListButton buttonName={'newspapers'} websiteListName={'newspapers'}/>
      <OpenWebsiteListButton buttonName={'social_networks'} websiteListName={'social_networks'}/>
    </div>
  );
}
