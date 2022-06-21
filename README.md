# Dannygram (Instagram Clone)

## Getting started

[Visit our DANNYGRAM app here!](https://polar-bastion-57023.herokuapp.com/posts)

### Requirements

- Currently, our website is optimized for Chrome. There are a few bugs with the CSS for other browsers such as Safari or Mozilla Firefox.

> This project is a clone of the social media app Instagram, but strictly with Danny DeVito pictures. Here, we post photos, along with captions from a specific username. Each post will have likes and comments. The home page just consists of a feed of all the posts made by any user who uses the website.

### Basic User stories

- Like photos
- Comment on photos
- Click Logo to go to home Page
- Click on Post to see dedicated post page
- Add/Create Post
- Edit Post
- Delete Post

### Wireframes

![Screen Shot 2022-04-26 at 9 12 15 AM](https://user-images.githubusercontent.com/68241119/165341231-004e3f30-b118-4ff5-a8ae-2fc9cce88d60.png)

### Models & Associations

#### USER

    - Username
    - Array of posts (Somehow associated to posts)
    	- Each post will be an object

<img width="660" alt="Screen Shot 2022-04-26 at 12 16 42 PM" src="https://user-images.githubusercontent.com/68241119/165346057-127fa9bb-72e4-4472-b86c-b65e41ea64b3.png">

#### POSTS

    - Caption
    - Number of likes
    -Array of comments (all strings)
    - Username of the person who posted it (Somehow associated to USER)

![schema](https://user-images.githubusercontent.com/68241119/165347500-67ae1d82-fabc-49cb-937e-e41caf306347.png)

## MVP

- Like Posts
- Comment on posts
- add new post
- edit post
- delete post
- have a dedicated page for a specific post
- nav bar with home route and new post button

## Future Implementations
- have a page with all posts from a specific user
- Ability to edit username and have that changed with all posts that have the same username (have to update the database as well)
- User authentication, once authenticated, will only have the ability to edit, create, and delete if logged in to that specific username.
