This is a small app to open multiple websites at once, each in a different tab.

The user defines groups of websites, according to a desired criteria. Then, each url is stored within its group.

For instance, the user can create one group for 'social networks', another group called 'job search' and a third group for 'courses'.

Then, when the user needs to access all websites from a group, instead of typing each website, the user clicks one button and all websites are opened in different tabs.

The websites are stored in the 'data/website_groups.json' file, where each key is a website group, and the value associated to that key is an array containing the websites you want to open.

After adding or removing groups, you need to make changes to the button list in the main page, which is in the 'app/page.jsx' file.

This app was made using Next.js

To run it:

```bash
npm i
npm run dev
```

Go to 'localhost:3000' and you will see the buttons you configured in the main 'app/page.jsx' file.

You need to rename 'website_groups_example.json' file to 'website_groups.json', so the buttons can work.

You can add or remove urls from each group.

Also, you can add or remove groups, but remember to edit the main 'app/page.jsx' to reflect your changes.

PLEASE NOTE that every time you start the app and click any button, your browser will only open the first link in that group list and then block all the remaining urls. This happens because your browser blocks pop-ups. 
To achieve the app functionality, you have to allow pop-ups for localhost:3000!