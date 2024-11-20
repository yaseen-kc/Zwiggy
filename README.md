# Zwiggy 🍔🍕🥗

Zwiggy is a modern web application designed for browsing restaurants, viewing menus, and managing food orders with a user-friendly interface. Built with React, Redux, and Tailwind CSS, it allows users to explore restaurant offerings, manage their cart, and check out with ease. Perfect for foodies and developers alike!

## Features ✨

- 🍽️ Browse through a variety of restaurants and their menus.
- 🍔 View restaurant details, categories, and item listings.
- 🛒 Add items to your cart and manage cart contents.
- 🛑 Handle errors gracefully with error boundaries.
- 🔄 Mobile-first, responsive design powered by Tailwind CSS.
- 🔄 State management using Redux for cart and app-wide state.
- 🧪 Unit tests for critical components to ensure stability.

## Installation Instructions ⚡

To get started with Zwiggy, follow these steps:

### Prerequisites 🛠️

Make sure you have `node` and `npm` (or `yarn`) installed. You can download them from [here](https://nodejs.org/).

### Steps 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/zwiggy.git
   cd zwiggy

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm start
   ```

   Your app will now be running at `http://localhost:3000` (or another available port).

## Usage Examples 📱

Once the app is running, you can:

1. 🍴 Browse a list of restaurants.
2. 🍽️ Click on a restaurant to view its menu.
3. 🛒 Add items to the cart from the menu.
4. 🏷️ View the cart and proceed to checkout.

The application adjusts to online/offline states, ensuring an optimal user experience regardless of connectivity.

## Configuration Options ⚙️

You can configure certain parts of the app by editing the following files:

- **Tailwind Configuration**: Modify `tailwind.config.js` to customize utility classes and design tokens.
- **Redux Store**: The global state is managed with Redux. You can adjust actions and states in `src/utils/redux/appStore.jsx` and `src/utils/redux/cartSlice.jsx`.
- **API Constants**: Update API URLs or constants in `src/utils/constants.jsx` to fit your needs.

## Contribution Guidelines 🤝

To contribute to this project:

1. 🍴 Fork the repository.
2. 🌱 Create a new branch for your feature or fix.
3. ✨ Make your changes and add tests (if applicable).
4. ✅ Ensure all tests pass.
5. 🚀 Submit a pull request with a description of your changes.

Please follow the code style guidelines and include tests for any new functionality.

## Testing Instructions 🧪

To run the tests:

1. Install dependencies (if not done already):

   ```bash
   npm install
   ```

2. Run the test suite:

   ```bash
   npm test
   ```

The app uses Jest for testing, and you can add new tests inside the `src/components/__test__` directory.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements / Credits 🏆

- **React**: For the powerful component-based architecture that simplifies UI development.
- **Redux**: For efficient global state management across the app.
- **Tailwind CSS**: For enabling a fast and responsive design system with utility-first classes.
- **Jest**: For robust testing to ensure reliability and maintainability.

Special thanks to the contributors and maintainers of the libraries and frameworks used in this project. 🙏
