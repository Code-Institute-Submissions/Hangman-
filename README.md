# **Hangman Game**

This webpage is about the Hangman Game:is a word game in which one player has to guess a word that the other player has thought of, by guessing the letters in it. In this case the player will play with a computer. Every time the player guesses a wrong letter, will loose a life each time.


This game was made with JavaCript language. It required 90% of my attention; At first was hard to find out the proper logic and functions for the game. Once the basic game was working, I spent time trying to optimize the code; at first every function was doing too many things and it was not readable. 
 

**The website is live on Github Pages [Linked Here](https://luquintas11.github.io/Hangman-/)**

![Mockup Responsive]

##Features

The website consists in one page and three different modals:
### The page with the game indeed
* This section has a background color that contrasts with the rest of the website
* In the background there is a image according with the choosen category
   [screenshot]
### The initial modal
* It explains the game and shows the three different categories
* It has a background color that contrats with the paragraph and buttons on it
[screenshot]
### The modal that says to the player that wins
* It pops up everytime the player wins
* It has a button that restart the game
[screenshote]
### The modal that says to the player that looses
* It pops up everytime the player loses
* It has a button that restart the game
[screenshot]

## Testing

* This page works in different browser: Firefox, Chrome and Internet explore. 
* This page has a proper responsive design that allows to run it in different screen sizes

## Bugs

* When I was testing the website in the different browser I have the next problem with the size of the image:
[screenshot]

It was sorting out just ajusting the heigth of it

##  Validator Testing

* HTML: No errors were returned when passing through the official W3C validator. 
* CSS:  No errorrs were returned when passing through the  official (jigsaw) validator. 
* JavaScript: It was semicolons missing and I have a warning about functions.
  [screenshot]

 ## Lighthouse report

 * Lighthouse test, on mobile and deskot, does not show any problem
 {screenshot}

 ## Unfixed Bugs

 * The warning in JsHint was not  sorted out

 ## Credits 

#### Media and content

* The idea  about how to make a modal  was taken from https://www.w3schools.com/
* The images were taken from https://www.pexels.com/
* The font-family was imported from https://fonts.google.com/
* I want to give credits to my tutor Sandeep Aggarwal. 

## Deployment

The site was deployed to GitHub pages using the following steps:

-In the GitHub repository, navigate to the Settings tab
-From the source section drop-down menu, select the Master Branch
-Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate -the successful deployment.

The live link can be found here: https://luquintas11.github.io/Hangman-/