import React, { useState } from 'react';
import { definePlugin, useClient } from 'sanity';
import { initialSeedDocuments } from '../seedData';

function SeedToolComponent() {
  const client = useClient({ apiVersion: '2026-09-01' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSeed = async () => {
    setLoading(true);
    setStatus('idle');
    setMessage('');
    try {
      const transaction = client.transaction();
      for (const doc of initialSeedDocuments) {
        transaction.createOrReplace(doc as any);
      }
      await transaction.commit();
      setStatus('success');
      setMessage('All 29 documents (5 topic clusters, 14 educational guides, 8 supportive web-apps, and site settings) have been successfully imported into your Sanity Studio! You can now click on "Guides by Topic Cluster" or "All Educational Guides" to browse and edit.');
    } catch (err: any) {
      console.error('Seed error:', err);
      setStatus('error');
      setMessage(`Import failed: ${err.message || 'Unknown error'}. Please make sure you are logged into an account with Editor or Administrator permissions.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px 24px', maxWidth: '720px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '28px' }}>🚀</span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: '#0f172a' }}>
            Tech4Neurodivergent Content Loader
          </h2>
        </div>

        <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
          Load all existing website content into your Sanity Studio with a single click. This will create or update:
        </p>

        <ul style={{ fontSize: '14px', color: '#334155', lineHeight: 1.8, marginBottom: '28px', paddingLeft: '24px' }}>
          <li><strong>5 Topic Clusters:</strong> Understanding Neurodiversity, Autism Spectrum Disorder, Down Syndrome, Intellectual Disabilities, Cerebral Palsy.</li>
          <li><strong>14 Educational Guides:</strong> Complete bilingual definitions, keywords, FAQs, and executive summaries.</li>
          <li><strong>8 Supportive Web-Apps:</strong> Talker AAC, Sentence Builder, Emotion Regulation, Task Analysis, etc.</li>
          <li><strong>Site Layout & Settings:</strong> Homepage hero texts, eSewa ID, QR upload, and disclaimers.</li>
        </ul>

        {status === 'success' && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#ecfdf5', border: '1px solid #6ee7b7', color: '#065f46', fontSize: '14px', lineHeight: 1.5, marginBottom: '24px' }}>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>🎉 Content Successfully Loaded!</div>
            <div>{message}</div>
          </div>
        )}

        {status === 'error' && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b', fontSize: '14px', lineHeight: 1.5, marginBottom: '24px' }}>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>⚠️ Import Error</div>
            <div>{message}</div>
          </div>
        )}

        <button
          onClick={handleSeed}
          disabled={loading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px 28px',
            borderRadius: '10px',
            backgroundColor: loading ? '#94a3b8' : '#059669',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '15px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {loading ? 'Importing Content to Studio...' : '⚡ Populate All 15 Topics & Clusters into Studio'}
        </button>

        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>
          Note: This uses your active browser login session to write safely to your Sanity dataset.
        </p>
      </div>
    </div>
  );
}

export const seedPlugin = definePlugin({
  name: 'seed-tool',
  tools: (prev) => [
    ...prev,
    {
      name: 'seed-content',
      title: 'Import Content (सामग्री लोड गर्नुहोस्)',
      component: SeedToolComponent,
    },
  ],
});
