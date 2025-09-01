export default ({ env }: { env: (key: string) => string }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "foster_flooring_uploads", // Your project-specific folder
          // Enable transformations for thumbnails
          transformations: {
            responsive: true,
            format: "auto",
            quality: "auto",
          },
        },
        delete: {},
      },
    },
  },
});