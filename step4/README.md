Step 4 requirements:
-------------------------------------------------

Update your code include the function calls inside the eventlisteners for the form - 
# done

Output the decision and some or all the input data, however you want.  
# decision output - submit = user's name, title (keyword), and poem.
# decision output - shuffle = rearranges the lines of the poem


Write some custom validation for at least 1 of your inputs.
# the "name" input now has custom validation using the "blur" event listener.


Hardcode what your plan on doing for tabular data, which we will do next week.  
# I have this hard coded as one table row per poem line... this will be a challenge to implement with JS, but hopefully not impossible.

Render the buttons at the bottom of each submission
# buttons rendered, and nope they don't work. For now. The "shuffle" button can (maybe?) take the place of the Edit button, since it is technically an edit of the content. What do you think?

Add some css!
# added

--------------------------------------------------

Okay, here's my "functions" version of the Cento poetry app. A few things:

* I've got one global variable. Should I get rid of it? How? Interested to hear your thoughts.

* Something I discovered by accident: if you use an empty string for the "keyword" variable, the app randomly creates a 20-line poem, and if you refresh the page, it's a different poem every time. Once we start adding form elements into myApp, I will definitely have a button for this functionality, as well as a button to shuffle the poem's order of lines.

* The poem is currently 20 lines long,  but I'm already thinking I need to make it shorter. Maybe.

* The app is missing functionality mentioned in step 1 - I need to write a way for the app to combine keyword results with random results. Let me know if I should do this now or wait for a later step.

* I have the World's Longest Template String. 977 lines long. No idea how I'm going to turn all this into an array of objects for the next step.

* I continue to only use google for coding help. No AI. I'm sure you can tell by my janky code. It's honestly more fun this way. I did use the shuffleArray function Google suggested - this was a result of me googling "how to shuffle all the items in an array". 