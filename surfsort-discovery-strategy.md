# SurfSort AI — Product Discovery Strategy

## Context

SurfSort AI is a workflow tool for surf photographers who manually sort 200–1000 photos per session by individual surfer before selling. The tool automates this with YOLOv8 detection → DINOv2 embeddings → HDBSCAN clustering (no facial recognition needed).

**Already done:** 1 unprompted validation interview, competitive analysis (Surfphotosmate, SeeYouSurf, GeoSnapShot, Zenfolio), 60+ contacts mapped (Argentina + Costa Rica), Mom Test script written, UX wireframe built, AI pipeline prototype running.

**Biggest open question:** Web app vs. local/desktop tool.

## What this document covers

1. Assumption map with risk prioritization
2. Interview execution plan (using existing contacts + script)
3. Experiment designs for the top 3 riskiest assumptions
4. Successful SaaS discovery case studies as reference
5. Week-by-week execution timeline

---

## Phase 1 — Map & Prioritize Assumptions

### Riskiest assumptions to validate (ranked by impact × uncertainty)

#### Value assumptions (does anyone care?)

| ID | Assumption | Evidence so far | Needed |
|----|-----------|----------------|--------|
| A1 | Photographers spend 2+ hours sorting per session and consider it a painful bottleneck | 1 signal | 5+ |
| A2 | The time saved is worth paying for (vs. "it's annoying but part of the job") | Unknown | 5+ |
| A3 | AI clustering accuracy is good enough that correction time < manual sort time (the 80% threshold) | Pipeline prototype running | Real-world validation |

#### Usability assumptions (can they use it?)

| ID | Assumption | Evidence so far | Needed |
|----|-----------|----------------|--------|
| A4 | Web upload is acceptable for 200–1000 high-res photos (bandwidth, trust, wait time) | Unknown — **the open question** | >70% preference signal |
| A5 | The cluster triage → per-cluster correction UX is intuitive without training | Wireframe built | Wizard of Oz test |

#### Viability assumptions (can it be a business?)

| ID | Assumption | Evidence so far | Needed |
|----|-----------|----------------|--------|
| A6 | Photographers will pay $X/month or $Y/session (pricing model unclear) | Unknown | Landing page + interview data |
| A7 | The market is big enough — how many surf photographers exist globally and how many sessions/month | Unknown | Market sizing estimate |
| A8 | Photographers aren't locked into Surfphotosmate's ecosystem in a way that prevents switching | Competitive analysis done | Interview confirmation |

#### Feasibility assumptions (can you build it?)

| ID | Assumption | Evidence so far | Needed |
|----|-----------|----------------|--------|
| A9 | The pipeline handles real-world failure modes (backlit shots, multiple surfers in frame, similar wetsuits) at acceptable accuracy | Prototype running | Real session testing |
| A10 | Processing cost per session stays under the price photographers would pay | Unknown | Cost modeling after Wizard of Oz |

### Priority order for validation

1. **A1 + A2** (value) — If the pain isn't real or isn't worth paying for, nothing else matters
2. **A4** (web vs local) — This determines your entire architecture
3. **A6 + A7** (viability) — Pricing and market size determine if this is a business or a side project
4. **A3 + A9** (accuracy) — Can the AI actually deliver?

---

## Phase 2 — Interview Execution Plan

### Goal: 8–12 interviews in 3 weeks

### Batch 1 (Week 1): 4–5 interviews from existing contacts

