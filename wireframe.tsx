'use client'

import { useState, useEffect } from 'react'

type Patient = 'carlos' | 'ana'

interface Step {
  id: number
  title: string
  subtitle: string
  type: 'standard' | 'ai' | 'filter' | 'output'
  progress: number // 1-5
  branch?: {
    label: string
    condition: string
    patients: Patient[]
    content: React.ReactNode
  }
  screen: React.ReactNode
}

const ProgressBar = ({ filled, total, color }: { filled: number; total: number; color: string }) => (
  <div style={{ display: 'flex', gap: 3, marginBottom: 4 }}>
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        style={{
          flex: 1, height: 3, borderRadius: 2,
          background: i < filled ? color : '#E2E8F0',
          opacity: i === filled - 1 ? 1 : i < filled ? 0.6 : 1,
        }}
      />
    ))}
  </div>
)

const Camera = ({ tag }: { tag?: string }) => (
  <div style={{
    borderRadius: 7, background: '#0f172a', height: 60,
    position: 'relative', display: 'flex', alignItems: 'center',
    justifyContent: 'center', flexShrink: 0, overflow: 'hidden',
  }}>
    {/* corner brackets */}
    {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
      <div key={`${v}${h}`} style={{
        position: 'absolute', width: 10, height: 10,
        [v]: 7, [h]: 7,
        borderColor: 'rgba(255,255,255,.5)', borderStyle: 'solid',
        borderWidth: v === 'top' && h === 'left' ? '2px 0 0 2px'
                   : v === 'top' && h === 'right' ? '2px 2px 0 0'
                   : v === 'bottom' && h === 'left' ? '0 0 2px 2px'
                   : '0 2px 2px 0',
      }} />
    ))}
    {tag && (
      <div style={{ position: 'absolute', top: 5, right: 7, fontSize: 6, color: 'rgba(255,255,255,.4)', fontWeight: 700, letterSpacing: '.08em' }}>
        {tag}
      </div>
    )}
    <span style={{ fontSize: 7, color: 'rgba(255,255,255,.35)', fontWeight: 500 }}>apunta aquí</span>
  </div>
)

const Badge = ({ children, variant }: { children: React.ReactNode; variant: 'ai' | 'asa' | 'risk' }) => {
  const styles = {
    ai:   { background: '#ccfbf1', color: '#0f766e' },
    asa:  { background: '#134E4A', color: 'white' },
    risk: { background: '#fef3c7', color: '#92400e' },
  }
  return (
    <span style={{
      ...styles[variant],
      fontSize: 9, fontWeight: 700, padding: '2px 6px',
      borderRadius: 4, display: 'inline-block', whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  )
}

const CheckItem = ({ label, checked }: { label: string; checked: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9.5, color: '#1e293b' }}>
    <div style={{
      width: 10, height: 10, borderRadius: 2, flexShrink: 0,
      background: checked ? '#0D9488' : 'transparent',
      border: checked ? '1px solid #0D9488' : '1.5px solid #CBD5E1',
    }} />
    {label}
  </div>
)

const PhoneSB = ({ color, label }: { color: string; label?: string }) => (
  <div style={{
    height: 20, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 9px',
    background: color, flexShrink: 0,
  }}>
    {label
      ? <span style={{ fontSize: 7, fontWeight: 700, color: 'rgba(255,255,255,.6)', letterSpacing: '.05em' }}>{label}</span>
      : <div style={{ width: 22, height: 5, background: 'rgba(255,255,255,.2)', borderRadius: 3 }} />
    }
    <div style={{ display: 'flex', gap: 3 }}>
      {[0,1,2].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,.3)' }} />)}
    </div>
  </div>
)

interface PhoneProps {
  sbColor: string
  sbLabel?: string
  borderColor: string
  height?: number
  children: React.ReactNode
}

const Phone = ({ sbColor, sbLabel, borderColor, height = 200, children }: PhoneProps) => (
  <div style={{
    width: 112, height,
    borderRadius: 16, border: `2.5px solid ${borderColor}`,
    background: '#fff', overflow: 'hidden', flexShrink: 0,
    boxShadow: '0 4px 16px rgba(0,0,0,.08)',
  }}>
    <PhoneSB color={sbColor} label={sbLabel} />
    <div style={{ padding: '8px 9px 7px', display: 'flex', flexDirection: 'column', gap: 4, height: `calc(100% - 20px)` }}>
      {children}
    </div>
  </div>
)

const PatientDot = ({ patient, active }: { patient: Patient; active: boolean }) => (
  <div style={{
    width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
    background: patient === 'carlos' ? '#2563EB' : '#f43f5e',
    opacity: active ? 1 : 0.2,
    transition: 'opacity 0.4s ease',
    boxShadow: active ? `0 0 0 3px ${patient === 'carlos' ? 'rgba(37,99,235,.2)' : 'rgba(244,63,94,.2)'}` : 'none',
  }} />
)

const Arrow = ({ top = 70 }: { top?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginTop: top, padding: '0 4px', minWidth: 36 }}>
    <div style={{ flex: 1, height: 1.5, background: '#CBD5E1' }} />
    <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid #CBD5E1' }} />
  </div>
)

