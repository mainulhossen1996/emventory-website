// ── DATA DEFINITIONS ──
// Extracted from the page so components stay presentational and the
// content can be edited (or swapped for a CMS/API fetch) independently.

export const DOCUMENTATION_SECTIONS = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { id: "registration", title: "Account Registration" },
        { id: "business-setup", title: "Initial Business Setup" },
      ],
    },
    {
      id: "management",
      title: "Platform Configuration",
      items: [
        { id: "organization-settings", title: "Organization Settings" },
        { id: "role-rbac", title: "Role Management & RBAC" },
      ],
    },
  ];
  
  export const CONTENT_DATABASE = {
    registration: {
      title: "Account Registration",
      subtitle:
        "Initialize your global identity token on the Emventory infrastructure framework.",
      description:
        "Creating an account provisionally allocates an isolated sandbox runtime environment linked directly to your authentication profile. All operations conform to native multi-tenant protection models.",
      steps: [
        {
          title: "Authentication Portal Access",
          detail:
            "Navigate directly to the admin terminal cluster and click create individual identity profile node.",
        },
        {
          title: "Verification Pipeline Validation",
          detail:
            "Confirm the secure cryptographically signed email handshake received at your declared inbox domain location.",
        },
        {
          title: "Two-Factor Configuration (MFA)",
          detail:
            "Bind an absolute Time-based One-Time Password (TOTP) seed validation mechanism onto your credential set immediately.",
        },
      ],
      proTip:
        "If deploying on isolated corporate intranets behind strict proxies, whitelist our global outbound validation route patterns prior to starting validation loops.",

    },
    "business-setup": {
      title: "Initial Business Setup",
      subtitle:
        "Instantiate your primary node cluster variables and layout localized business bounds.",
      description:
        "The initialization wizard hooks directly into regional engine layers. Configuring this properly shapes baseline runtime parameters for downstream logic engines like taxes, regional time matching, and storage nodes.",
      steps: [
        {
          title: "Define Global Entity Scope",
          detail:
            "Input real legislative branding names, official contact keys, and currency matrices (e.g., BDT, USD).",
        },
        {
          title: "Map Physical Outlets & Warehouses",
          detail:
            "Construct localized geospatial addresses representing physical loading storage locations or point-of-sale points.",
        },
        {
          title: "Establish System Catalog Archetypes",
          detail:
            "Declare whether your inventory maps to high-volume variations, flat inventory SKUs, or dynamic batch tracking matrices.",
        },
      ],
      proTip:
        "Dynamic currency settings default strictly to base values. Ensure exchange parameter adjustments use steady external APIs.",

    },
    "organization-settings": {
      title: "Organization Settings",
      subtitle:
        "Establish system operational parameters and cross-branch global execution logic.",
      description:
        "Manage overarching infrastructure properties including system telemetry behaviors, custom operational constraints, automated ledger triggers, and third-party Webhook endpoint allocations.",
      steps: [
        {
          title: "Bind Custom Domain Layers",
          detail:
            "Point routing target configurations directly to our edge endpoints via clean standard ANAME/CNAME record allocations.",
        },
        {
          title: "Configure Global Automation Rules",
          detail:
            "Establish baseline re-order parameters that auto-trigger stock requests whenever catalog items drop below local thresholds.",
        },
        {
          title: "Webhook Callbacks Allocation",
          detail:
            "Register live target listeners to immediately ping your microservices whenever checkout inventory state maps shift.",
        },
      ],
      proTip:
        "Always test custom Webhook endpoints inside our mock staging panel before piping execution records down into production loops.",

    },
    "role-rbac": {
      title: "Role Management & RBAC",
      subtitle:
        "Granular attribute-based and role-based cryptographic access constraints.",
      description:
        "Control boundary limits and access privileges safely across system modules. Prevent operational staff from tweaking organizational metrics while providing absolute control nodes for root keys.",
      steps: [
        {
          title: "Create Structural Operational Roles",
          detail:
            "Generate target profiles such as Store Manager, Inventory Auditor, or Third-Party Fulfillment Broker.",
        },
        {
          title: "Assign Precise Context Privileges",
          detail:
            "Toggle binary execution flags across granular actions: Read Catalog, Mutate SKU Matrix, Purge Ledger Record.",
        },
        {
          title: "Provision API Identity Access Keys",
          detail:
            "Draft cryptographically unique bearer tokens matching specified system scopes for integration headless apps.",
        },
      ],
      proTip:
        "Never share API Bearer tokens across parallel service scripts. Generate isolated keys per worker node to maintain absolute trace logs.",

    },
  };