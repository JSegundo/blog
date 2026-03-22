import ContactCTA from "@/components/contact-cta"
import { Badge } from "@/components/ui/badge"
import PatientFlowDiagram from "@/components/plaiatech/patient-flow-diagram"
import BackofficeDemo from "@/components/plaiatech/backoffice-demo"
import QuestionnaireBuilder from "@/components/plaiatech/questionnaire-builder"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plaiatech — Case Study",
  description:
    "Replacing paper intake and hallway assessments with AI-powered pre-surgical screening. Built with Next.js, Node.js, AWS Lambda, and DynamoDB.",
}

const techStack = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS Lambda",
  "DynamoDB",
  "S3",
  "API Gateway",
  "SQS",
  "SNS",
  "CloudWatch",
  "Serverless Framework",
]

const techByLayer = {
  Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
  API: ["Node.js", "AWS Lambda", "API Gateway"],
  Data: ["DynamoDB", "S3"],
  Messaging: ["SQS", "SNS"],
  Ops: ["CloudWatch", "Serverless Framework", "GitHub Actions"],
}

export default function PlaitechCaseStudy() {
  return (
    <>
      {/* ─── Hero ─── */}
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24">
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Plaiatech
            </h1>
            <Badge variant="default" size="sm">
              MVP Delivered
            </Badge>
          </div>
          <p className="text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed mb-6">
            Replacing paper intake and hallway assessments with AI-powered
            pre-surgical screening
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Node.js", "TypeScript", "AWS Lambda", "DynamoDB", "SQS", "SNS"].map(
              (tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              )
            )}
          </div>
        </section>

        {/* ─── The Setup ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            The Setup
          </h2>
          <div className="space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              Before any surgery, an anesthesiologist needs to evaluate the
              patient — airway anatomy, cardiac history, current medications,
              allergies, prior reactions to anesthesia. It&apos;s a detailed
              clinical assessment that determines how safe it is to proceed.
            </p>
            <p>
              The problem is timing. In most clinics, this evaluation happens the
              day of surgery or requires a separate in-person visit days before.
              If something unexpected shows up — a drug interaction, an
              uncontrolled condition — the surgery gets postponed. Same-day
              cancellations waste operating room time, stress patients, and cost
              the clinic money.
            </p>
            <p>
              A professional with experience in the field approached me to fix
              this: move the entire pre-anesthesia evaluation to the
              patient&apos;s phone. No app download, no account creation — just
              a link that gets them through a clinically valid assessment from
              home.
            </p>
          </div>
        </section>

        {/* ─── The Constraints ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            The Constraints
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            Three constraints shaped every technical decision:
          </p>
          <div className="space-y-8">
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Clinical accuracy is non-negotiable
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                The system scores patients on established medical scales used
                in clinical practice. These aren&apos;t suggestions;
                they&apos;re the same standards anesthesiologists use in
                person. Getting them wrong means patient safety is compromised.
              </p>
            </div>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Patients aren&apos;t tech-savvy
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                The typical user is a 65-year-old facing surgery, not a digital
                native. They get an SMS link, tap it, and need to complete
                everything in their phone browser. No app store, no login, no
                second chances to figure out confusing UI.
              </p>
            </div>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Every clinic does it differently
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                An orthopedic clinic asks different questions than a cardiac
                surgery center. Each specialty has its own protocols, and clinics
                need to customize intake flows without calling a developer every
                time.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── What I Built ─── */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-[var(--text-primary)]">
          What I Built
        </h2>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-16">
          Each piece of the system maps back to a constraint. Here&apos;s how
          the solution came together.
        </p>
      </div>

      <div className="space-y-20 mb-20">
        {/* 4a: Patient Experience → Constraint #2 */}
        <section>
          <div className="max-w-3xl mx-auto px-6 mb-8">
            <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
              Solving for: patients aren&apos;t tech-savvy
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
              Patient Experience
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              The patient receives an SMS with a link. No app to download, no
              account to create. They tap the link and land on an adaptive
              questionnaire organized into blocks — each screen presents
              multiple related questions, with dependent questions that
              show or hide based on previous answers. The entire experience is
              optimized for a phone screen — large touch targets, clear
              language, and a logical flow that guides patients through
              sections like medical history, medications, and document uploads.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <PatientFlowDiagram />
          </div>
        </section>

        {/* 4b: AI-Powered Clinical Assessment → Constraint #1 */}
        <section>
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
              Solving for: clinical accuracy is non-negotiable
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
              AI-Powered Clinical Assessment
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              As the patient works through the questionnaire, each answer is
              tagged with a specific clinical score. The system collects
              responses across many dimensions — medical history, current
              conditions, previous surgeries, and more — and an algorithm
              evaluates all answers together to produce a clinical risk
              assessment. One input among many is a photo analyzed by a
              computer vision model to determine a clinical classification
              relevant to the procedure.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              The algorithm combines all these scored inputs to compute an
              overall risk classification. The anesthesiologist receives a
              pre-filled risk assessment instead of starting from scratch —
              with every contributing factor traceable back to a specific
              patient answer.
            </p>
          </div>
        </section>

        {/* 4c: Questionnaire Builder → Constraint #3 */}
        <section>
          <div className="max-w-3xl mx-auto px-6 mb-8">
            <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
              Solving for: every clinic does it differently
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
              Questionnaire Builder
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Each clinic configures its own intake flow through a visual
              builder. Questions can be reordered, branching logic connects
              blocks so different patient profiles trigger different follow-up
              paths — and none of it requires a developer. A cardiac clinic can
              add deep questions about pacemakers while an orthopedic clinic
              focuses on joint replacement history.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <QuestionnaireBuilder />
          </div>
        </section>

        {/* 4e: Medical Staff Dashboard */}
        <section>
          <div className="max-w-3xl mx-auto px-6 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
              Medical Staff Dashboard
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Everything consolidates into a single dashboard for the
              anesthesiologist. Patient responses, AI-generated risk scores,
              parsed medications, uploaded documents — all reviewed before the
              patient ever arrives. The system auto-generates a structured
              pre-anesthesia report that would have taken 30 minutes to compile
              manually.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <BackofficeDemo />
          </div>
        </section>
      </div>

      {/* ─── Architecture ─── */}
      <div className="max-w-3xl mx-auto px-6">
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            Architecture
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            Fully serverless. Patient requests hit API Gateway, which routes to
            Lambda functions handling questionnaire logic, AI assessment, and
            document processing. DynamoDB stores patient data with strict
            tenant isolation — shared DynamoDB tables use clinic-scoped
            partition keys, with access control enforced at the API layer. S3
            handles
            document storage with pre-signed URLs for secure upload and
            retrieval.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(techByLayer).map(([layer, techs]) => (
              <div
                key={layer}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4"
              >
                <div className="text-sm font-medium text-[var(--accent)] mb-3 uppercase tracking-wide">
                  {layer}
                </div>
                <div className="space-y-1.5">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="text-sm text-[var(--text-secondary)]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Results & Impact ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            Results &amp; Impact
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5 text-center">
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                ~15 min
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                Average evaluation time
              </div>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5 text-center">
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                0
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                In-person visits required
              </div>
            </div>
            {/* TODO: Add real metrics once available — e.g. "X% reduction in same-day cancellations", "Y patients evaluated" */}
            {/* TODO: Check with client what metrics can be shared publicly (NDA) */}
            <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] p-5 text-center opacity-60">
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                —
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {/* TODO: Real metric */}
                Metric TBD
              </div>
            </div>
            <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] p-5 text-center opacity-60">
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                —
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {/* TODO: Real metric */}
                Metric TBD
              </div>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            The MVP has been delivered and is entering its first round of
            real-world testing with clinics. The next iteration will be shaped
            by how medical staff and patients respond to the system in
            practice.
          </p>
          {/* TODO: Update this section with actual results after pilot feedback */}
        </section>

        {/* ─── Tech Stack ─── */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  )
}
