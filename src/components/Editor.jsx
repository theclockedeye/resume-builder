import React from 'react'

function TextInput({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <label className="field">
      <div className="label">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

function TextArea({ label, value, onChange, placeholder, rows = 4 }) {
  return (
    <label className="field">
      <div className="label">{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </label>
  )
}

function ListEditor({ title, items, onChange, itemFields, emptyMessage = 'No items added yet' }) {
  function updateItem(idx, key, val) {
    const copy = items.slice()
    copy[idx] = { ...copy[idx], [key]: val }
    onChange(copy)
  }

  function addItem() {
    const newItem = itemFields.reduce((acc, f) => ({ ...acc, [f]: '' }), {})
    onChange([...items, newItem])
  }

  function removeItem(idx) {
    const copy = items.slice()
    copy.splice(idx, 1)
    onChange(copy)
  }

  return (
    <div className="panel">
      <h3>{title}</h3>
      {items.length === 0 ? (
        <div className="empty-state">
          <p>{emptyMessage}</p>
        </div>
      ) : (
        items.map((it, i) => (
          <div className="list-item" key={i}>
            <div className="list-item-header">
              <span className="item-number">#{i + 1}</span>
              <div className="item-actions">
                <button className="btn-icon btn-danger" onClick={() => removeItem(i)} title="Remove">
                  🗑️
                </button>
              </div>
            </div>
            <div className="list-item-content">
              {itemFields.map((f) => {
                if (f === 'details' || f === 'description') {
                  return (
                    <TextArea
                      key={f}
                      label={f.charAt(0).toUpperCase() + f.slice(1)}
                      value={it[f] || ''}
                      onChange={(val) => updateItem(i, f, val)}
                      placeholder={`Enter ${f}...`}
                      rows={f === 'description' ? 3 : 2}
                    />
                  )
                }
                return (
                  <TextInput
                    key={f}
                    label={f.charAt(0).toUpperCase() + f.slice(1)}
                    value={it[f] || ''}
                    onChange={(val) => updateItem(i, f, val)}
                    placeholder={`Enter ${f}...`}
                    type={f === 'year' || f === 'from' || f === 'to' ? 'number' : 'text'}
                  />
                )
              })}
            </div>
          </div>
        ))
      )}
      <button className="btn-add" onClick={addItem}>
        <span>+</span> Add {title.slice(0, -1)}
      </button>
    </div>
  )
}

function SkillsEditor({ skills, onChange }) {
  function addSkill() {
    onChange([...skills, ''])
  }

  function updateSkill(idx, val) {
    const copy = skills.slice()
    copy[idx] = val
    onChange(copy)
  }

  function removeSkill(idx) {
    const copy = skills.slice()
    copy.splice(idx, 1)
    onChange(copy)
  }

  return (
    <div className="panel">
      <h3>Skills</h3>
      <div className="skills-editor">
        {skills.map((skill, i) => (
          <div className="skill-tag" key={i}>
            <input
              value={skill}
              onChange={(e) => updateSkill(i, e.target.value)}
              placeholder="Enter skill..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addSkill()
                }
              }}
            />
            <button className="btn-icon" onClick={() => removeSkill(i)} title="Remove skill">
              ×
            </button>
          </div>
        ))}
      </div>
      <button className="btn-add" onClick={addSkill}>
        <span>+</span> Add Skill
      </button>
    </div>
  )
}

