/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['avatars.githubusercontent.com'],
        remotePatterns:[{
            hostname:"avatars.githubusercontent.com",
            protocol:'https'
        },{
            hostname:'lh3.googleusercontent.com',
            protocol:'https'
        }]
    }
};

export default nextConfig;
