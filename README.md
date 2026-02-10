# Farspace - Digital Agency Landing Page

Farspace is a sleek, minimalist landing page built with **React** and **Tailwind CSS**. Designed for a modern digital agency, it features a clean aesthetic, responsive layouts, and a data-driven architecture.

🚀 _Project Overview_

The application is structured as a high-performance Single Page Application (SPA). It uses a centralized constants file to manage all site content, making it incredibly easy to update text, services, and portfolio items without touching the component logic.

🛠️ _Tech Stack_

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS
- **Typography:** Noto Sans & SN Pro
- **Icons:** Material Symbols (Google)

📂 _Project Structure_

```text
src/
├── assets/             # Project images (About, Hero, Portfolio)
├── components/         # Modular UI Sections
│   ├── Navbar.jsx      # Responsive nav with mobile toggle
│   ├── Hero.jsx        # Landing vision and CTA
│   ├── Services.jsx    # Alternating layout service cards
│   ├── Portfolio.jsx   # Hover-reveal project grid
│   ├── About.jsx       # Brand mission statement
│   ├── Reviews.jsx     # Client testimonials
│   ├── Contact.jsx     # Lead generation and info
│   └── Footer.jsx      # Social links and copyright
├── constants/
│   └── index.js        # Centralized data store
├── App.jsx             # Main layout wrapper
├── index.css           # Global styles and font imports
└── main.jsx            # React entry point
```

🚀 _Getting Started_

To get the project running locally, follow these steps:

1.  **Clone the repository:**
    ```
    git clone https://github.com/yourname/farspace.git
    ```
2.  **Install dependencies:**
    ```
    npm install
    ```
3.  **Run development server:**
    ```
    npm run dev
    ```

✨ _Key Features_

**1. Data-Driven UI**

The entire application is powered by a central constants file. This allows updates to services, portfolio items, or testimonials in one place without modifying JSX logic.

**2. Responsive Interaction Design**

- **Mobile First:** A custom hamburger menu toggle for mobile users using React state.
- **Hover-Reveal Gallery:** Portfolio items utilize `group-hover` transitions with `backdrop-blur-lg` to reveal project details elegantly.
- **Alternating Layouts:** The Services section automatically alternates image/text alignment based on array index.

**3. Modern Design System**

- **Typography:** A premium font stack using **Noto Sans** for readability and **SN Pro** for a futuristic feel.
- **Aesthetics:** Uses a soft `#fafaf9` background, `3xl` border-radii for a modern look, and `antialiased` text for crisp rendering.

**4. Optimized Performance**

- Built with **Vite** for near-instant Hot Module Replacement (HMR).
- **Tailwind CSS** ensures a minimal CSS bundle by purging unused styles automatically.

🛠️ _Tech Stack_

- **Core:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols (Google)
- **Fonts:** Noto Sans, SN Pro

📝 _Configuration_

To update content, navigate to `src/constants/index.js` and modify the exported objects:

- **`PORTFOLIO_PROJECTS`**: Add or remove project cards.
- **`SERVICES_CONTENT`**: Update service descriptions and images.
- **`REVIEWS`**: Manage client feedback.
