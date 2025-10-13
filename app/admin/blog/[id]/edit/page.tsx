import { createServerSupabaseClient } from "@/lib/supabase/server"
import { BlogForm } from "@/components/admin/blog-form"
import { notFound } from "next/navigation"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()

  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
        <p className="text-muted-foreground">Update your article</p>
      </div>

      <BlogForm post={post} />
    </div>
  )
}
