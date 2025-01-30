# StuPro (St2Pro)

For the students, by the students and of the students

#### **Purpose and Scope**

The app aims to create a learning platform for students to access knowledge on topics like learning, interview preparation, and career readiness.

#### **Target Audience**

- **Primary**: College students and recent graduates.
- **Secondary**: Aspiring professionals preparing for interviews or skill development.

---

#### **Unique Selling Point (USP)**

- **Community-driven content**: Articles **"of the students, by the students, for the students."**
- **Card-based reading experience**: Engaging UI with one slide per view, supporting text, video, and images.
- **Structured editorial process**: Quality control through application-based editor access and admin approval for articles.

---

#### **Features & Functionalities**

1. **User Engagement**
   - Browse articles on learning, interview preparation, and career growth.
   - Share article links and bookmark specific slides.
2. **Editor Contributions**
   - Apply as an editor via a form showcasing motivation, eligibility, and prior writing samples.
   - Create articles using slides (text, video, or image) with a guided editor interface.
   - Submit articles for admin approval before publication.
3. **Content Discovery**
   - Dedicated pages for:
     - Contributors and their articles.
     - Featured Contributor and New Contributor sections.
     - Featured Articles with high ratings.
   - Ratings for articles to reflect user feedback.
4. **Notifications**
   - Use Firebase Cloud Messaging (FCM) to notify users about new articles, featured content, or updates.
5. **Gamification**
   - Recognition system: badges for editors and readers (e.g., "Top Contributor," "Most Popular Article").

---

#### **UI Design Details**

1. **Article Display**
   - Card-based interface: Readers view one slide at a time with transitions (swipe/flip).
   - Slides support text, images, and videos with a concise word limit.
2. **Contributor Section**
   - Showcase contributor profiles with their published articles.
   - Highlight Featured and New Contributors prominently.
3. **Discover Page**
   - Categorized view of trending and featured articles.
4. **Reader Actions**
   - Easy access to share, bookmark, and rate articles.

---

#### **Tech Stack**

1. **Frontend**
   - **React Native**: Cross-platform development for Android.
   - **UI Libraries**: React Navigation.
2. **Backend**
   - **Java**: API development for user authentication, article submissions, and approvals.
   - **Firebase**: FCM for notifications.
3. **Database**
   - **Mongo DB**: Cloud-hosted NoSQL database for real-time updates.
4. **Third-party Integrations**
   - Media support (images/videos) via cloud storage services (AWS S3).
