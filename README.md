
# BridgeTheGap: A Digital Solution to College Mental Health Challenges

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

**BridgeTheGap** is a digital platform designed to address the mental health challenges faced by college students. The platform aims to enhance communication between students and faculty, ensuring that students' mental health issues are identified early and addressed effectively. By combining sentiment analysis, AI companionship, and proactive communication, BridgeTheGap provides a comprehensive solution to help students maintain their mental well-being.

## Features

- **Mental Health Evaluator:**
  - Analyzes students' anonymous submissions and categorizes them into three groups: Green (stable), Yellow (moderate concerns), and Red (urgent intervention required).
  - Generates a downloadable report for faculty to review.

- **Targeted Support for students with poor mental health:**
  - Provides curated resources and external support group information for students needing urgent intervention.
  - report is sent to the faculty so that proper support can be provided to endangered students.

- **AI Chatbot for Companionship:**
  - Offers real-time companionship and listens to students' concerns, acting as a virtual friend.

- **Journaling Feature:**
  - Allows students to document their progress, emotions and mental health journey, creating a personalized record.

- **Proactive Communication:**
  - Automatically sends reports, chatbot interactions, and journal entries to the faculty’s email, enabling swift and targeted support.

## Technology Stack

- **Frontend:**
  - HTML, CSS, JavaScript
- **Backend:**
  - Node.js, Express.js
- **AI :**
  - OpenAI API to recieve responses feom Chatbot.
- **API Management:**
  - React.js
- **Integration:**
  - Node Server
  
## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/curioussoul123/Mental-Health-Hack.git
   cd Mental-Health-Hack
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g., for database connection, API keys).

4. **Start the Server:**
   ```bash
   npm start
   ```

## Usage

1. **Access the Platform:**
   - Open your browser and navigate to `http://localhost:3000`.

2. **Use the Sentiment Analysis Tool:**
   - Students can anonymously share their feelings.
   - Faculty can review the generated reports.

3. **Interact with the AI Chatbot:**
   - Students can chat with the AI companion for real-time support.

4. **Maintain a Journal:**
   - Students can use the journaling feature to track their daily emotions.

## File Structure

```bash
project-root/
│
├── html/
│   ├── index.html
│   ├── dashboard.html
│   ├── chatbot.html
│   ├── journal.html
│   ├── survey.html
│   ├── js/
│   │   ├── chatbot.js
│   │   ├── journal.js
│   │   ├── survey.js
│   │   ├── index.js
│   ├── css/
│   │   ├── chatbot.css
│   │   ├── journal.css
│   │   ├── survey.css
│   │   ├── index.css
│   │   ├── dashboard.css
│
├── jsons/
│   ├── questions.json
│   ├── data.json
│   ├── comment.json
│
├── pdfs/
│   ├── RedPlan.pdf
│   ├── YellowPlan.pdf
│   └── GreenPlan.pdf
│
├── server.js
└── package.json
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Make sure to follow the coding guidelines and include appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, feel free to reach out to me at [aryashreya10@gmail.com ](mailto:aryashreya10@gmail.com).

