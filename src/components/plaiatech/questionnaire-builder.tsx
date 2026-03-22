'use client'

import dynamic from 'next/dynamic'
import { Heart, Camera, User, Upload, FileCheck, HeartPulse, Baby, Play, List, CheckSquare, FormInput } from 'lucide-react'
import { type Node, type Edge, Handle, Position, useNodesState, useEdgesState, type NodeChange, type EdgeChange } from '@xyflow/react'
import { type ComponentType, useCallback } from 'react'

const ReactFlow = dynamic(
  () => import('@xyflow/react').then((mod) => mod.ReactFlow),
  { ssr: false }
)
const Background = dynamic(
  () => import('@xyflow/react').then((mod) => mod.Background),
  { ssr: false }
)

import '@xyflow/react/dist/style.css'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Play,
  Heart,
  HeartPulse,
  Camera,
  User,
  Baby,
  Upload,
  FileCheck,
  List,
  CheckSquare,
  FormInput,
}

type QuestionNodeData = {
  label: string
  type: string
  icon: string
  isBranch?: boolean
}

function QuestionNode({ data }: { data: QuestionNodeData }) {
  const Icon = iconMap[data.icon]
  return (
    <div
      className={`rounded-lg border bg-[var(--bg-secondary)] shadow-sm min-w-[180px] ${
        data.isBranch
          ? 'border-[var(--accent)]/30'
          : 'border-[var(--border)]'
      }`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-[var(--text-muted)] !w-2 !h-2 !border-0"
      />
      <div className="h-1 rounded-t-lg bg-[var(--accent)]" />
      <div className="px-3 py-2.5 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />}
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-[var(--text-primary)] truncate">
            {data.label}
          </div>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] whitespace-nowrap">
          {data.type}
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-[var(--text-muted)] !w-2 !h-2 !border-0"
      />
    </div>
  )
}

const nodeTypes = { question: QuestionNode }

const initialNodes: Node[] = [
  {
    id: 'start',
    type: 'question',
    position: { x: 300, y: 0 },
    data: { label: 'Start', type: 'Entry', icon: 'Play' },
  },
  {
    id: 'cardiovascular',
    type: 'question',
    position: { x: 300, y: 100 },
    data: { label: 'Cardiovascular', type: 'Yes/No', icon: 'Heart' },
  },
  {
    id: 'cardiac-detail',
    type: 'question',
    position: { x: 570, y: 170 },
    data: { label: 'Cardiac Detail', type: 'Form', icon: 'HeartPulse', isBranch: true },
  },
  {
    id: 'medication',
    type: 'question',
    position: { x: 300, y: 220 },
    data: { label: 'Medication', type: 'Multi-select', icon: 'List' },
  },
  {
    id: 'sex',
    type: 'question',
    position: { x: 300, y: 340 },
    data: { label: 'Biological Sex', type: 'Select', icon: 'User' },
  },
  {
    id: 'pregnancy',
    type: 'question',
    position: { x: 570, y: 410 },
    data: { label: 'Pregnancy Info', type: 'Form', icon: 'Baby', isBranch: true },
  },
  {
    id: 'airway',
    type: 'question',
    position: { x: 300, y: 460 },
    data: { label: 'Airway', type: 'Photo', icon: 'Camera' },
  },
  {
    id: 'documents',
    type: 'question',
    position: { x: 300, y: 570 },
    data: { label: 'Documents', type: 'Upload', icon: 'Upload' },
  },
  {
    id: 'summary',
    type: 'question',
    position: { x: 300, y: 680 },
    data: { label: 'Summary', type: 'Review', icon: 'FileCheck' },
  },
]

const initialEdges: Edge[] = [
  { id: 'e-start-cardio', source: 'start', target: 'cardiovascular', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
  { id: 'e-cardio-med', source: 'cardiovascular', target: 'medication', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
  {
    id: 'e-cardio-detail',
    source: 'cardiovascular',
    target: 'cardiac-detail',
    type: 'smoothstep',
    animated: true,
    label: 'If Yes',
    style: { stroke: 'var(--accent)' },
    labelStyle: { fill: 'var(--accent)', fontSize: 10, fontWeight: 500 },
    labelBgStyle: { fill: 'var(--bg-secondary)', fillOpacity: 0.9 },
  },
  { id: 'e-med-sex', source: 'medication', target: 'sex', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
  { id: 'e-sex-airway', source: 'sex', target: 'airway', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
  {
    id: 'e-sex-pregnancy',
    source: 'sex',
    target: 'pregnancy',
    type: 'smoothstep',
    animated: true,
    label: 'If Female',
    style: { stroke: 'var(--accent)' },
    labelStyle: { fill: 'var(--accent)', fontSize: 10, fontWeight: 500 },
    labelBgStyle: { fill: 'var(--bg-secondary)', fillOpacity: 0.9 },
  },
  { id: 'e-airway-docs', source: 'airway', target: 'documents', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
  { id: 'e-docs-summary', source: 'documents', target: 'summary', type: 'smoothstep', style: { stroke: 'var(--text-muted)' } },
]

const sidebarBlocks = [
  { label: 'Yes / No', icon: 'CheckSquare' },
  { label: 'Photo', icon: 'Camera' },
  { label: 'Select', icon: 'List' },
  { label: 'Upload', icon: 'Upload' },
  { label: 'Multi-select', icon: 'CheckSquare' },
  { label: 'Form Fields', icon: 'FormInput' },
]

export default function QuestionnaireBuilder() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-tertiary)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-[var(--bg-secondary)] px-3 py-1">
          <span className="text-[11px] text-[var(--text-muted)]">
            app.example.com/admin/questionnaire-builder
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[var(--bg-primary)] flex">
        {/* Sidebar — hidden on mobile */}
        <div className="hidden md:block w-48 shrink-0 border-r border-[var(--border)] bg-[var(--bg-secondary)] p-3">
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium mb-2">
            Blocks
          </div>
          <div className="space-y-1.5">
            {sidebarBlocks.map((block) => {
              const Icon = iconMap[block.icon]
              return (
                <div
                  key={block.label}
                  className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-tertiary)] px-2.5 py-2 cursor-grab text-xs text-[var(--text-secondary)]"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-[var(--text-muted)]" />}
                  {block.label}
                </div>
              )
            })}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 h-[500px] relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            nodesDraggable={true}
            nodesConnectable={false}
            panOnDrag={true}
            zoomOnScroll={true}
            fitView
            proOptions={{ hideAttribution: true }}
            className="[&_.react-flow__node]:!cursor-grab"
          >
            <Background gap={16} size={1} color="var(--border)" />
          </ReactFlow>
          <div className="hidden md:block absolute bottom-3 right-3 text-[10px] text-[var(--text-muted)]">
            Drag nodes to rearrange
          </div>
        </div>
      </div>
    </div>
  )
}
