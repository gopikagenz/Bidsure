# BidSure™
### AI-Powered Intelligent Procurement & Bid Compliance Verification Platform
> **Tagline:** *Trust Every Bid. Verify Every Claim.*

---

## 🏛️ Executive Summary

**BidSure** is a modern, enterprise-grade bid compliance and procurement verification platform engineered for government departments (e.g. GeM, CPPP, MoHUA, State Urban Development) and private enterprise sourcing organizations (e.g., EPC, Infrastructure, Healthcare, Corporate Supply Chain).

Currently, procurement officers manually examine hundreds of complex statutory documents submitted by bidders. This manual review process is time-consuming, prone to human error, vulnerable to forged certificates, and blind to coordinated syndicate / cartel collusion between competing bidders.

BidSure automates **document extraction, external source verification, deterministic compliance evaluation, cross-bidder collusion detection, and evidence-based reporting**, while enshrining the foundational governance principle: **AI assists and extracts evidence; deterministic rules evaluate criteria; the authorized Procurement Officer always makes the binding final decision.**

---

## 🚀 Core Architectural Principle

```
Tender Creation ──► Bidder Submission ──► Document Ingestion ──► AI Extraction & Analysis
                                                                        │
Officer Rulings ◄── Explainable Ranking ◄── Compliance Rules ◄── 11-Source Verification
```

1. **AI extracts & analyzes:** Structured key-value fields and potential discrepancies are parsed from uploaded PDF certificates.
2. **Verification sources validate:** Multi-source adapters validate credentials against GSTN, NSDL PAN, Udyam MSME, EPFO, ESIC, DPIIT, and National Debarment registries.
3. **Deterministic rules evaluate:** Published tender criteria are evaluated through mathematical PASS / FAIL / REVIEW rules.
4. **BidSure explains every finding:** Findings link directly to supporting document page numbers, extracted values, and SHA-256 evidence digests.
5. **The Officer makes the final decision:** **AI is strictly prohibited from automatically rejecting or disqualifying any bidder.**

---

## 💎 8 Unique Differentiating Features

1. **Compliance Passport™**  
   Reusable, continuously updated bidder credential profile. Validates past tender determinations, pre-verified tax certificates, and enforces periodic expiry re-validation rather than assuming permanent validity.
2. **Evidence-Based AI Document Intelligence**  
   Every AI finding links to the source document, page, bounding coordinates, and extracted field with confidence indicators and manual officer correction capability.
3. **Cross-Bidder Intelligence & Cartel Radar**  
   Identifies hidden collusion vectors: co-located physical premises, shared authorized signatory phone numbers, identical document metadata, and suspicious price clustering (< 1% margins).
4. **Dedicated 11-Source Statutory Verification Engine**  
   Covers GST, PAN, Udyam MSME, Income Tax Returns, EPFO, ESIC, Startup India, NSIC, OEM Authorization (MAF), Make in India Local Content, and Central Debarment / Blacklist checks.
5. **Explainable Eligibility Ranking**  
   Orders bidders strictly under published tender conditions, providing deep mathematical explainability modals for every rank assignment.
6. **Tamper-Evident SHA-256 Audit Trail**  
   Every upload, extraction, verification check, officer override, and award determination is sealed in a cryptographic SHA-256 evidence chain with instant CSV export.
7. **Dual Government & Private Sector Governance Modes**  
   Full multi-tenant policy configuration supporting Government GeM / GFR 2017 rules (e.g. mandatory MSME 25% preference, Class-I 50% local content) and Private Commercial procurement workflows.
8. **Human-in-the-Loop Authority**  
   Procurement officers possess dedicated review workspaces to override automated findings with mandatory written justifications, request bidder clarifications, or confirm awards.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Lucide React, Recharts, Framer Motion |
| **Backend** | Node.js, Express.js, REST API architecture |
| **Database** | PostgreSQL Client (`pg`) + Local Persistent Store Adapter (`store.json`) with auto-fallback |
| **AI Intelligence** | Google Gemini API (gemini-1.5-flash) with local deterministic heuristic parser fallback |
| **Forensics** | Cryptographic SHA-256 hashing, PDF extraction, Font Layer Tampering Radar |

---

## 👥 4 User Perspectives & Quick Demo Role Switcher

BidSure includes an instant **1-Click Perspective Switcher** in the top bar to evaluate all 4 user roles:

1. **Procurement Officer** (`Vikramaditya Rathore`, `officer@bidsure.gov.in`)  
   *Privileges:* Review submissions, inspect verification evidence, override automated rules with justification, issue final decisions (Approve, Disqualify, Clarify), inspect tamper-evident audit ledger.
2. **Organization Administrator** (`Dr. Sunita Kulkarni, IAS`, `admin@bidsure.gov.in`)  
   *Privileges:* Manage organization profile, toggle Government vs Private procurement policies, configure MSME / local content thresholds, manage user access.
3. **Bidder / Vendor** (`Rajeshwar Rao`, `vendor@apexcybertech.com`)  
   *Privileges:* Maintain company profile, upload required credentials (PDF), track submission status, view and renew reusable Compliance Passport.
