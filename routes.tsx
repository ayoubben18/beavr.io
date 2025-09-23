export const ROUTES = {
  admin: {
    home: "/admin",
    users: {
      home: "/admin/users",
      create: "/admin/users/create",
      edit: "/admin/users/edit",
      delete: "/admin/users/delete",
    },
  },
  customer: {
    pages: {
      home: "/pages",
      create: "/pages/create",
      edit: "/pages/edit",
      delete: "/pages/delete",
    },
    orders: {
      home: "/orders",
      create: "/orders/create",
      edit: "/orders/edit",
      delete: "/orders/delete",
    },
  },
  public: {
    home: "/",
    about: "/about",
    articles: "/articles",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
    faq: "/faq",
    blog: "/blog",
  },
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    verifyEmail: "/verify-email",
  },
} as const;
