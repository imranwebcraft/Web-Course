import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch("courses.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<>
			{/* Top */}
			<Header />
			{/* Middle */}
			<div className="container mx-auto flex sm:flex-col lg:flex-row justify-between gap-2">
				<Courses courses={courses} />
				<Cart />
			</div>
		</>
	);
}

export default App;
