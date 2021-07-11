//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "One of my most important tasks as a reading teacher is matching students to books that they will love.

For struggling readers, that can be more challenging because they don’t yet know what types of books they will enjoy.

One of our favorite things about all the new devices that are in our classrooms is the ready access to millions of books. Many students already use Kindle, Nook, or iBooks to download books to their devices, but there are several other great apps that offer engaging, high interest texts for our students.


And as any teacher of literacy knows (so, all teachers), once readers reach adolescence and are still struggling, whether it’s with phonemic awareness, oral fluency, or critical reading strategies, the social and confidence issues swell alongside those literacy-based. This makes resources that can actually help them without embarrassing them or making them feel like a struggling reader all the more critical.

So then, this list–apps, chrome extensions, and website-based tools that can help address the unique needs of a struggling adolescent reader as they progress towards not just independent reading, but a lifelong love of literacy.

In general, the iOS version of each is given below but in a some of the cases, we included the Android version from the Google Play Store or the tool developer’s website itself.

Phonics Apps For Teens And Struggling Adolescent Readers
Teen & Adult Phonics Library or TAP Library School Edition


Developer Description: The Teen and Adult Phonics (TAP) Library offers a growing collection of sequential, decodable digital novels with edgy, engaging themes designed to appeal to teenagers and adults. Care has been taken to build a positive experience for older emergent readers, especially those with SpLD such as dyslexia, ASD or ADHD.

Blending Board

Developer Description: This app allows parents or teachers to create a deck of phonemes that can be substituted and manipulated to create various kinds of blending activities. The decks enable users to practice decoding simple words, and multisyllabic words as well.

Rewordify


Reword makes reading easier–and faster–by simplifying text, counting complex words, and allowing readers to self-monitor and improve reading comprehension.

Lexico Cognition

Developer Description: Lexico Cognition helps to develop language understanding, vocabulary building, cognitive and memory skills in a playful way. It appears that Lexico is no longer being supported.

More From The Web
Monsoon special sale is Here : Upto 35% Discount on Wooden Beds.
Monsoon special sale is Here : Upto 35% Discount on Wooden Beds.
wakefit.co
Join the Cloud First revolution with the people who know how.
Join the Cloud First revolution with the people who know how.
Accenture India
Recommended by
Phonics Genius


An easy-to-use app that offers 6000 words containing patterns of phoneme blends so readers can practice specific digraphs and trigraphs.

Visual Attention Therapy Lite

Developer Description: Train the brain to move the eyes correctly by scanning from left to right across the screen. Strengthening this essential skill can improve reading, concentration, memory, attention to detail, and speed of processing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/");

});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
