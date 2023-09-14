import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [courses, setCourses] = useState([]);
	const [coursesName, setCoursesName] = useState([]);

	const handleCourseName = (course, id) => {
		// Check course object before set the sate
		const isSimillarCourse = coursesName.find(
			(courseName) => courseName.id === id,
		);

		if (isSimillarCourse) {
			toast.error("🦄 Already Added!", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			return;
		}

		// Set courname obj to the state
		setCoursesName([...coursesName, course]);
	};

	useEffect(() => {
		fetch("courses.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<>
			<ToastContainer />
			{/* Top */}
			<Header />
			{/* Middle */}
			<div className="container mx-auto flex sm:flex-col lg:flex-row justify-between gap-5 pb-20">
				<Courses
					courses={courses}
					handleCourseName={handleCourseName}
				/>
				<Cart coursesName={coursesName} />
			</div>
		</>
	);
}

export default App;