4. **Private Company Procurement Manager** (`Priya Mehra`, `priya.mehra@tataglobal.com`)  
   *Privileges:* Configure commercial procurement workflows, inspect supply chain vendor risk, enforce corporate approval limits.

---

## 📦 Implemented Modules Overview

- **Authentication (`/pages/auth`)**: Professional login with password toggle, role switcher cards, registration, and forgot password.
- **Executive Dashboard (`/pages/dashboard`)**: 6 core KPIs, Recharts monthly trend graphs, compliance breakdown donuts, pending officer actions, and real-time audit stream.
- **Tender Management (`/pages/tenders`)**: Create, edit, delete (with modal confirmation), and view tenders across Works, Goods, Services, and IT categories with custom eligibility rules.
- **Bidder Directory (`/pages/bidders`)**: Search by GSTIN/PAN, filter by risk level (Critical, High, Medium, Low), detailed profile drawers with 3-year turnover capability.
- **Document Vault (`/pages/documents`)**: Drag-and-drop PDF upload, instant SHA-256 cryptographic hashing, status tracking, manual field corrections, and preview modals.
- **AI Document Intelligence (`/pages/ai-intelligence`)**: Key-value field extraction, optical text preview, confidence radar, and cross-document discrepancy highlight.
- **Statutory Verification Centre (`/pages/verification`)**: 11 statutory categories with live vs simulated transparency badges, single and batch execution.
- **Compliance Rules Engine (`/pages/compliance`)**: Deterministic PASS / FAIL / REVIEW rules explorer linking supporting documents and regulatory clauses.
- **Compliance Passport (`/pages/passport`)**: Reusable credential token with expiry tracking and re-verification triggers.
- **Cross-Bidder Collusion Radar (`/pages/risk`)**: Syndicate detection for shared premises, identical phone numbers, and pricing clusters with formal resolution workflows.
- **Document Forensics Radar (`/pages/anomalies`)**: Font layer substitution, PDF metadata alterations, and duplicate file hash alerts.
- **Eligibility Ranking (`/pages/ranking`)**: Tender-level comparative ranking table with deep "Why this Rank?" explainability modals.
- **Officer Decision Centre (`/pages/officer`)**: Unified evidence inspection dossier with Approve, Disqualify, Request Clarification, and Manual Override capabilities.
- **Tamper-Evident Audit Trail (`/pages/audit`)**: Immutable log of all mutations, searchable by hash, user, or action, with one-click CSV export.
- **Reports & Analytics (`/pages/reports`)**: Printable / PDF-ready formal compliance dossiers with digital certification blocks and CSV downloads.
- **Organization Settings (`/pages/settings`)**: Government vs Private policy presets, MSME % preference, local content % thresholds, and user management.

---

## 🚀 Quickstart & Execution Instructions

### Prerequisites
- Node.js (v18 or higher; tested on v24.18.0)
- npm (v9 or higher; tested on v11.16.0)

### 1. Unified Single-Port Launch (Recommended)
The backend server serves both the REST API and the production-optimized React client from a single process:

```bash
# Start unified application on port 5000
npm start
```
Open **`http://localhost:5000`** in any web browser.

### 2. Full-Stack Development Mode (With Vite Hot-Reloading)
To run client and server in separate terminal sessions with instant hot module replacement:

**Terminal 1 (Backend API):**
```bash
npm run server
# Runs Express API on http://localhost:5000 with --watch
```

**Terminal 2 (Frontend Client):**
```bash
npm run client
# Runs Vite React Dev Server on http://localhost:5173 (proxies /api to 5000)
```
Open **`http://localhost:5173`** in your browser.

### 3. Build & Typecheck
```bash
npm run build
# Executes TypeScript typechecking and Vite production asset bundling
```

---

## 🗄️ Database Architecture & PostgreSQL Schema

BidSure features a dual-mode database adapter (`server/db/db.js`):
1. **PostgreSQL Mode:** If `DATABASE_URL` is defined in `.env`, it automatically connects via connection pooling, creates tables from `server/db/schema.sql`, and executes SQL queries.
2. **Persistent Local Mode:** If no external PostgreSQL connection is present, it uses a local JSON store (`server/db/store.json`) pre-populated with enterprise procurement demonstration data.

The full PostgreSQL DDL script is located at:
[`server/db/schema.sql`](file:///server/db/schema.sql)

---

## 🔒 Security, Compliance & Disclaimers

- **Cryptographic Non-Repudiation:** All uploaded documents have their binary SHA-256 hash computed immediately upon ingestion.
- **Transparency of Mock Adapters:** All external government database adapters are explicitly tagged as `Official Portal Sync` or `Simulated Adapter`. Simulated responses are never falsely portrayed as official government verifications.
- **Human Decision Authority:** AI models predict structured values and identify potential anomalies; legal determinations remain exclusively with authorized procurement officials.

---
*BidSure™ — Enterprise Procurement Integrity & Bid Compliance Verification Platform*

