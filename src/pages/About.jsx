function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About This Project</h2>
      <p className="text-base text-gray-700 mb-6">
        This application is a <strong>Product Inventory Management System</strong> built with React. It is designed to help users easily manage their inventory of products. The main features include:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-4">
        <li className="text-base"> <strong>Product Management:</strong> Admins can add new products, update existing ones, and delete products from the inventory.</li>
        <li className="text-base"> <strong>Inventory Tracking:</strong> Each product has essential details like title, description, price, stock quantity, and image URL, which are easily editable.</li>
        <li className="text-base"> <strong>Dashboard:</strong> A clean and simple dashboard allows users to view a list of all products in the inventory.</li>
        <li className="text-base"> <strong>Responsive Design:</strong> The app is fully responsive and works seamlessly on both desktop and mobile devices.</li>
      </ul>
      <p className="text-base text-gray-700 mb-12">
        This project was created with the goal of providing a practical and user-friendly solution for inventory management. Whether you're managing a small store or simply organizing your products, this app simplifies the process by offering an intuitive interface for managing product data.
      </p>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Created by</h3>
      <p className="text-base text-gray-700 mb-16">
        This project was developed by me as a personal project to learn and showcase React and web development skills. You can connect with me on the following platforms:
      </p>
      <p className="text-lg text-gray-700">
        <a href="https://github.com/Patricia-GraciaGutierrez" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>{" | "}
        <a href="https://www.linkedin.com/in/patriciagrgt/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
      </p>
    </div>
  );
}

export default About;
