const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    optimizeFonts: false, async rewrites() {
        return [
            {
                source: '/(links|lnk|l)',
                destination: '/',
            },
        ]
    },
}

module.exports = nextConfig