export default function Editor({ data, onChange }) {
  const {
    meta,
    summary,
    skills,
    experience,
    education,
    projects = [],
    certifications = [],
    languages = [],
    awards = [],
    volunteer = [],
    publications = [],
    references = []
  } = data

  function updateMeta(key, val) {
    onChange({ ...data, meta: { ...meta, [key]: val } })
  }

  function updateSummary(val) {
    onChange({ ...data, summary: val })
  }

  function updateSkills(arr) {
    onChange({ ...data, skills: arr })
  }

  function updateExperience(arr) {
    onChange({ ...data, experience: arr })
  }

  function updateEducation(arr) {
    onChange({ ...data, education: arr })
  }

  function updateProjects(arr) {
    onChange({ ...data, projects: arr })
  }

  function updateCertifications(arr) {
    onChange({ ...data, certifications: arr })
  }

  function updateLanguages(arr) {
    onChange({ ...data, languages: arr })
  }

  function updateAwards(arr) {
    onChange({ ...data, awards: arr })
  }

  function updateVolunteer(arr) {
    onChange({ ...data, volunteer: arr })
  }

  function updatePublications(arr) {
    onChange({ ...data, publications: arr })
  }

  function updateReferences(arr) {
    onChange({ ...data, references: arr })
  }

  return (
    <div className="editor">
      <div className="panel">
        <h3>Personal Information</h3>
        <div className="form-grid">
          <TextInput label="Full name" value={meta.name} onChange={(v) => updateMeta('name', v)} />
          <TextInput label="Professional title" value={meta.title} onChange={(v) => updateMeta('title', v)} />
        </div>
        <div className="form-grid">
          <TextInput label="Email" value={meta.email} onChange={(v) => updateMeta('email', v)} type="email" />
          <TextInput label="Phone" value={meta.phone} onChange={(v) => updateMeta('phone', v)} />
        </div>
        <TextInput label="Location" value={meta.location} onChange={(v) => updateMeta('location', v)} />
        <div className="form-grid">
          <TextInput label="LinkedIn" value={meta.linkedin} onChange={(v) => updateMeta('linkedin', v)} placeholder="linkedin.com/in/username" />
          <TextInput label="Website" value={meta.website} onChange={(v) => updateMeta('website', v)} placeholder="yourwebsite.com" />
        </div>
        <div className="form-grid">
          <TextInput label="GitHub" value={meta.github} onChange={(v) => updateMeta('github', v)} placeholder="github.com/username" />
          <TextInput label="Portfolio" value={meta.portfolio} onChange={(v) => updateMeta('portfolio', v)} placeholder="portfolio.com" />
        </div>
      </div>

      <div className="panel">
        <h3>Professional Summary</h3>
        <TextArea
          label="Summary"
          value={summary}
          onChange={updateSummary}
          placeholder="Write a compelling summary of your professional background and key strengths..."
          rows={6}
        />
      </div>

      <SkillsEditor skills={skills} onChange={updateSkills} />

      <ListEditor
        title="Experience"
        items={experience}
        onChange={updateExperience}
        itemFields={['role', 'company', 'from', 'to', 'details']}
        emptyMessage="Add your work experience to showcase your career journey"
      />

      <ListEditor
        title="Education"
        items={education}
        onChange={updateEducation}
        itemFields={['school', 'degree', 'from', 'to', 'details', 'location']}
        emptyMessage="Add your educational background and qualifications"
      />

      <ListEditor
        title="Projects"
        items={projects}
        onChange={updateProjects}
        itemFields={['name', 'description', 'technologies', 'link', 'year']}
        emptyMessage="Showcase your personal and professional projects"
      />

      <ListEditor
        title="Certifications"
        items={certifications}
        onChange={updateCertifications}
        itemFields={['name', 'issuer', 'year', 'credentialId']}
        emptyMessage="Add your professional certifications and credentials"
      />

      <ListEditor
        title="Languages"
        items={languages}
        onChange={updateLanguages}
        itemFields={['name', 'level']}
        emptyMessage="List the languages you speak and your proficiency levels"
      />

      <ListEditor
        title="Awards & Honors"
        items={awards}
        onChange={updateAwards}
        itemFields={['title', 'issuer', 'year', 'description']}
        emptyMessage="Highlight your achievements and recognitions"
      />

      <ListEditor
        title="Volunteer Work"
        items={volunteer}
        onChange={updateVolunteer}
        itemFields={['organization', 'role', 'from', 'to', 'description']}
        emptyMessage="Share your community involvement and volunteer experience"
      />

      <ListEditor
        title="Publications"
        items={publications}
        onChange={updatePublications}
        itemFields={['title', 'publisher', 'year', 'link']}
        emptyMessage="List your published articles, papers, or blog posts"
      />

      <ListEditor
        title="References"
        items={references}
        onChange={updateReferences}
        itemFields={['name', 'title', 'company', 'email', 'phone', 'relationship']}
        emptyMessage="Add professional references (optional)"
      />
    </div>
  )
}
