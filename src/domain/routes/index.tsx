import { RootPage } from 'pages/root/RootPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
	},
]);
