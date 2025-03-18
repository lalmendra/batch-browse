'use client'

import websiteGroups from '@/data/website_groups.json'
import styles from '@/components/OpenWebsiteListButton/OpenWebsiteListButton.module.css';

export default function OpenWebsiteListButton({buttonName, websiteListName}) {
    // ATTENTION! I THINK YOU WOULD CHOOSE USING FOREACH, BUT IT DOES NOT RUN ASYNC FUNCTIONS!
    // I LEFT THE EXAMPLE BELOW, BUT IT WILL NEITHER RESPECT THE SETTIMEOUT NOR ANY ASYNC AWAIT FUNCTION

    // function openWebsites() {
    //     websitesList.forEach(link => {
    //         const randomDelay = Math.floor(Math.random() * 1000 + 500); // Random delay between 500ms and 1500ms

    //         setTimeout(() => {
    //                 window.open(link, '_blank');
    //         }, randomDelay);
    //         console.log('LINK: ', link, randomDelay);
    //     })
    // };

    async function openWebsites(websiteList) {
        for (let link of websiteList) {

            // Wait for a random timeout between 500 and 1500 milliseconds
            // await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
            
            // Wait for a fixed timeout of 1000 ms
            await new Promise(resolve => setTimeout(resolve, 500));
            
            window.open(link, '_blank');
        }
        alert('website list finished')
    }


    function openWebsitesCaller(){
        const websiteList = websiteGroups[websiteListName]
        openWebsites(websiteList);
    }

    return (
      <button onClick={openWebsitesCaller} className={styles['open-website-list-button']}>
        {buttonName}
      </button>
    );
};