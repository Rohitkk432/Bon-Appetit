# Bon-Appetit
DevSoc Project for Core reviews

## About
Food delivery website based in Goa.

## Table of Contents
- [Browser Support 🌐](#browser-support)
- [Installation 🐣](#installation)
- [Contribution Guidelines ✒](#contribution-guidelines)
- [How to use ? 📖](#how-to-use)
- [Current Implementations 👨‍💻](#current-implementations)
- [Pending Implementations ](#pending-implementations)
- [Future Implementations 💻](#future-implementations)
- [Things Learned ☕](#things-learned)
- [Things Played around with ☕](#things-played-around-with)
- [SnapShots](#snapshots)

## Browser Support
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 3 versions | last 3 versions | last 3 versions | last 3 versions |

## Installation

Follow these steps to install this project directory:

```
# clone the repo
$ git clone https://github.com/Rohitkk432/Bon-Appetit.git

# go into app's directory:
$ cd Bon-Appetit

```

## Contribution Guidelines
1. **Fork** the repo on GitHub.
2. **Clone** the project to your own machine.
3. **Commit** changes to your own branch.
4. **Push** your work back up to your fork.
5. **Submit** a pull request.
(Make sure you *merge* before you make a pull request!)

### Pull Request Guidelines
1. The subject should be a short one line summary of the change you've made.
2. The extended description should include a deatiled description of the changes you've made and also a list of all the files you've made changes in.
3. One pull request should cater to only one change. *A change may include multiple file changes that are essential to solving the issue/change.

## How to use?
1. Login using BITS Mail.<br />
2. You can search and choose the restaurant (currently 5 restaurants available).<br />
3. After that one will be introduced to restaurants menu divided by category which can be choosed from left tab.<br />
4. After choosing category dishes are seperated under subcategories.<br />
5. One can choose dish that they want to order by tapping on "+" and choosing customizations and adding it to cart.<br />
6. Your orders list will be visible on right side tab in Desktop view.<br />
------Further steps not implemented yet------<br />
7. And after choosing all dishes one desired he can click on checkout button in right tab or go to orders tab using nav bar.<br />
8. And place the order (order would be accepted, cooked,  dispatched and delivered by specific time hardcoded as dummy delivery).<br />

## Current Implementations
1. Login using Google Integrated Login.
2. Searching restaurants and navigating to dishes.
3. Choosing customizations and adding to cart.
4. Displaying orders on rightside tab.

## Pending Implementations
2. Confirming order on orders page and delivery.
3. Mobile view.

## Future Implementations
1. Widening search to dishes rather than just restaurants , and upon clicking it directly navigating to that dish in its restaurant page.
2. Using map to show better delivery status if used in real world app not dummy.


## Things Learned
1. Learned React-Redux tried to fetch all data tables only once at start , store it in redux-states and filter it in frontend.
2. Came to conclusion that react-redux is good but has too much boilerplate if used extensively and there is a delay if reloaded a page and it results in crashing or page.
3. Used PostgreSQL here which i was well aquainted with but wanted to try something new so tried using MERNG (graphql with MERN) with a project started from scratch which can be found here -- https://github.com/Rohitkk432/Itadakimasu.git 

## Things Played around with
1. Tried using react-redux with thunk (for async requests) for fetching all tables on login. 

## Snapshots

### Login Page

### Social Media

Instagram: <https://www.instagram.com/devsocbitsgoa>

Devsoc's Website: <https://devsoc.club/>

