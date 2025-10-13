import { CaseStudyForm } from "@/components/admin/case-study-form"

export default function NewCaseStudyPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Case Study</h1>
        <p className="text-muted-foreground">Document a client success story</p>
      </div>

      <CaseStudyForm />
    </div>
  )
}
