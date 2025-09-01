  module.exports = ({ env }) => [
  'strapi::logger',
    "strapi::errors",
      {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            directives: {
              "connect-src": ["'self'", "http:", env("SUPABASE_URL")], // Adjust as needed
              "img-src": ["'self'", "data:", "blob:", env("SUPABASE_URL"), "https://dl.airtable.com"], // Adjust as needed
            },
          },
        },
      },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
