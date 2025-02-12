/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      id: "index",
      type: "doc",
      customProps: {
        icon: {
          light: "/img/sidebar/light/getting-started.svg",
          dark: "/img/sidebar/dark/getting-started.svg",
        },
      },
    },
    {
      type: "category",
      label: "Collect Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/collect-data.svg",
          dark: "/img/sidebar/dark/collect-data.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/collect/index",
      },
      items: [
        "guides/collect/collect-cards",
        "guides/collect/issue-cards",
        "guides/collect/receive-cards",
        "guides/collect/collect-data-from-web",
        "guides/collect/collect-data-with-react",
        "guides/collect/collect-data-with-android",
        "guides/collect/collect-data-with-ios",
        "guides/collect/collect-data-with-react-native-on-ios",
        "guides/collect/collect-inbound-sensitive-data",
        "guides/collect/customize-web-form",
      ],
    },
    {
      type: "category",
      label: "Share Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/share-data.svg",
          dark: "/img/sidebar/dark/share-data.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/share/index",
      },
      items: [
        "guides/share/process-card-payments",
        "guides/share/display-cards",
        "guides/share/send-data-to-third-party",
        "guides/share/display-masked-data",
        "guides/share/reveal-tokenized-data",
        "guides/share/reveal-data-from-third-party",
      ],
    },
    {
      type: "category",
      label: "Process Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/process-data.svg",
          dark: "/img/sidebar/dark/process-data.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/process/index",
      },
      items: [
        "guides/process/search-data",
        "guides/process/analyze-data",
        "guides/process/extract-data",
      ],
    },
    {
      type: "category",
      label: "Govern Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/govern-data.svg",
          dark: "/img/sidebar/dark/govern-data.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/govern/index",
      },
      items: [
        "guides/govern/control-data-access",
        "guides/govern/audit-data-access",
        "guides/govern/sessions",
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Blueprints",
      customProps: {
        icon: {
          light: "/img/sidebar/light/blueprint.svg",
          dark: "/img/sidebar/dark/blueprint.svg",
        },
      },
      link: {
        type: "doc",
        id: "blueprints/index",
      },
      items: [
        {
          type: "category",
          label: "Cards",
          link: {
            type: "doc",
            id: "blueprints/cards/index",
          },
          items: [
            "blueprints/cards/collect-and-process-cards",
            "blueprints/cards/issue-and-display-cards",
          ],
        },
        {
          type: "category",
          label: "Personal Information",
          link: {
            type: "doc",
            id: "blueprints/personal-information/index",
          },
          items: ["blueprints/personal-information/query-user-data-from-api"],
        },
        {
          type: "category",
          label: "Migrations",
          link: {
            type: "doc",
            id: "blueprints/migrations/index",
          },
          items: [
            "blueprints/migrations/import-from-database",
            "blueprints/migrations/migrate-off-basis-theory",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      customProps: {
        icon: {
          light: "/img/sidebar/light/info.svg",
          dark: "/img/sidebar/dark/info.svg",
        },
      },
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/what-are-tokens",
        "concepts/what-is-search",
        "concepts/what-are-containers",
        "concepts/access-controls",
        "concepts/what-is-the-proxy",
        "concepts/what-are-reactors",
        {
          type: "doc",
          id: "concepts/transactions",
          customProps: {
            beta: true,
          },
        },
        "concepts/elements",
      ],
    },
    {
      type: "category",
      label: "Expressions",
      customProps: {
        icon: {
          light: "/img/sidebar/light/expression.svg",
          dark: "/img/sidebar/dark/expression.svg",
        },
      },
      link: {
        type: "doc",
        id: "expressions/index",
      },
      items: [
        "expressions/filters",
        "expressions/detokenization",
        "expressions/aliasing",
        "expressions/fingerprints",
        "expressions/masks",
        "expressions/search-indexes",
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      link: {
        type: "doc",
        id: "api/index",
      },
      items: [
        "api/index",
        "api/authentication",
        "api/request-correlation",
        "api/pagination",
        "api/errors",
        "api/ip-addresses",
        "api/rate-limits",
        "api/idempotency",
        "api/testing",
      ],
    },
    {
      type: "category",
      label: "Applications",
      link: {
        type: "doc",
        id: "api/applications/applications",
      },
      items: [
        "api/applications/applications",
        "api/applications/access-rules",
        "api/applications/permissions",
        "api/applications/sessions",
      ],
    },
    "api/logs",
    {
      type: "category",
      label: "Proxies",
      link: {
        type: "doc",
        id: "api/proxies/proxies",
      },
      items: [
        "api/proxies/proxies",
        "api/proxies/ephemeral-proxy",
        "api/proxies/pre-configured-proxies",
      ],
    },
    {
      type: "category",
      label: "Reactors",
      link: {
        type: "doc",
        id: "api/reactors/reactors",
      },
      items: [
        "api/reactors/reactors",
        "api/reactors/reactor-dependencies",
        "api/reactors/reactor-formulas",
        "api/reactors/reactor-errors",
      ],
    },
    {
      type: "category",
      label: "Tenants",
      link: {
        type: "doc",
        id: "api/tenants/tenants",
      },
      items: ["api/tenants/tenants", "api/tenants/tenant-members"],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "api/tokens/tokens",
      },
      items: [
        "api/tokens/tokens",
        "api/tokens/tokenize",
        "api/tokens/token-types",
        "api/tokens/search",
        {
          type: "doc",
          id: "api/tokens/transactions",
          customProps: {
            beta: true,
          },
        },
      ],
    },
    "api/deprecations",
  ],
  sdk: [
    "sdks/index",
    {
      type: "category",
      label: "Server-side SDKs",
      items: [
        {
          type: "autogenerated",
          dirName: "sdks/server-side",
        },
      ],
    },
    {
      type: "category",
      label: "Web SDKs",
      items: [
        {
          type: "doc",
          id: "sdks/web/content-security-policy",
        },
        {
          type: "category",
          label: "JavaScript Elements",
          link: {
            type: "doc",
            id: "sdks/web/javascript/index",
          },
          items: [
            "sdks/web/javascript/types",
            "sdks/web/javascript/options",
            "sdks/web/javascript/lifecycle",
            "sdks/web/javascript/events",
            "sdks/web/javascript/services",
          ],
        },
        {
          type: "category",
          label: "React Elements",
          link: {
            type: "doc",
            id: "sdks/web/react/index",
          },
          items: [
            "sdks/web/react/components",
            "sdks/web/react/events",
            "sdks/web/react/services",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Mobile SDKs",
      items: [
        {
          type: "category",
          label: "Android Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/android/index",
          },
          items: [
            "sdks/mobile/android/types",
            "sdks/mobile/android/options",
            "sdks/mobile/android/events",
            "sdks/mobile/android/services",
          ],
        },
        {
          type: "category",
          label: "iOS Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/ios/index",
          },
          items: [
            "sdks/mobile/ios/types",
            "sdks/mobile/ios/options",
            "sdks/mobile/ios/events",
            "sdks/mobile/ios/services",
          ],
        },
        {
          type: "category",
          label: "ReactNative Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/react-native/index",
          },
          items: [
            "sdks/mobile/react-native/components",
            "sdks/mobile/react-native/services",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
