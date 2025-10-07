# ITC College Management Website

A modern, responsive website for ITC College, built with React, TypeScript, Vite, and Tailwind CSS. The site provides information about academic programs, departments, admissions, news, and more for prospective and current students.

## Features

-   **Homepage**: Hero section, statistics, features, partner logos, and call-to-action.
-   **Academic Affairs**: Detailed info on all education levels (Cao đẳng 9+, Cao đẳng, Liên thông), including available majors and program metrics.
-   **Departments**: Overview of all departments, faculties, and centers with introductions and contact info.
-   **Admissions**: Online application form with multi-step process and submission confirmation.
-   **News**: List and details of news articles and events.
-   **About**: School history, vision & mission, timeline, and leadership.
-   **Responsive Design**: Fully responsive for desktop and mobile devices.
-   **Accessibility**: Semantic HTML and accessible components.

## Tech Stack

-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Lucide React Icons](https://lucide.dev/)
-   [Radix UI Primitives](https://www.radix-ui.com/)

## Project Structure

```
.
├── public/                 # Static assets (images, sitemap, logos)
├── src/
│   ├── assets/             # Static assets for import
│   ├── components/         # Reusable UI components
│   ├── data/               # Static data (majors, departments, news, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components for routes
│   ├── sections/           # Major page sections (Header, Footer, etc.)
│   ├── utils.ts            # Utility functions
│   ├── App.tsx             # App root component
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18+ recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-org/college-management.git
    cd college-management/college
    ```

2. **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Build for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Customization

-   **Content:**  
    Update static data in [`src/data/`](src/data/) for majors, departments, news, etc.
-   **Branding:**  
    Replace images and logos in [`public/`](public/) and [`src/assets/`](src/assets/).
-   **Styling:**  
    Modify Tailwind CSS classes or extend the config as needed.

## License

This project is for educational and demonstration purposes.  
For commercial use, please contact ITC College.

---

**ITC College**  
12 Trịnh Đình Thảo, Phường Tân Phú, Thành phố Hồ Chí Minh  
[info@itc.edu.vn](mailto:info@itc.edu.vn) | [tuyensinh@itc.edu.vn](mailto:tuyensinh@itc.edu.vn)
