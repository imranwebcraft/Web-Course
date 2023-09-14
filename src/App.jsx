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
	const [remainingCredit, setRemainingCredit] = useState(0);
	const [totalCredit, setTotalCredit] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleClick = (course, id) => {
		let creditCount = course.credit;
		let totalCredit = 20;

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
		} else {
			coursesName.forEach(
				(course) => (creditCount = course.credit + creditCount),
			);
			if (creditCount > 20) {
				toast.warn("Credit Limit! Please Check Your Remaining Credit", {
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
			} else {
				let remainingCredit = totalCredit - creditCount;
				setRemainingCredit(remainingCredit);
				if (remainingCredit < 0) {
					toast.warn("No Credit Remaining", {
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
				setTotalCredit(creditCount);
			}

			setTotalPrice(totalPrice + course.price);
			// Set courname obj to the state
			setCoursesName([...coursesName, course]);
		}
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
				<Courses courses={courses} handleClick={handleClick} />
				<Cart
					coursesName={coursesName}
					totalCredit={totalCredit}
					totalPrice={totalPrice}
					remainingCredit={remainingCredit}
				/>
			</div>
		</>
	);
}

export default App;
