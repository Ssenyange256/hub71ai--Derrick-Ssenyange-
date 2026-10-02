# Forever Abu Dhabi

A multi-journey relocation preparation workspace for the Hub71+ AI Hackathon.

## Working features

- Review and edit a founder profile; import explicitly labeled text.
- Generate a curated rules-based roadmap with prerequisites and missing items.
- Adapt tasks for household size, startup stage, residency and target date.
- Track task completion during the current visit; reopening prerequisites resets dependent completion marks.
- Download a Markdown preparation pack with profile, progress, sources and enquiry drafts.
- Optional OpenAI extraction and personalized summaries through a server-only Responses API endpoint.

## Current limitations

The published prototype works in rules-based mode until an authorized OpenAI API key is configured. No AI inference has been verified without that connection. Government submissions, eligibility decisions, live source retrieval and document verification are not implemented. Sample information is fictional. Signed-in profiles and checklist progress can be saved to D1 with Save progress. Chat, event bookmarks, budgets and partner-notice previews remain in the current visit.

## AI configuration

Use the approved OpenAI Developers connection workflow to set OPENAI_API_KEY as a secret in the Site runtime. OPENAI_MODEL defaults to gpt-5.4-mini. Redeploy after setting runtime values. Local .env is ignored; .env.example documents the matching keys. Do not put API keys in browser code or Git.

The endpoint sets store:false, validates extracted profiles, constrains outputs to JSON schemas, uses source notes for summaries, and returns clear failure states. The front end does not silently replace failed AI calls with simulated success.

## Development

Dependencies and scripts are preserved from the Sites Vinext starter. Use the Sites build/publish workflow. Type check with node node_modules/typescript/bin/tsc --noEmit.

## Verification

Planner checks cover household/residency adaptation, prerequisite blocking, cascading completion reset, missing-document guards, labeled-text parsing, target dates and exported progress. Browser/WebMCP QA requires a supported browser-control environment. Live OpenAI behavior requires the configured secret.

## Expanded prototype

Four sample journeys (Founder, Investor, Retiree, Job seeker) tailor document fields and roadmap tasks. Discover Abu Dhabi includes culture, seasonal climate, sports, healthcare/Lifecare provider information and official career/property/market portals. Events & network includes curated 2026 event sources, category/location filters, saved events, calendar downloads, editorial update read state and a clearly labeled in-session partner-notice preview.

Housing & insights includes user-transcribed August 2026 area data, a budget calculator based solely on user inputs, official school/agriculture resources and a data-quality review. The construction totals fail reconciliation; supplied forecasts and derived opportunity scores are excluded from recommendations. No live rents, school capacity, farmland inventory, investment returns or market feeds are claimed.

Photo: Experience Abu Dhabi, Louvre Abu Dhabi. Source: https://visitabudhabi.ae/en/things-to-do/culture/museums-and-art/louvre-abu-dhabi . Official asset; no open reuse licence observed.

## Visitor and account flow

The root route is a city introduction with free-use CTAs. /workspace is server-gated with the bundled dispatch-owned Sign in with ChatGPT integration. The platform audience policy still controls who can reach the Site. New users start with a blank profile and can choose their displayed name. D1 workspaces are keyed only by server-authenticated user ID; no client-supplied owner ID is accepted. The Save progress button stores the current profile, completion list and summary. Generated Drizzle migrations are schema-only.

Personal assistant requests require a signed-in identity and supply profile, interests/goals, roadmap status and curated official source notes to the OpenAI Responses API. No connected key means a visibly unavailable chat, never simulated AI replies. Account isolation, auth rejection, cross-origin writes, invalid task progress, schema migration and mocked AI context were checked. Live sign-in/browser interaction and inference require their respective environments and were not verified in this turn.

## UAE-inspired landing refresh

Theme: white surfaces, deep-green actions, charcoal text and restrained red highlights. UAE flag artwork follows the red hoist band and green/white/black stripe order. CSS adds gentle flag movement with prefers-reduced-motion support. Winter guidance links to Experience Abu Dhabi and is explicitly seasonal, not live weather. Etihad and Ohana cards are independent discovery links, not sponsorship claims; development commentary is interpretation, not a return forecast.

Built-in imagegen assets: public/abu-dhabi-blue.png (edited Louvre photo) and public/uae-waving-flag.png (transparent cloth flag). The hero retains an explicit illustrative-edit caption and the original Experience Abu Dhabi credit. The source photo remains untouched.

Hero prompt: Use case: lighting-weather. Asset type: landscape landing page hero. Input image: edit target, existing photograph of Louvre Abu Dhabi. Edit this exact photograph, preserving its recognizable Louvre Abu Dhabi architecture, detailed dome, all building geometry, skyline, viewpoint and wide landscape composition. Change the warm dusky grading to airy clear daylight, with a natural pale blue sky and bright realistic blue/turquoise water, gently rippling. Add subtle realistic greenery only on existing shoreline and land at left and far background. Keep land and water boundaries unchanged, no garden over water, do not change building. Photorealistic crisp architectural travel photography, natural colors. No new text, no logos, no watermarks.

