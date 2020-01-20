const Article = require("../models/articleModel");

exports.getArticles = (req, res) => {
    res.json({
        articles: [
            {
                "id": 0,
                "name": "What is 'Tarot', anyway?",
                "image": "1565492206137-0797f1ca6dc6",
                "content": "First, a bit of history — Tarot got its start as a card game in the 15th century. So while it may seem like reading cards is an ancient practice, the use of Tarot for divination really came into its own in the 18th century. Because the Tarot deals in archetypes (or universal symbols), the meanings of each card and the stories those meanings tell span culture, continent, and time. You may have seen the Tarot presented as a means of telling the future — even changing it — but the cards are actually most useful for reflection and empowered decision-making. From this vantage, Tarot can only aid on your journey to fulfillment. First, a bit of history — Tarot got its start as a card game in the 15th century. So while it may seem like reading cards is an ancient practice, the use of Tarot for divination really came into its own in the 18th century. Because the Tarot deals in archetypes (or universal symbols), the meanings of each card and the stories those meanings tell span culture, continent, and time. You may have seen the Tarot presented as a means of telling the future — even changing it — but the cards are actually most useful for reflection and empowered decision-making. From this vantage, Tarot can only aid on your journey to fulfillment.",
                "route": "ArticleDetails"
            },
            {
                "id": 1,
                "name": "Why are some cards in suits, while others aren't?",
                "image": "1565492206132-b48aa1ca7ac0",
                "content": "If you've taken a good look at your cards, you will have noted that some have distinct names and are numbered zero to 21 (or one to 22, depending on the deck), while others that appear numbered in the same way that you might see in a traditional card deck, complete with aces, kings, and queens. The cards without suits make up the major arcana. Those that are labeled as belonging to swords, wands, cups, and pentacles comprise the minor arcana. A standard deck has 78 cards: 22 in the major arcana and 56 in the minor. If you've taken a good look at your cards, you will have noted that some have distinct names and are numbered zero to 21 (or one to 22, depending on the deck), while others that appear numbered in the same way that you might see in a traditional card deck, complete with aces, kings, and queens. The cards without suits make up the major arcana. Those that are labeled as belonging to swords, wands, cups, and pentacles comprise the minor arcana. A standard deck has 78 cards: 22 in the major arcana and 56 in the minor.",
                "route": "ArticleDetails"
            },
            {
                "id": 2,
                "name": "What's in the 'Major Arcana' ?",
                "image": "1515363524368-589ca770e0a1",
                "content": "The major arcana is made up of cards that directly represent archetypes, and suggest major themes and lessons that the querent (the subject of the reading) should pay attention to. There are many cards in your deck that symbolize impending change. If cards from the major arcana — think Death, or The Tower — show up, that means that the changes are going to be big, important, and an opportunity for a life-altering lesson. Of course, not all of the cards that comprise the major arcana are created equal. Depending on your deck — and they are available in increasing, and increasingly creative, numbers — some card names may be altered. Be sure to read up on your deck to catch all of its idiosyncrasies. The major arcana is made up of cards that directly represent archetypes, and suggest major themes and lessons that the querent (the subject of the reading) should pay attention to. There are many cards in your deck that symbolize impending change. If cards from the major arcana — think Death, or The Tower — show up, that means that the changes are going to be big, important, and an opportunity for a life-altering lesson. Of course, not all of the cards that comprise the major arcana are created equal. Depending on your deck — and they are available in increasing, and increasingly creative, numbers — some card names may be altered. Be sure to read up on your deck to catch all of its idiosyncrasies.",
                "route": "ArticleDetails"
            },
            {
                "id": 3,
                "name": "What's in the 'Minor Arcana' ?",
                "image": "1565492206137-0797f1ca6dc6",
                "content": "The minor arcana represents the joys, triumphs, hopes, fears, annoyances, and challenges we experience every day. The word 'minor' doesn't imply that these issues aren't important; it just means that they're more temporary and less far-reaching than those you'll see in the major arcana cards. They're also easier to act upon. The minor arcana is separated into four suits — wands, swords, cups, and pentacles, traditionally — and each suit relates to a facet of human experience. Wands represent action and motivation; swords represent thought processes and decision-making; cups represent feelings and emotions; and pentacles represent the material world, as in work and finances. Some decks may mix this up, but the meanings generally remain the same. The minor arcana represents the joys, triumphs, hopes, fears, annoyances, and challenges we experience every day. The word 'minor' doesn't imply that these issues aren't important; it just means that they're more temporary and less far-reaching than those you'll see in the major arcana cards. They're also easier to act upon. The minor arcana is separated into four suits — wands, swords, cups, and pentacles, traditionally — and each suit relates to a facet of human experience. Wands represent action and motivation; swords represent thought processes and decision-making; cups represent feelings and emotions; and pentacles represent the material world, as in work and finances. Some decks may mix this up, but the meanings generally remain the same.",
                "route": "ArticleDetails"
            },
            {
                "id": 4,
                "name": "A three-card spread how-to?",
                "image": "1565492206132-b48aa1ca7ac0",
                "content": "Begin by shuffling the deck while contemplating your question. You may want to cut your shuffled deck into three piles and then reassemble it before pulling your cards, or you may not — do what feels right. Likewise, you may want to spread the cards out face down and move them around before picking, rather than splitting the deck. How you shuffle is entirely up to you — the most important aspect is your unwavering concentration on the question you want answered. Pull three cards off the top of the deck, and position them to be read from left to right. This spread may seem simple, but it's also very versatile. You can use the cards to denote past, present, and future, or, situation, action, and outcome. If you're doing a relationship reading, you can even designate the first card as yourself, the second as your partner (or potential partner), and the third as the relationship between you both. Just don't change the parameters of the inquiry mid-reading! Don't worry if you don't know the meanings of all the cards yet — there are 78 of them, after all. A big part of reading the Tarot is building up your own intuition. Master the keywords associated with each card — use your booklet or the web for reference — and remember that the illustrations are there for a reason, and likely a factor that drew you to your deck! Look at the cards closely, notice how they relate to one another — look for connections; They should tell a story. Most importantly, don't worry about perfection. Time, practice, and an open mind will serve you well on this journey. Begin by shuffling the deck while contemplating your question. You may want to cut your shuffled deck into three piles and then reassemble it before pulling your cards, or you may not — do what feels right. Likewise, you may want to spread the cards out face down and move them around before picking, rather than splitting the deck. How you shuffle is entirely up to you — the most important aspect is your unwavering concentration on the question you want answered. Pull three cards off the top of the deck, and position them to be read from left to right. This spread may seem simple, but it's also very versatile. You can use the cards to denote past, present, and future, or, situation, action, and outcome. If you're doing a relationship reading, you can even designate the first card as yourself, the second as your partner (or potential partner), and the third as the relationship between you both. Just don't change the parameters of the inquiry mid-reading! Don't worry if you don't know the meanings of all the cards yet — there are 78 of them, after all. A big part of reading the Tarot is building up your own intuition. Master the keywords associated with each card — use your booklet or the web for reference — and remember that the illustrations are there for a reason, and likely a factor that drew you to your deck! Look at the cards closely, notice how they relate to one another — look for connections; They should tell a story. Most importantly, don't worry about perfection. Time, practice, and an open mind will serve you well on this journey.",
                "route": "ArticleDetails"
            }
        ]
    });
};

exports.createArticle = (req, res) => {
    const article = new Article(req.body);
    console.log("CREATING ARTICLE: ", req.body);
    article.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
           message: result
        });
    });
};