# Word Guessing Game

# Testing

- I tested that this game works in different browsers : Chrome , Firefox , Safari . 
- I confirmed that this project is responsive , looks good and functions on all standard screen sizes using the devtools device toolbar .
- I confirmed that the reset button works correct.

**Note: *** This game has been written with Javascript knowledge I possess at this moment in time. I am, aware that there might be more better ways/functions I could use, so I'm planning on revisiting this at a later stage when I have a better and more in-depth grasp of the subject.

## Bugs

### Solved Bugs
1. When I deployed my project on Github page , I discovered there are few errors on console that caused every time the page loads I see the unstyled content for a split-second, then everything settles in. 

- I discovered the flash of unstyled content was  in Firefox only.
I'm not seeing this issue in any other browser that I've tested - IE, Chrome, Opera .. I just add few lines of code on the head of html file. 

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap" rel="stylesheet">

2. When I deployed my project on Github page , I noticed that there is also another error in console because I had forgotten to add favicon, however this error didnt affect the application proformance but I added it just in case to not have any errors in console.

- I just added this line of code in the head of html file.

        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">


## Validator Testing

### HTML
- No errors were returned when passing through the official W3C validator.
![html report](assets/readMeImage/html.png)

### CSS
- No errors were found when passing through the official (Jigsaw) validator.
![css report](assets/readMeImage/css.PNG)

### JS
- No issues were found through JS Hint.
![JS report](assets/readMeImage/js.PNG)

### Lighthouse

The page achieved great performance.
![report](assets/readMeImage/report.PNG)



# Libraries & Programs 

    - Github, to store my repository
    - Gitpod, to create my project files
    - Google Fonts, for my font family 'Source Sans Pro'
    - Favicon, for my project icons
    - Am I Responsive?
    - Dev Tools, to ensure the site looked good across different devices

### Unfixed Bugs

No unfixed bugs have been found.

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

In the GitHub repository, navigate to the Settings tab. On the left-hand side under ‘Code and automation’, select ‘Pages’ and from the source section drop-down menu, select the Main Branch. Once the main branch has been selected, the page will be automatically refresh with a detailed ribbon display to indicate the successful deployment. The live link can be found here
[Word Guessing Game](https://sediqa01.github.io/Word-Guessing-Game/)




