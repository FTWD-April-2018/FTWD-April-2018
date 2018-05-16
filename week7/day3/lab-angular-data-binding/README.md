![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Angular | IronNutrition

## Introduction

At this point in the course, some of us may be reminiscing about times before the course, when we used to work out and we were fit and in shape.  Surprising as it may be, spending many hours each day sitting in front of the computer is not an effective way to attain, and maintain, a rock-hard physique.  

Our solution: A nutrition app. 

And it's your job to build it. 

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0e106e84e22155f1d2775e37cd4aa865.gif)

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must use at least 1 of each of the following:
  - `component`
  - `pipe`
  - `ngFor`
  - `ngIf`
  - `ngModel`

In the starter code, we've provided a list of foods in the form of a TypeScript array of objects. This has already been imported into the foods-list component provided to you.

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a pull request from your master branch to the original repository master branch.

In the pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 1 | Display Foods

In the `app-food-list` component, display a list of the foods. This should include the food's image, its name, and its calorie count.

Notice, we've already imported an array of objects containing food into the component.

**Make sure the image's src property is properly bound** so that any time the value is changed in the TypeScript class, the change is reflected in the DOM.  

### Iteration 2 | Search Foods

Create an input box to search through the foods by name.

You're going to need to generate a custom *pipe* to do this. Reference the example from the lesson on pipes, as it will be very similar.

### Iteration 3 | Add New Foods

Create a button to add new foods.

When a user clicks the button, a form will appear with fields for a name, number of calories, and an image.

When the user clicks submit, the food will be added to the list.

The form should disappear when the user clicks the submit button.  

### Iteration 4 | Today's Foods List

Create a button next to each item. When a user clicks the button, the corresponding food should be added to a special list of foods which are "today's foods".

Somewhere on the page, display a list of today's foods, with a total calorie count.

### Bonus | Quantities

In addition to the "Add to today's list" button, create an input for quantity. Whenever a user enters a number into the input, you should add that many of the item to their list.

The default quanitity should be 1.

**Super Bonus**

If the user has added more than one item of the same type to their list, don't display it twice. Instead, display the item's name, and the number of times it has been added.

For instance:

- `Banana x2`
- `Salmon x5`
- `Cake`
