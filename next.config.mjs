import withOptimizedImages from 'next-optimized-images'

export default withOptimizedImages({
    // NOTE: change your base path when deploying to non-root paths
    // basePath: '',
    images: {
        disableStaticImages: true,
        loader: 'custom',
    },
    responsive: {
        sizes: [1024, 512, 256],
    },
})
