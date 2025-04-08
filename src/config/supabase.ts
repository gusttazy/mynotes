import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ozltbylawzukjwwppxlc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96bHRieWxhd3p1a2p3d3BweGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNDUyNDQsImV4cCI6MjA1OTYyMTI0NH0.iNXM_H2ZJhSDiSkjdY1okHemc9QEQ2Toxb4N5PP8W_M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
