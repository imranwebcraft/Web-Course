import PropTypes from "prop-types";
const Cart = ({ coursesName, totalCredit, totalPrice, remainingCredit }) => {
	return (
		<div className="sm:w-full lg:w-1/5">
			<div className="bg-white p-6 rounded-lg">
				{/* Credit Hour */}
				<div>
					<h1 className="text-lg font-semibold text-blue-600">
						Credit Hour Remaining {remainingCredit} hr
					</h1>
					<div className="border my-4"></div>
				</div>

				{/* Course Name List */}
				<div>
					<div className=" mb-5">
						<h1 className="text-xl font-bold">Course Name</h1>
					</div>
					<ol className=" list-decimal list-inside text-gray-600">
						{coursesName.map((courseName) => (
							<li className=" mb-1" key={courseName.id}>
								{courseName.course_name}
							</li>
						))}
					</ol>
					<div className="border my-5"></div>
				</div>

				{/* Total Credit Hour */}
				<div>
					<h1 className="text-base font-medium text-gray-600">
						Total Credit Hour: {totalCredit}
					</h1>
					<div className="border my-4"></div>
				</div>
				{/* Total Price */}

				<div>
					<h1 className="text-base font-medium text-gray-600">
						Total Price: {totalPrice}
					</h1>
				</div>
			</div>
		</div>
	);
};

Cart.propTypes = {
	coursesName: PropTypes.array.isRequired,
	totalCredit: PropTypes.number.isRequired,
	totalPrice: PropTypes.number.isRequired,
	remainingCredit: PropTypes.number.isRequired,
};

export default Cart;
