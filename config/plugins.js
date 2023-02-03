module.exports = ({ env }) => ({
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        "audience",
        { name: "my_custom_field", type: "boolean", label: "My custom field" },
      ],
      contentTypes: ["api::project.project", "api::page.page"],
      contentTypesNameFields: {
        "api::page.page": ["title"],
        "api::project.project": ["name"],
      },
      allowedLevels: 2,
      // gql: {...},
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  // "vercel-deploy": {
  //   enabled: true,
  // },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
  "cookie-manager": {
    enabled: true,
    config: {
      localization: true,
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       delete: {},
  //     },
  //   },
  // },
});
