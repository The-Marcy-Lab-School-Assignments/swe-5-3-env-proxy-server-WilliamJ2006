# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:
It's unsafe to make requests to a third-party API directly in frontend because that exposes our key which is sensitive information. If users were to look through either the repo or in the frontend's source, they would be able to find our key and utilize it to fetch information. This leads to our application possibly being blocked or rate limited because malicious users are using our unique keys for their own purposes.

---

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:
The proxy server strategy is to have our backend store the API key and be the client that fetches from the API, then using that information to create our own endpoints. The frontend can fetch from our own endpoints once our backend server has been created. This allows us to hide our API keys in the backend as our endpoints don't expose the API we're fetching from.

---

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:
An environment variable is a hidden variable that's stored on the host computer and is accessed through `process.env.variable_name`. We store them in `.env` files rather than in the source code to protect our hidden variables. `.gitignore` plays into this by telling github which files to ignore when committing and pushing. If the .env files were accidentily commited to GitHub, it would be public for any users to see meaning it's just as exposed as when leaving sensitive information in the frontend.

---
