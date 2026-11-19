

window.PORTAL_CONFIG = {
  SUPABASE_URL: "https://eorqemckpwmenwqcfoav.supabase.co",

  SUPABASE_PUBLISHABLE_KEY: "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
};

if (
  !window.PORTAL_CONFIG.SUPABASE_URL ||
  window.PORTAL_CONFIG.SUPABASE_PUBLISHABLE_KEY.includes("PASTE_YOUR")
) {
  console.warn("Supabase configuration is incomplete.");
}
