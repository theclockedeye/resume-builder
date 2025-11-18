import React from 'react'
import { templates } from '../utils/templates'

export default function TemplateSelector({ value, onChange }) {
  const templateKeys = Object.keys(templates)

  return (
    <div className="panel">
      <h3>Choose Template</h3>
      <div className="template-grid">
        {templateKeys.map((templateKey) => {
          const tpl = templates[templateKey]
          return (
            <label
              key={templateKey}
              className={`template-card ${value === templateKey ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="template"
                value={templateKey}
                checked={value === templateKey}
                onChange={() => onChange(templateKey)}
              />
              <div
                className="template-preview"
                style={{
                  background: tpl.headerStyle.background,
                  color: tpl.headerStyle.color || '#fff'
                }}
              >
                <div className="preview-header">
                  <div className="preview-name">{tpl.name}</div>
                  <div className="preview-title">Professional Title</div>
                </div>
                <div className="preview-body">
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                  <div className="preview-line"></div>
                </div>
              </div>
              <div className="template-name">{tpl.name}</div>
            </label>
          )
        })}
      </div>
    </div>
  )
}
