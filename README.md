# MiraiMessage - TechTogetherBoston 2020

Community platform web app where you can write letters to yourself and receive anonymous letters from other people!

*You can write a message to your future self, but what if your future self could write back to you?*

MiraiMessage is a web application that allows users to write a letter and pick a date any time in the future for it to be delivered back to their own email, whether it be next week or in 10 years. Upon sending a letter, your letter is analyzed, with the help of natural language processing, with other letters sent from other people, and you can receive letters from other people going through similar situations, state of minds, or emotions! MiraiMessage demonstrates how important introspection and empathy is in building community. Overall, this service aims to provide people with a low-pressure, anonymous outlet to vent their feelings and support one another.

The user's letter is tagged, either by user input or through NLP. This tag assists the algorithms in matching that letter to a different user, based on factors like relevance, keywords, and length of the letter. 

## Tech Stack

Full-stack JavaScript application 

NLP: term frequency–inverse document frequency (TF-IDF)

Google Cloud Firestore

[Frontend](https://github.com/liu-caro/future-letters-frontend/) (React.js)

[Backend](https://github.com/nicoledanuwidjaja/future-letters-backend/) (Node/Express.js)

### WTF is [TF-IDF](http://www.tfidf.com/)?
TF-IDF = TF (Term Frequency) + IDF (Inverse Document Frequency)

- Term Frequency: measures how frequently a term appears in a letter, according to its length
- Inverse Document Frequency: measures how important a term is

Term frequency-inverse document frequency provides a statistical measurement of how important specific words are to the relevance of an overall document. Within MiraiMessage, we employed TF-IDF in order to compare the natural language of letters with one another to provide overall letter relevance in meaning. Because we were posed with the challenge of comparing letters of completely different situations, we utilized TF-IDF as opposed to sentiment analysis or other means for our primary NLP algorithm in order to tag the overall meaning of a letter.

## Thanks to...

Maggie Chang, Caroline Liu, Eirean Co, Vera Kong, Nicole Danuwidjaja

*Sponsor Winners:* **Google Cloud** - Best Use of Google Cloud and **Atlassian** - Best Hack to Play as a Team

