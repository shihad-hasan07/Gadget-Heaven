# GadgetHeaven ✨

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets. This project is an e-commerce platform that provides an exceptional user experience for browsing, filtering, and purchasing gadgets. Below are the details of the project implementation and features.

---

## Live Website Link
[Visit GadgetHeaven](https://b10-a8-one.vercel.app)

## Requirement Document Link
[View Assignment Requirements](https://github.com/shihad-hasan07/B10-a8/blob/main/public/Assignment-08.pdf)

---

## Key Features
1. **Responsive Navigation Bar**:
   - Includes Logo, Brand Name, Dashboard, and Stats links.
   - Active routes are visually highlighted.

2. **Home Page**:
   - An attractive Banner with a button redirecting to the Dashboard.
   - Sidebar showcasing gadget categories (computers, phones, smartwatches, chargers, power banks).
   - Gadget cards in a grid format displaying product image, name, price, and details button.
   - Dynamic category-based filtering using nested layout.

3. **Details Page**:
   - Detailed view of the product with properties like price, description, availability, and rating.
   - Add-to-Cart and Add-to-Wishlist functionalities with toasts for user feedback.

4. **Dashboard**:
   - Tabs for viewing Cart and Wishlist.
   - Cart tab includes a total price calculation and sorting by price.

5. **Additional Features**:
   - 404 Error Page.
   - Reload resilience with no loss of data.
   - Dynamic page titles and favicon for branding.

---

## Technology Stack
- **Frontend**: React.js
- **State Management**: Context API
- **Data Persistence**: LocalStorage
- **Styling**: Tailwind CSS
- **Components**: React Rating Stars Component
- **Routing**: React Router DOM

---

## React Fundamentals Used
1. **Component-based Architecture**: Modular and reusable components for Navbar, Footer, Product Cards, etc.
2. **Hooks**:
   - `useState` for state management.
   - `useEffect` for lifecycle events.
   - `useLocation` for background color changes.
   - `useNavigate` for programmatic navigation.
3. **Context API**: For cart and wishlist management.
4. **React Router DOM**: Implemented nested routing for categories and error handling.
5. **Conditional Rendering**: Enabled/disabled buttons based on conditions (e.g., empty cart).

---

## Data Management
- **Context API**: Centralized state management for cart and wishlist.
- **LocalStorage**: Persistent data storage to handle reloading scenarios.

---

## Notable Features
1. Toast notifications for:
   - Adding items to cart.
   - Adding items to wishlist.
2. Modal for purchase confirmation and cart clearing.
3. Price vs. Product Name chart using Recharts for statistics visualization.
4. Sorting by price
5. Remove item from cart and wishlist
