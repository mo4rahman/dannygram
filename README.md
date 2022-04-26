# Dannygram (Instagram Clone)

[Github Link](https://github.com/mo4rahman/instagram-2.0)

> This project will be a clone of the social media app Instagram, but strictly with Danny DeVito pictures. Here, we post photos, along with captions from a specific username. Each post will have likes and comments. The home page just consists of a feed of all the posts made by any user who uses the website.

### Basic User stories
- Like photos
- Comment on photos
- Click Logo to go to home Page
- Click on Post to see dedicated post page
- Add/Create Post
- Edit Post
- Delete Post
- Click on user to see all their posts

### Wireframes 
![Screen Shot 2022-04-26 at 9 12 15 AM](https://user-images.githubusercontent.com/68241119/165341231-004e3f30-b118-4ff5-a8ae-2fc9cce88d60.png)

### Your Models & Associations
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
