import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

const STATUS_OPTIONS = ['new', 'contacted', 'scheduled', 'completed'];

const STATUS_STYLES = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  scheduled: 'bg-purple-100 text-purple-700',
  completed: 'bg-green-100 text-green-700',
};

const NICHE_LABELS = {
  hospitality: 'Hospitality',
  ecommerce: 'E-Commerce',
  other: 'Other',
};

const SPEND_LABELS = {
  under_5k: '<A$5K',
  '5k_15k': 'A$5K–15K',
  '15k_50k': 'A$15K–50K',
  '50k_plus': 'A$50K+',
  not_sure: 'Not sure',
};

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [noteInput, setNoteInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    base44.auth.me().then(user => {
      if (user?.role === 'admin') {
        setIsAdmin(true);
        fetchLeads();
      }
      setAuthChecked(true);
    }).catch(() => setAuthChecked(true));
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const data = await base44.entities.StrategyApplication.list('-created_date', 100);
    setLeads(data);
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    await base44.entities.StrategyApplication.update(id, { status });
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    if (selected?.id === id) setSelected(s => ({ ...s, status }));
  };

  const saveNote = async () => {
    if (!selected) return;
    setSaving(true);
    const updated = { ...selected, biggest_challenge: noteInput };
    await base44.entities.StrategyApplication.update(selected.id, { biggest_challenge: noteInput });
    setLeads(prev => prev.map(l => l.id === selected.id ? updated : l));
    setSelected(updated);
    setSaving(false);
  };

  if (!authChecked) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );

  if (!isAdmin) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white font-heading text-2xl uppercase">Access Denied</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 md:px-10 py-5 flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl uppercase tracking-tight">Lead Dashboard</h1>
          <p className="text-white/40 text-sm mt-0.5">{leads.length} applications total</p>
        </div>
        <button onClick={fetchLeads} className="text-white/40 hover:text-white text-sm transition-colors">
          Refresh ↺
        </button>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Lead List */}
        <div className="w-full md:w-1/2 lg:w-2/5 border-r border-white/10 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          ) : leads.length === 0 ? (
            <p className="text-white/30 text-center py-16">No applications yet.</p>
          ) : (
            leads.map(lead => (
              <div
                key={lead.id}
                onClick={() => { setSelected(lead); setNoteInput(lead.biggest_challenge || ''); }}
                className={`px-6 py-4 border-b border-white/8 cursor-pointer hover:bg-white/5 transition-colors ${selected?.id === lead.id ? 'bg-white/8' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-sm uppercase tracking-tight text-white truncate">
                      {lead.business_name || lead.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5 truncate">{lead.email}</p>
                  </div>
                  <span className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium capitalize ${STATUS_STYLES[lead.status] || 'bg-white/10 text-white/50'}`}>
                    {lead.status || 'new'}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  {lead.niche && <span className="text-white/30 text-xs">{NICHE_LABELS[lead.niche] || lead.niche}</span>}
                  {lead.monthly_ad_spend && <span className="text-white/30 text-xs">· {SPEND_LABELS[lead.monthly_ad_spend] || lead.monthly_ad_spend}</span>}
                  <span className="text-white/20 text-xs ml-auto">
                    {lead.created_date ? new Date(lead.created_date).toLocaleDateString('en-AU') : ''}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        <div className="hidden md:flex flex-col flex-1 overflow-y-auto">
          {!selected ? (
            <div className="flex items-center justify-center flex-1">
              <p className="text-white/20 text-sm">Select a lead to view details</p>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-heading font-bold text-3xl uppercase tracking-tight">{selected.business_name || selected.name}</h2>
                  <p className="text-white/40 mt-1">{selected.name}</p>
                </div>
                <select
                  value={selected.status || 'new'}
                  onChange={e => updateStatus(selected.id, e.target.value)}
                  className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2 cursor-pointer outline-none focus:border-white/40"
                >
                  {STATUS_OPTIONS.map(s => (
                    <option key={s} value={s} className="bg-black capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Email', value: selected.email },
                  { label: 'Website', value: selected.website },
                  { label: 'Industry', value: NICHE_LABELS[selected.niche] || selected.niche },
                  { label: 'Monthly Ad Spend', value: SPEND_LABELS[selected.monthly_ad_spend] || selected.monthly_ad_spend },
                  { label: 'Applied', value: selected.created_date ? new Date(selected.created_date).toLocaleString('en-AU') : '—' },
                ].map(item => item.value ? (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white text-sm font-medium break-all">{item.value}</p>
                  </div>
                ) : null)}
              </div>

              <div className="mb-2 flex items-center justify-between">
                <p className="text-white/40 text-xs uppercase tracking-wider">Notes / Biggest Challenge</p>
              </div>
              <textarea
                value={noteInput}
                onChange={e => setNoteInput(e.target.value)}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm resize-none outline-none focus:border-white/30 transition-colors"
                placeholder="Add notes here..."
              />
              <button
                onClick={saveNote}
                disabled={saving}
                className="mt-3 px-6 py-2.5 rounded-full bg-white text-black font-heading font-bold text-sm uppercase tracking-tight hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Notes'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}