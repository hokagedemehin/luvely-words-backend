module.exports = ({ env }) => ({
  // ***********************************************************
  // ? CLOUDINARY
  // ***********************************************************
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ********************************************************
  // **********************************************************

  // *******************************************************
  //  ? MAILGUN
  // *********************************************************
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        key: env("MAILGUN_API_KEY"), // Required
        domain: env("MAILGUN_DOMAIN"), // Required
        url: env("MAILGUN_URL", "https://api.mailgun.net"), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: "ibk2k7@gmail.com",
        defaultReplyTo: "ibk2k7@gmail.com",
      },
    },
  },
  // *****************************************************************
  // ******************************************************************

  // ***********************************************************
  // CONTENT VERSIONING
  "content-versioning": {
    enabled: true,
  },

  //  ***********************************************************
  //  ? GENERATE DATA
  "generate-data": {
    enabled: true,
  },

  // *************************************************************
  // IMPORT - EXPORT DATA
  "import-export-entries": {
    enabled: true,
  },

  // **************************************************************
  // NOTES
  "entity-notes": {
    enabled: true,
  },

  // **************************************************************
  // SEO
  seo: {
    enabled: true,
  },
});