- Pick from Argentina + Costa Rica list (60+ contacts mapped)
- Use existing Mom Test script
- Key questions to add/emphasize:
  - "Walk me through what happens after you finish shooting a session" *(workflow mapping)*
  - "How do you currently get photos to buyers?" *(understand full pipeline, not just sorting)*
  - "Have you tried any tools to help with this?" *(existing solutions / workarounds)*
  - "If sorting took 5 minutes instead of 3 hours, what would you do with that time?" *(value of time saved)*
  - **"If I gave you a tool that required uploading all your session photos to a website — how would you feel about that?"** *(web vs local, directly)*
  - "What would you expect to pay for something like this?" *(anchor after they've expressed pain, not before)*

### Batch 2 (Week 2–3): 4–7 interviews expanding geography

- Target: Bali, Australia, Portugal, Hawaii, California — the big surf photography markets
- Source: Instagram DMs to photographers with "surf photographer" in bio + active selling
- Adjust script based on Batch 1 learnings

### Interview analysis template

After each interview, log:

| Field | Notes |
|-------|-------|
| **Interviewee** | Name, location, session volume |
| **Pain level (1–5)** | How much does sorting bother them? |
| **Current workaround** | What do they do today? |
| **Web vs local preference** | Strong signal either way? |
| **Willingness to pay** | What did they say unprompted about money? |
| **Surprise insight** | What did you learn that you didn't expect? |
| **Key quotes** | Verbatim quotes worth remembering |

---

## Phase 3 — Experiments for Top Assumptions

### Experiment 1: Landing Page Test

**Validates:** A1 (pain is real), A2 (worth paying for), A6 (pricing model)

| | |
|---|---|
| **What** | Single-page site explaining SurfSort AI with pricing options and a "Join waitlist" CTA |
| **Hypothesis** | If >15% of surf photographers who visit the page join the waitlist, the pain is real and the value proposition resonates |
| **How** | Share link in surf photography Facebook groups, Instagram stories, direct outreach to contacts |
| **Measure** | Conversion rate, which pricing tier gets most clicks, email signup count |
| **Effort** | 1 day to build, 1 week to collect data |

### Experiment 2: Wizard of Oz Test

**Validates:** A3 (accuracy sufficient), A5 (UX is intuitive)

| | |
|---|---|
| **What** | Let 3–5 photographers upload a real session. Run the AI pipeline, manually fix the worst clusters, present the result as "here's what the tool produced" |
| **Hypothesis** | If photographers say the output saved them meaningful time and the corrections were minor, accuracy is viable |
| **How** | Recruit from interview pool. Process their actual photos. |
| **Measure** | Time to review/correct vs. their reported manual sort time, satisfaction score, "would you use this again?" |
| **Effort** | 1 week (pipeline already exists) |

### Experiment 3: Prototype Preference Test

**Validates:** A4 (web vs local)

| | |
|---|---|
| **What** | Show photographers two 30-second screen recordings: (A) web upload flow, (B) local desktop app flow. Ask which they'd prefer and why. |
| **Hypothesis** | One option will get >70% preference with consistent reasoning |
| **How** | Can be done during interviews or async via Loom + Typeform |
| **Measure** | Preference ratio, stated reasons, any deal-breakers mentioned |
| **Effort** | 1 day to record mockups, fold into existing interviews |

---

## Phase 4 — Discovery Case Studies (Reference)

### 1. Superhuman — "Product-Market Fit Engine"

**What they did:** Before building, Rahul Vohra interviewed 100+ professionals about email pain. Used Sean Ellis' PMF survey ("How would you feel if you could no longer use this product?") as a quantitative gate. Only built features that moved the "very disappointed" percentage above 40%.

**Takeaway for SurfSort:** After the Wizard of Oz test, send the Sean Ellis survey. If <40% would be "very disappointed" without SurfSort, iterate before scaling.

### 2. Buffer — "Landing page before code"

**What they did:** Joel Gascoigne put up a landing page describing Buffer with a pricing page. When people clicked a plan, it said "not ready yet, leave your email." 120 signups in a few days confirmed willingness to pay before any code was written.

**Takeaway for SurfSort:** Experiment 1 (landing page) follows this playbook. Key insight: include real pricing, not just "sign up." Clicking on $29/month is a stronger signal than a free email signup.

### 3. Figma — "Dogfooding with design teams"

**What they did:** Before public launch, Figma embedded with 5–10 design teams and watched them use the tool in real workflows. They didn't just ask "do you like it?" — they watched where people got stuck.

**Takeaway for SurfSort:** The Wizard of Oz test (Experiment 2) is the version of this. Watch photographers go through the cluster correction UX. Screen-record it if they agree. Friction points tell more than any interview answer.

### 4. Loom — "Chrome extension MVP"

**What they did:** Instead of building a full video platform, they shipped the smallest possible thing: a Chrome extension that recorded your screen and gave you a link. The distribution channel (share a link) was the product validation.

**Takeaway for SurfSort:** If web wins over desktop, the MVP could be as simple as "upload a folder → get sorted folders back as a download." No dashboard, no watermarking, no buyer-side marketplace. Just the sorting.

---

## Phase 5 — Week-by-Week Execution Timeline

### Week 1: Interviews + Landing Page

- [ ] Run 4–5 interviews from Argentina/Costa Rica contacts
- [ ] Build landing page with pricing tiers ($19/mo hobby, $39/mo pro, $X/session pay-as-you-go — test which)
- [ ] Log interview results in analysis template
- [ ] Share landing page in 2–3 surf photography communities

### Week 2: Expand + Wizard of Oz

- [ ] Run 3–4 more interviews (expand to Bali, Australia, Portugal)
- [ ] Recruit 3 photographers for Wizard of Oz test from interview pool
- [ ] Run their real sessions through the AI pipeline
- [ ] Record prototype preference videos (web vs local) for Experiment 3

### Week 3: Analyze + Decide

- [ ] Complete remaining interviews (target: 8–12 total)
- [ ] Deliver Wizard of Oz results to test photographers, collect feedback
- [ ] Compile all data: interview logs, landing page metrics, Wizard of Oz satisfaction, web vs local preference
- [ ] Make go/no-go decisions on:
  - Is the pain validated? (need 6+ strong signals out of 8–12 interviews)
  - Web or local? (need >70% preference in one direction)
  - What's the MVP scope? (just sorting? sorting + watermark? sorting + buyer gallery?)
  - What pricing model? (subscription vs per-session)

### Week 4: Commit or Pivot

- [ ] If validated: define MVP spec based on discovery findings, start building
- [ ] If not validated: identify what assumption failed and whether there's a pivot worth exploring
- [ ] Send Sean Ellis PMF survey to Wizard of Oz participants

---

## Go/No-Go Criteria (Quantified)

| Decision | Green (go) | Yellow (iterate) | Red (pivot) |
|----------|-----------|-------------------|-------------|
| Pain is real (A1) | 6+ of 8–12 rate pain ≥4/5 | 4–5 rate pain ≥4/5 | <4 rate pain ≥4/5 |
| Worth paying (A2) | 5+ mention money unprompted or click pricing | 3–4 show payment signals | <3 show payment signals |
| Web vs local (A4) | >70% prefer one option | 50–70% split | No clear preference + strong objections to both |
| Landing page (A6) | >15% visitor → waitlist conversion | 8–15% conversion | <8% conversion |
| Accuracy (A3/A9) | Correction time <30% of manual sort time | Correction time 30–60% of manual | Correction time >60% of manual |
| Market size (A7) | >10K addressable photographers globally | 5–10K addressable | <5K addressable |

---

## Assumption → Validation Method Map

| Assumption | Interview Question | Experiment | Success Metric |
|------------|-------------------|------------|----------------|
| A1: Pain exists | "Walk me through post-session workflow" | — | 6+ pain scores ≥4/5 |
| A2: Worth paying | "What would you expect to pay?" | Landing page (Exp 1) | >15% waitlist conversion |
| A3: Accuracy sufficient | — | Wizard of Oz (Exp 2) | Correction < 30% of manual time |
| A4: Web acceptable | "How would you feel about uploading?" | Preference test (Exp 3) | >70% in one direction |
| A5: UX intuitive | — | Wizard of Oz (Exp 2) | Can complete without guidance |
| A6: Pricing model | "What would you expect to pay?" | Landing page (Exp 1) | Tier click distribution |
| A7: Market size | "How many photographers in your area?" | Desk research | >10K globally |
| A8: No lock-in | "Have you tried any tools?" | — | <30% report switching costs |
| A9: Real-world accuracy | — | Wizard of Oz (Exp 2) | >80% correct clusters |
| A10: Cost viable | — | Cost modeling post-Exp 2 | Cost < 30% of session price |
