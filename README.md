# My Portfolio

Welcome to my portfolio website! This site showcases my projects, blog posts, and other professional work.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Portfolio showcasing projects
- Blog with JSON-based posts
- Responsive design
- Dark mode toggle (planned)
- Photography gallery (planned)

## Technologies

- React
- CSS (custom styles)
- JSON (for blog posts)
- Netlify (for deployment)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/portfolio.git
    ```
2. Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

## Usage

- To view the portfolio, navigate to `http://localhost:3000` in your web browser.
- Blog posts can be managed by editing the `posts.json` file in the `src/blog` directory.

### Adding a New Blog Post

1. Open `src/blog/posts.json`.
2. Add a new entry to the `blogPosts` array with the following format:
    ```json
    {
      "id": 2,
      "title": "Your Blog Post Title",
      "date": "YYYY-MM-DD",
      "content": "Your blog post content."
    }
    ```
3. Save the file and commit your changes:
    ```sh
    git add src/blog/posts.json
    git commit -m "Add new blog post"
    git push origin main
    ```
4. Your new post will be automatically deployed via Netlify's CI/CD.

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Make your changes.
4. Commit your changes:
    ```sh
    git commit -m "Add your feature"
    ```
5. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

- [Murphey Osmundson](mailto:mosmundson88@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/murphey-osmundson)
- [Portfolio](https://main--murphs-portfolio.netlify.app/)

