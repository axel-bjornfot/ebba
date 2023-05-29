import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Navbar from "./components/navbar";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Navbar />
		<RouterProvider router={router} />
	</React.StrictMode>
);