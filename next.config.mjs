/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig ({
    plugins: [react()],
    assetsInclude: ['**/*.glb'],
})