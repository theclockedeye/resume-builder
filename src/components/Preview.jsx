import React, { forwardRef } from 'react'
import { templates } from '../utils/templates'

const Preview = forwardRef(function Preview({ data, template, accentColor }, ref) {
  const tpl = templates[template] || templates.modern

  // Apply custom accent color if provided
  const headerStyle = {
    ...tpl.headerStyle,
    background: accentColor ? accentColor : tpl.headerStyle.background
  }

  // Helper function to render contact info
  const renderContact = () => {
    const contacts = []
    if (data.meta.email) contacts.push({ icon: '📧', text: data.meta.email })
    if (data.meta.phone) contacts.push({ icon: '📱', text: data.meta.phone })
    if (data.meta.location) contacts.push({ icon: '📍', text: data.meta.location })
    return contacts
  }

  // Helper function to render links
  const renderLinks = () => {
    const links = []
    if (data.meta.linkedin) links.push({ icon: '💼', text: data.meta.linkedin, url: `https://${data.meta.linkedin}` })
    if (data.meta.website) links.push({ icon: '🌐', text: data.meta.website, url: `https://${data.meta.website}` })
    if (data.meta.github) links.push({ icon: '💻', text: data.meta.github, url: `https://${data.meta.github}` })
    if (data.meta.portfolio) links.push({ icon: '🎨', text: data.meta.portfolio, url: `https://${data.meta.portfolio}` })
    return links
  }

  return (
    <div className={`preview ${template}`} ref={ref} id="resume-preview">
      <div className="resume-card" style={{ ...tpl.containerStyle, fontFamily: tpl.fontFamily }}>
        <header className="resume-header" style={headerStyle}>
          <h2 className="name" style={{ textAlign: tpl.headerAlign }}>{data.meta.name}</h2>
          <div className="title" style={{ textAlign: tpl.headerAlign }}>{data.meta.title}</div>
          {renderContact().length > 0 && (
            <div className="contact" style={{ textAlign: tpl.headerAlign }}>
              {renderContact().map((contact, i) => (
                <span key={i}>
                  {contact.icon} {contact.text}
                  {i < renderContact().length - 1 && ' • '}
                </span>
              ))}
            </div>
          )}
          {renderLinks().length > 0 && (
            <div className="links" style={{ textAlign: tpl.headerAlign }}>
              {renderLinks().map((link, i) => (
                <span key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {link.icon} {link.text}
                  </a>
                  {i < renderLinks().length - 1 && ' • '}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="resume-body">
          <div className="main-column">
            {data.summary && (
              <section className="section summary">
                <h4>Professional Summary</h4>
                <p>{data.summary}</p>
              </section>
            )}

            {data.experience && data.experience.length > 0 && (
              <section className="section">
                <h4>Experience</h4>
                {data.experience.map((e, i) => (
                  <div key={i} className="item">
                    <div className="item-header">
                      <div className="item-title">{e.role}</div>
                      <div className="item-subtitle">{e.company}</div>
                      <div className="item-date">{e.from} — {e.to}</div>
                    </div>
                    {e.details && <div className="item-body">{e.details}</div>}
                  </div>
                ))}
              </section>
            )}

            {data.projects && data.projects.length > 0 && (
              <section className="section">
                <h4>Projects</h4>
                {data.projects.map((p, i) => (
                  <div key={i} className="item">
                    <div className="item-header">
                      <div className="item-title">
                        {p.name}
                        {p.year && <span className="item-date"> • {p.year}</span>}
                      </div>
                      {p.technologies && <div className="item-subtitle">{p.technologies}</div>}
                    </div>
                    {p.description && <div className="item-body">{p.description}</div>}
                    {p.link && (
                      <div className="item-link">
                        <a href={`https://${p.link}`} target="_blank" rel="noopener noreferrer">
                          🔗 {p.link}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {data.education && data.education.length > 0 && (
              <section className="section">
                <h4>Education</h4>
                {data.education.map((ed, i) => (
                  <div key={i} className="item">
                    <div className="item-header">
                      <div className="item-title">{ed.school}</div>
                      <div className="item-subtitle">{ed.degree}</div>
                      <div className="item-date">{ed.from} — {ed.to}</div>
                    </div>
                    {ed.details && <div className="item-body">{ed.details}</div>}
                    {ed.location && <div className="item-meta">{ed.location}</div>}
                  </div>
                ))}
              </section>
            )}

            {data.certifications && data.certifications.length > 0 && (
              <section className="section">
                <h4>Certifications</h4>
                {data.certifications.map((cert, i) => (
                  <div key={i} className="item-compact">
                    <strong>{cert.name}</strong>
                    <div className="item-meta">
                      {cert.issuer} • {cert.year}
                      {cert.credentialId && ` • ID: ${cert.credentialId}`}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {data.awards && data.awards.length > 0 && (
              <section className="section">
                <h4>Awards & Honors</h4>
                {data.awards.map((award, i) => (
                  <div key={i} className="item-compact">
                    <strong>{award.title}</strong>
                    <div className="item-meta">{award.issuer} • {award.year}</div>
                    {award.description && <div className="item-body-small">{award.description}</div>}
                  </div>
                ))}
              </section>
            )}

            {data.volunteer && data.volunteer.length > 0 && (
              <section className="section">
                <h4>Volunteer Work</h4>
                {data.volunteer.map((vol, i) => (
                  <div key={i} className="item">
                    <div className="item-header">
                      <div className="item-title">{vol.role}</div>
                      <div className="item-subtitle">{vol.organization}</div>
                      <div className="item-date">{vol.from} — {vol.to}</div>
                    </div>
                    {vol.description && <div className="item-body">{vol.description}</div>}
                  </div>
                ))}
              </section>
            )}

            {data.publications && data.publications.length > 0 && (
              <section className="section">
                <h4>Publications</h4>
                {data.publications.map((pub, i) => (
                  <div key={i} className="item-compact">
                    <strong>{pub.title}</strong>
                    <div className="item-meta">
                      {pub.publisher} • {pub.year}
                      {pub.link && (
                        <span> • <a href={`https://${pub.link}`} target="_blank" rel="noopener noreferrer">Link</a></span>
                      )}
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className="side-column">
            {data.skills && data.skills.length > 0 && (
              <section className="section">
                <h4>Skills</h4>
                <div className="skills-list">
                  {data.skills.map((s, i) => (
                    <span key={i} className="skill-chip" style={{ borderColor: accentColor || tpl.accentColor }}>
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {data.languages && data.languages.length > 0 && (
              <section className="section">
                <h4>Languages</h4>
                {data.languages.map((lang, i) => (
                  <div key={i} className="item-compact">
                    <strong>{lang.name}</strong>
                    <div className="item-meta">{lang.level}</div>
                  </div>
                ))}
              </section>
            )}

            {data.references && data.references.length > 0 && (
              <section className="section">
                <h4>References</h4>
                {data.references.map((ref, i) => (
                  <div key={i} className="item-compact">
                    <strong>{ref.name}</strong>
                    <div className="item-meta">{ref.title} at {ref.company}</div>
                    <div className="item-meta">{ref.email} • {ref.phone}</div>
                    <div className="item-meta">{ref.relationship}</div>
                  </div>
                ))}
              </section>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
})

export default Preview
