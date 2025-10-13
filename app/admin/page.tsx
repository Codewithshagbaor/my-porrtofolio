import { createServerSupabaseClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FolderKanban, Newspaper, TrendingUp } from "lucide-react"

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient()

  // Fetch counts
  const [{ count: projectsCount }, { count: blogCount }, { count: caseStudiesCount }] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("case_studies").select("*", { count: "exact", head: true }),
  ])

  const stats = [
    {
      title: "Total Projects",
      value: projectsCount || 0,
      icon: FolderKanban,
      description: "Active projects",
    },
    {
      title: "Blog Posts",
      value: blogCount || 0,
      icon: Newspaper,
      description: "Published articles",
    },
    {
      title: "Case Studies",
      value: caseStudiesCount || 0,
      icon: FileText,
      description: "Client success stories",
    },
    {
      title: "Total Views",
      value: "12.5K",
      icon: TrendingUp,
      description: "Last 30 days",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your portfolio.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New project added</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Blog post published</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Case study updated</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <a
                href="/admin/projects/new"
                className="block p-3 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <p className="font-medium">Add New Project</p>
                <p className="text-xs text-muted-foreground">Create a new portfolio project</p>
              </a>
              <a
                href="/admin/blog/new"
                className="block p-3 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <p className="font-medium">Write Blog Post</p>
                <p className="text-xs text-muted-foreground">Share your knowledge</p>
              </a>
              <a
                href="/admin/case-studies/new"
                className="block p-3 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <p className="font-medium">Add Case Study</p>
                <p className="text-xs text-muted-foreground">Document client success</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
