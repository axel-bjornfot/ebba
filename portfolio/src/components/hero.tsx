import ClipLoader from "react-spinners/ClipLoader";

export default function hero() {
	return (
		<>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row">
					<img src={""} className="max-w-sm rounded-lg shadow-2xl" />

					<div>
						<h1 className="text-5xl font-bold">
							Ebba Christofferson
						</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Download CV</button>
					</div>
				</div>
			</div>
		</>
	);
}
