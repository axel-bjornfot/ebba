import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage.tsx";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/loginPage.tsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</AuthProvider>
	</React.StrictMode>
);
