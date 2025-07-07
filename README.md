# React Post Viewer App

This is a React application that displays posts fetched from an external API using Redux Toolkit for state management. The app supports pagination, card removal with dynamic reflow, and a 5-second startup loader.

## Features

* Fetch posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
* Display 6 cards per page
* Pagination with Previous, Next, and Page Number navigation
* Remove card via Close Button and dynamically fill the view with the next post to maintain 6 cards
* Direct page jump by clicking page number buttons
* 5-second loading screen on app startup
* Global state management using **useContext Hook**

---
