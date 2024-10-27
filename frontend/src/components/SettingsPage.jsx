import { Link } from "react-router-dom";

const SettingsPage = () => {
	return (
		<div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
			<div className="py-4 px-6 border-b border-gray-200">
				<h1 className="text-2xl font-bold text-gray-800">Settings</h1>
			</div>
			<main className="max-w-4xl mx-auto py-6 px-4 lg:px-8 space-y-8">

				{/* Profile Section */}
				<section className="bg-gray-100 p-6 rounded-lg">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						<Link to={`/profile`} className="text-blue-600 hover:underline">
							Profile
						</Link>
					</h2>
					<p className="text-neutral">
						User profile settings, such as name, avatar, and email address.
					</p>
				</section>

				{/* Security Section */}
				<section className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
						<Link to={`/security`} className="text-blue-600 hover:underline">
							Security
						</Link>
					</h2>
					<p className="text-neutral">
						Password settings and two-factor authentication options.
					</p>
				</section>

			</main>
		</div>
	);
};

export default SettingsPage;
