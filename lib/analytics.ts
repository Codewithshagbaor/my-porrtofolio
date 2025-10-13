import { createBrowserSupabaseClient } from "./supabase/client"

export async function trackPageView(pageType: "project" | "blog" | "case_study" | "home", pageId?: string) {
  try {
    const supabase = createBrowserSupabaseClient()

    // Track the view
    await supabase.from("page_views").insert({
      page_type: pageType,
      page_id: pageId || null,
      ip_address: null, // Will be handled by server if needed
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    })

    // Increment the counter if pageId exists
    if (pageId) {
      await supabase.rpc("increment_view_count", {
        p_page_type: pageType,
        p_page_id: pageId,
      })
    }
  } catch (error) {
    console.error("Error tracking page view:", error)
  }
}

export async function getAnalytics() {
  try {
    const supabase = createBrowserSupabaseClient()

    // Get total views
    const { count: totalViews } = await supabase.from("page_views").select("*", { count: "exact", head: true })

    // Get views by page type
    const { data: viewsByType } = await supabase
      .from("page_views")
      .select("page_type")
      .then(({ data }) => {
        const counts = data?.reduce((acc: any, view: any) => {
          acc[view.page_type] = (acc[view.page_type] || 0) + 1
          return acc
        }, {})
        return { data: counts }
      })

    // Get recent views (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const { count: recentViews } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("created_at", sevenDaysAgo.toISOString())

    return {
      totalViews: totalViews || 0,
      recentViews: recentViews || 0,
      viewsByType: viewsByType || {},
    }
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return {
      totalViews: 0,
      recentViews: 0,
      viewsByType: {},
    }
  }
}