const Tag = ({ children, variant }: { children: React.ReactNode; variant: 'blue' | 'teal' | 'dark' | 'pink' | 'ghost' }) => {
  const styles = {
    blue:  { background: '#dbeafe', color: '#1d4ed8' },
    teal:  { background: '#ccfbf1', color: '#0f766e' },
    dark:  { background: '#d1fae5', color: '#134E4A' },
    pink:  { background: '#ffe4e6', color: '#be123c' },
    ghost: { background: '#f1f5f9', color: '#94a3b8' },
  }
  return (
    <span style={{
      ...styles[variant],
      fontSize: variant === 'ghost' ? 9 : 10,
      fontWeight: 700, padding: '3px 10px',
      borderRadius: 20, display: 'inline-block', marginTop: 7,
    }}>
      {children}
    </span>
  )
}

export default function PatientFlowDiagram() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activePatient, setActivePatient] = useState<Patient | 'both'>('both')

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= 3) { setIsPlaying(false); return 3 }
        return prev + 1
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlay = () => {
    setActiveStep(0)
    setIsPlaying(true)
  }

  const steps = [0, 1, 2, 3]
  const stepColors = ['#2563EB', '#0D9488', '#f43f5e', '#0D9488']

  const isStepActive = (i: number) => activeStep >= i

  const colStyle = (i: number): React.CSSProperties => ({
    display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0,
    opacity: isStepActive(i) ? 1 : 0.35,
    transform: isStepActive(i) ? 'translateY(0)' : 'translateY(6px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  })

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: '#F8FAFC',
      borderRadius: 20,
      border: '1px solid #E2E8F0',
      padding: '32px 36px 28px',
      boxShadow: '0 4px 24px rgba(0,0,0,.06)',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-.02em' }}>
            Patient questionnaire flow
          </h3>
          <p style={{ fontSize: 12, color: '#64748b', margin: '3px 0 0', fontWeight: 400 }}>
            Cuestionario adaptativo — se ajusta según perfil del paciente
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Patient toggles */}
          {(['carlos', 'ana'] as Patient[]).map(p => (
            <button
              key={p}
              onClick={() => setActivePatient(prev => prev === p ? 'both' : p)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: 11, fontWeight: 600, padding: '4px 10px 4px 6px',
                borderRadius: 20, border: '1px solid',
                background: p === 'carlos' ? '#eff6ff' : '#fff1f2',
                borderColor: p === 'carlos' ? '#bfdbfe' : '#fecdd3',
                color: p === 'carlos' ? '#1d4ed8' : '#be123c',
                cursor: 'pointer',
                opacity: activePatient === 'both' || activePatient === p ? 1 : 0.4,
                transition: 'opacity .2s',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: p === 'carlos' ? '#2563EB' : '#f43f5e' }} />
              {p === 'carlos' ? 'Carlos · M · 45a' : 'Ana · F · 28a'}
            </button>
          ))}
          {/* Play button */}
          <button
            onClick={handlePlay}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, fontWeight: 600, padding: '5px 12px',
              borderRadius: 20, border: '1px solid #e2e8f0',
              background: 'white', color: '#475569', cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0,0,0,.06)',
            }}
          >
            {isPlaying ? '⏸' : '▶'} {isPlaying ? 'Animando...' : 'Ver flujo'}
          </button>
        </div>
      </div>

      {/* Step progress indicator */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {steps.map(i => (
          <button
            key={i}
            onClick={() => { setActiveStep(i); setIsPlaying(false) }}
            style={{
              height: 4, flex: 1, borderRadius: 2, border: 'none', cursor: 'pointer',
              background: isStepActive(i) ? stepColors[i] : '#E2E8F0',
              transition: 'background .4s ease',
            }}
          />
        ))}
      </div>

      {/* Spine */}
      <div style={{ display: 'flex', alignItems: 'flex-start', overflowX: 'auto', paddingBottom: 4 }}>

        {/* ---- STEP 1: Cardiovascular ---- */}
        <div style={colStyle(0)}>
          <div style={{ position: 'relative' }}>
            <Phone sbColor="#1e293b" borderColor="#1e293b">
              <ProgressBar filled={2} total={5} color="#2563EB" />
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.35 }}>
                ¿Antecedentes cardiovasculares?
              </div>
              <div style={{ flex: 1, minHeight: 8 }} />
              <div style={{ borderRadius: 6, padding: '5px 0', fontSize: 10, fontWeight: 700, textAlign: 'center', background: '#2563EB', color: 'white' }}>Sí</div>
              <div style={{ borderRadius: 6, padding: '5px 0', fontSize: 10, fontWeight: 700, textAlign: 'center', background: 'transparent', border: '1.5px solid #CBD5E1', color: '#94a3b8', marginTop: 3 }}>No</div>
              <div style={{ flex: 1 }} />
              <div style={{ height: 11, borderRadius: 4, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: 7.5, color: '#94a3b8', fontWeight: 600 }}>continuar →</span>
              </div>
            </Phone>
            {/* patient dots on phone */}
            <div style={{ position: 'absolute', top: 8, right: -20, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <PatientDot patient="carlos" active={activePatient === 'both' || activePatient === 'carlos'} />
              <PatientDot patient="ana" active={activePatient === 'both' || activePatient === 'ana'} />
            </div>
          </div>

          {/* Branch: Sí */}
          <div style={{ width: 1.5, borderLeft: '1.5px dashed #CBD5E1', height: 26, margin: '3px auto 0' }} />
          <div style={{ fontSize: 8.5, fontWeight: 600, color: '#94a3b8', margin: '2px 0' }}>Sí ↓</div>
          <Phone sbColor="#1d4ed8" sbLabel="DETALLE" borderColor="#2563EB" height={144}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: '#1e293b', marginBottom: 2 }}>Detalle cardíaco</div>
            <CheckItem label="Hipertensión" checked={true} />
            <CheckItem label="Arritmia" checked={false} />
            <CheckItem label="Insuficiencia" checked={false} />
            <CheckItem label="Marcapasos" checked={false} />
          </Phone>
          <Tag variant="blue">Historial médico</Tag>
          <Tag variant="ghost">solo si: Sí</Tag>
        </div>

        <Arrow top={72} />

        {/* ---- STEP 2: Medication IA ---- */}
        <div style={colStyle(1)}>
          <div style={{ position: 'relative' }}>
            <Phone sbColor="#0f766e" borderColor="#0D9488">
              <ProgressBar filled={3} total={5} color="#0D9488" />
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.35 }}>Medicamentos</div>
              <div style={{ fontSize: 9, color: '#64748b' }}>Fotografía la caja</div>
              <Camera />
              <Badge variant="ai">IA · Detectado</Badge>
              <div style={{ height: 11, borderRadius: 4, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: 7.5, color: '#0f766e', fontWeight: 600 }}>Atorvastatina 20mg</span>
              </div>
            </Phone>
            <div style={{ position: 'absolute', top: 8, right: -20, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <PatientDot patient="carlos" active={activePatient === 'both' || activePatient === 'carlos'} />
              <PatientDot patient="ana" active={activePatient === 'both' || activePatient === 'ana'} />
            </div>
          </div>

          {/* Branch: ghost (optional) */}
          <div style={{ height: 26, margin: '3px auto 0' }} />
          <div style={{ height: 21 }} />
          <div style={{
            width: 112, height: 144, borderRadius: 12,
            border: '1.5px dashed #e2e8f0', background: '#fafafa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 10, color: '#cbd5e1', fontWeight: 600, textAlign: 'center', lineHeight: 1.5, padding: 12 }}>
              Solo si toma<br />medicación
            </span>
          </div>
          <Tag variant="teal">IA · Medicamentos</Tag>
          <Tag variant="ghost">solo si: Sí</Tag>
        </div>

        <Arrow top={72} />

        {/* ---- STEP 3: Sex filter ---- */}
        <div style={colStyle(2)}>
          <div style={{ position: 'relative' }}>
            <Phone sbColor="#be123c" borderColor="#f43f5e">
              <ProgressBar filled={4} total={5} color="#f43f5e" />
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a' }}>Sexo biológico</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 10 }}>
                {[
                  { label: 'Masculino', selected: true },
                  { label: 'Femenino',  selected: false },
                ].map(({ label, selected }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 10.5, color: selected ? '#1e293b' : '#94a3b8' }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                      border: `2.5px solid ${selected ? '#f43f5e' : '#CBD5E1'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {selected && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f43f5e' }} />}
                    </div>
                    {label}
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ height: 11, borderRadius: 4, background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: 7.5, color: '#be123c', fontWeight: 600 }}>filtro activo</span>
              </div>
            </Phone>
            <div style={{ position: 'absolute', top: 8, right: -20, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <PatientDot patient="carlos" active={activePatient === 'both' || activePatient === 'carlos'} />
              <PatientDot patient="ana" active={activePatient === 'both' || activePatient === 'ana'} />
            </div>
          </div>

          {/* Branch: Femenino */}
          <div style={{ width: 1.5, borderLeft: '1.5px dashed #CBD5E1', height: 26, margin: '3px auto 0' }} />
          <div style={{ fontSize: 8.5, fontWeight: 600, color: '#94a3b8', margin: '2px 0' }}>Femenino ↓</div>
          <div style={{ position: 'relative' }}>
            <Phone sbColor="#be123c" sbLabel="SOLO F" borderColor="#f43f5e" height={144}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>Info. de embarazo</div>
              <div style={{ fontSize: 9, color: '#64748b' }}>Estado gestacional</div>
              <div style={{ height: 20, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 4 }} />
              <div style={{ fontSize: 9, color: '#64748b', marginTop: 4 }}>FUR (última regla)</div>
              <div style={{ height: 20, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 4 }} />
            </Phone>
            {/* Ana's dot active, Carlos dimmed */}
            <div style={{ position: 'absolute', top: 8, right: -20, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <PatientDot patient="carlos" active={false} />
              <PatientDot patient="ana" active={activePatient === 'both' || activePatient === 'ana'} />
            </div>
          </div>
          <Tag variant="pink">Sexo biológico</Tag>
          <Tag variant="ghost">solo si: Femenino</Tag>
        </div>

        <Arrow top={72} />

        {/* ---- STEP 4: Airway IA ---- */}
        <div style={colStyle(3)}>
          <div style={{ position: 'relative' }}>
            <Phone sbColor="#0f766e" borderColor="#0D9488">
              <ProgressBar filled={5} total={5} color="#0D9488" />
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.35 }}>Evaluación vía aérea</div>
              <div style={{ fontSize: 9, color: '#64748b' }}>Abre la boca y fotografía</div>
              <Camera tag="MALLAMPATI" />
              <Badge variant="ai">Mallampati II · IA</Badge>
              <div style={{ height: 11, borderRadius: 4, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: 7.5, color: '#0f766e', fontWeight: 600 }}>vía aérea normal</span>
              </div>
            </Phone>
            <div style={{ position: 'absolute', top: 8, right: -20, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <PatientDot patient="carlos" active={activePatient === 'both' || activePatient === 'carlos'} />
              <PatientDot patient="ana" active={activePatient === 'both' || activePatient === 'ana'} />
            </div>
          </div>
          <div style={{ height: 26 + 21 + 144 }} />
          <Tag variant="teal">IA · Visión artificial</Tag>
        </div>

        <Arrow top={72} />

        {/* ---- OUTPUT: PDF / ASA ---- */}
        <div style={colStyle(3)}>
          <div style={{
            width: 108, height: 200, borderRadius: 16,
            border: '2.5px solid #134E4A', background: '#f0fdf4',
            overflow: 'hidden', flexShrink: 0,
            boxShadow: '0 4px 16px rgba(0,0,0,.08)',
          }}>
            <div style={{ background: '#134E4A', padding: '12px 10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 26, height: 32, background: 'rgba(255,255,255,.14)',
                borderRadius: '3px 9px 3px 3px', display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '3px 5px 4px', gap: 2.5,
              }}>
                {[100, 65, 80, 50].map((w, i) => (
                  <div key={i} style={{ height: 2.5, borderRadius: 1.5, background: 'rgba(255,255,255,.4)', width: `${w}%` }} />
                ))}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'white' }}>Informe PDF</div>
            </div>
            <div style={{ padding: '8px 9px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ background: '#134E4A', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px', borderRadius: 5, textAlign: 'center' }}>ASA II</div>
              <div style={{ background: '#fef3c7', color: '#92400e', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4, textAlign: 'center' }}>Riesgo bajo</div>
              {[100, 80, 90, 65, 85].map((w, i) => (
                <div key={i} style={{ height: i % 2 === 0 ? 5 : 3.5, borderRadius: 2, background: i % 2 === 0 ? '#bbf7d0' : '#dcfce7', width: `${w}%` }} />
              ))}
              <div style={{ background: '#134E4A', borderRadius: 4, padding: '4px', textAlign: 'center', marginTop: 2 }}>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>listo para revisión</div>
              </div>
            </div>
          </div>
          <div style={{ height: 26 + 21 + 144 }} />
          <Tag variant="dark">Clasificación ASA</Tag>
        </div>

      </div>

    </div>
  )
}