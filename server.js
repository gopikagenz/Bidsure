import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { db } from './db/db.js';
import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';
import tendersRoutes from './routes/tenders.js';
import biddersRoutes from './routes/bidders.js';
import bidsRoutes from './routes/bids.js';
import documentsRoutes from './routes/documents.js';
import verificationRoutes from './routes/verification.js';
import complianceRoutes from './routes/compliance.js';
import riskRoutes from './routes/risk.js';
import anomaliesRoutes from './routes/anomalies.js';
import passportsRoutes from './routes/passports.js';
import officerRoutes from './routes/officer.js';
import auditRoutes from './routes/audit.js';
import reportsRoutes from './routes/reports.js';
import settingsRoutes from './routes/settings.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/tenders', tendersRoutes);
app.use('/api/bidders', biddersRoutes);
app.use('/api/bids', bidsRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/verification', verificationRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/anomalies', anomaliesRoutes);
app.use('/api/passports', passportsRoutes);
app.use('/api/officer', officerRoutes);
app.use('/api/audit', auditRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/settings', settingsRoutes);

import fs from 'fs';

// System Health & Diagnostics
app.get('/api/health', async (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'BidSure Compliance Verification API',
    version: '1.0.0',
    mode: db.isPostgres ? 'POSTGRESQL' : 'PERSISTENT_STORAGE',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend static build if available
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(clientDistPath, 'index.html'));
    }
  });
  console.log('[BidSure] Serving unified static frontend from client/dist');
}

// Start Server
async function start() {
  try {
    await db.init();
    app.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(`  BidSure Backend Server Running on Port ${PORT}`);
      console.log(`  Health Check: http://localhost:${PORT}/api/health`);
      console.log(`=======================================================`);
    });
  } catch (err) {
    console.error('Failed to start BidSure server:', err);
    process.exit(1);
  }
}

start();
