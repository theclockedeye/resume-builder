import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Editor from './components/Editor'
import Preview from './components/Preview'
import TemplateSelector from './components/TemplateSelector'
import ColorPicker from './components/ColorPicker'
import { exportToPdf } from './utils/exportPdf'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import HowToCreateResume from './pages/HowToCreateResume'

const STORAGE_KEY = 'resume-data-v2'

const defaultData = {
  meta: {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    website: 'johndoe.dev',
    github: 'github.com/johndoe',
    twitter: '',
    portfolio: ''
  },
  summary: 'Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Strong problem-solver with a track record of delivering high-quality solutions.',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL'],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      from: '2021',
      to: 'Present',
      details: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and improved code quality through comprehensive reviews.'
    },
    {
      role: 'Software Engineer',
      company: 'StartupXYZ',
      from: '2019',
      to: '2021',
      details: 'Built responsive web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 60%.'
    }
  ],
  education: [
    {
      school: 'University of Technology',
      degree: 'B.Sc in Computer Science',
      from: '2015',
      to: '2019',
      details: 'GPA: 3.8/4.0, Dean\'s List, Magna Cum Laude',
      location: 'San Francisco, CA'
    }
  ],
  projects: [
    {
      name: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and real-time inventory management.',
      link: 'github.com/johndoe/ecommerce',
      technologies: 'React, Node.js, MongoDB, Stripe API',
      year: '2023'
    },
    {
      name: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates and team collaboration features.',
      link: 'github.com/johndoe/taskapp',
      technologies: 'React, Firebase, Material-UI',
      year: '2022'
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
      credentialId: 'AWS-SAA-123456'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2021',
      credentialId: 'GCP-PD-789012'
    }
  ],
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Professional' },
    { name: 'French', level: 'Conversational' }
  ],
  awards: [
    {
      title: 'Employee of the Year',
      issuer: 'Tech Corp',
      year: '2022',
      description: 'Recognized for outstanding contributions to product development and team leadership'
    },
    {
      title: 'Innovation Award',
      issuer: 'StartupXYZ',
      year: '2020',
      description: 'Awarded for developing a novel approach to real-time data processing'
    }
  ],
  volunteer: [
    {
      organization: 'Code for Good',
      role: 'Technical Mentor',
      from: '2021',
      to: 'Present',
      description: 'Mentor junior developers and lead workshops on modern web development practices'
    }
  ],
  publications: [
    {
      title: 'Scalable Microservices Architecture',
      publisher: 'Tech Journal',
      year: '2023',
      link: 'techjournal.com/article/scalable-microservices'
    }
  ],
  references: [
    {
      name: 'Jane Smith',
      title: 'VP of Engineering',
      company: 'Tech Corp',
      email: 'jane.smith@techcorp.com',
      phone: '+1 (555) 987-6543',
      relationship: 'Former Manager'
    }
  ]
}

export default function App() {
  const [data, setData] = useState(defaultData)
  const [template, setTemplate] = useState('modern')
  const [accentColor, setAccentColor] = useState('#0b6efd')
  const [isSaving, setIsSaving] = useState(false)
  const previewRef = useRef()

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setData(parsed.data || defaultData)
        setTemplate(parsed.template || 'modern')
        setAccentColor(parsed.accentColor || '#0b6efd')
      }
    } catch (e) {
      console.error('Failed to load saved data', e)
    }
  }, [])

  useEffect(() => {
    setIsSaving(true)
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, template, accentColor }))
        setIsSaving(false)
      } catch (e) {
        console.error('Failed to save data', e)
        setIsSaving(false)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [data, template, accentColor])

  function handleImportJson(file) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result)
        if (parsed.data) {
          setData(parsed.data)
          setTemplate(parsed.template || 'modern')
          setAccentColor(parsed.accentColor || '#0b6efd')
        } else {
          setData(parsed)
        }
      } catch (err) {
        alert('Invalid JSON file')
      }
    }
    reader.readAsText(file)
  }

  function downloadJson() {
    const exportData = { data, template, accentColor }
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function resetData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY)
      setData(defaultData)
      setTemplate('modern')
      setAccentColor('#0b6efd')
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-left">
          <h1>✨ Resume Builder</h1>
          <span className="save-indicator">{isSaving ? 'Saving...' : 'Saved'}</span>
        </div>
        <div className="top-actions">
          <button className="btn-secondary" onClick={resetData}>
            <span>🔄</span> Reset
          </button>
          <button className="btn-secondary" onClick={downloadJson}>
            <span>💾</span> Export JSON
          </button>
          <label className="btn-secondary import-btn">
            <span>📁</span> Import JSON
            <input type="file" accept="application/json" onChange={(e) => handleImportJson(e.target.files[0])} />
          </label>
          <button className="btn-primary" onClick={() => exportToPdf(previewRef.current, data.meta.name)}>
            <span>📄</span> Download PDF
          </button>
        </div>
      </header>

      <main className="main">
        <section className="left">
          <TemplateSelector value={template} onChange={setTemplate} />
          <ColorPicker value={accentColor} onChange={setAccentColor} />
          <Editor data={data} onChange={setData} />
        </section>
        <section className="right">
          <Preview ref={previewRef} data={data} template={template} accentColor={accentColor} />
        </section>
      </main>

      <footer className="footer">
        <p>Built with ❤️ — Create, customize, and export your professional resume</p>
        <p className="footer-links">
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy: Your data is stored locally in your browser and never sent to any server.') }}>Privacy</a>
          <span>•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Open source resume builder. Feel free to use and modify!') }}>About</a>
        </p>
      </footer>
    </div>
  )
}