Flag prompt: Use case: photorealistic-natural. Asset type: website decorative identity cutout. Create one standalone photorealistic waving United Arab Emirates flag made of fine woven fabric, entire free-flowing rectangular cloth flag visible with modest natural folds and soft daylight. Official design: vertical red band at hoist on LEFT quarter of flag; remaining RIGHT three quarters contain three equal horizontal stripes GREEN on TOP, WHITE in MIDDLE, BLACK on BOTTOM. Landscape flag proportions 2:1, viewed nearly frontally with believable gentle flowing fabric ripples, all edges visible. No pole, no hardware, no person, no text, no emblem, no shadow cast onto a background. Genuine transparent alpha background outside the cloth, no checkerboard baked into pixels. Intended as subtle decoration behind a hero photo.

## Creator photography

Four unaltered user-supplied photographs are integrated into the landing page as an everyday-life photo story: public/abu-dhabi-terrace.jpg, public/abu-dhabi-greenery.jpg, public/abu-dhabi-dining.jpg and public/abu-dhabi-city-life.jpg. CSS crops are responsive; original files are not edited. Captions describe visible scenes without assigning unverified venue names or restaurant ratings. All eight supplied photographs were reviewed, with four selected for variety and clarity.

## Founder spotlight

The landing page and Founder/Investor Housing & insights view include a promotional creator/company card. BankHQ founder and ML-platform background is user-provided. The supplied site uses Vanedge KYAML branding; its property screening, workflow and management descriptions are attributed to the company website. This is a founder-shared commercial resource, separate from the official-source registry, with an external link and no implication of connected datasets, verified regulatory recognition or forecast returns. No contact form submission, lead forwarding or private profile sharing is performed by this card.

## Navigation and interaction repair

Authenticated landing CTAs use same-frame Next links with prefetch disabled; anonymous SIWC links retain their required top-level navigation. Production logs showed successful embedded landing requests and no workspace requests around the reported failure; blocked top-level navigation is the likely cause, not a confirmed browser trace. Workspace reads/writes have ten-second timeouts. Loading errors offer retry or an explicit sample preview which cannot save over the unseen account. Inactive AI shows working profile/source actions instead of disabled conversation controls. Pack, research and calendar downloads use attached anchors and deferred blob cleanup. View next step scrolls to its expanded task.

Interaction regression checks execute rendered component handlers for entry links, navigation, profile generation, saving, downloads and recovery; these are not browser end-to-end tests. The site is renamed Forever Abu Dhabi throughout visible copy and export names; the established URL stays stable.

## CV and career tools

Job seekers can upload PDF/PNG/JPEG CVs up to 5 MB or paste text for the authenticated /api/cv endpoint. GPT-4o is the requested vision model (OPENAI_CV_MODEL override). Raw files are passed inline to OpenAI only after explicit consent, with store:false; they are not placed in D1/R2. The endpoint checks identity, request origin, consent, magic bytes and size. Extracted facts and evidence-based search-role suggestions have a structured schema and a review step. Only user-reviewed career details are included in account Save progress. There is no live vacancy integration. LinkedIn and Indeed links encode only user-selected role keywords and location. Labeled CV import works without AI and is explicitly identified as such. General labeled imports merge into the current journey instead of resetting it to Founder.

The personal assistant now supports local guided replies for next steps, gaps, enquiry drafts and job searches when OpenAI is offline. Guided responses are labeled rules-based; live AI is never simulated. API failures keep the question for retry. Workspace contrast uses neutral surfaces, dark text and restrained green actions; dark-card headings are white.

Current connection check on 2 October 2026: no OPENAI_API_KEY is configured; the OpenAI Developers plugin is DISABLED_BY_ADMIN and NOT_AVAILABLE. Consequently live chat and vision inference remain unavailable until an administrator enables the approved connection and an authorized key is set as a Site secret. No CV or live AI inference was used in checks. Scripts check-interactions.cjs and check-career.cjs cover manual CV import/review, search editing, guided chat, parser preservation and mocked API payload validation.

## Bounded preparation tool workflow

Connected planning uses Responses function calls to choose a curated-source lookup, build the reviewed profile's deterministic task graph, and create an unsent enquiry draft. Function arguments are validated and execution is capped at six turns/calls. Successful tools and actual call IDs are shown; no simulated tool success is claimed. Local source notes are not live government queries, and preparation dependencies are not verified regulatory requirements. Trace and enquiry are stored with explicit Save progress and included in the pack. Free text first extracts for review; generating follows confirmation. Foreign-currency capital is not converted into an AED setup budget. Live inference remains untested without an approved production key.
