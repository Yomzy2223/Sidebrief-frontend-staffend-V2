/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "pixabay.com",
			},
		],
		minimumCacheTTL: 1500000,
	},
};

module.exports = nextConfig;
