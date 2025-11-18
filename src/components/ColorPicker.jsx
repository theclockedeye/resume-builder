import React from 'react'

const presetColors = [
  { name: 'Blue', value: '#0b6efd' },
  { name: 'Purple', value: '#667eea' },
  { name: 'Pink', value: '#f5576c' },
  { name: 'Green', value: '#10b981' },
  { name: 'Orange', value: '#f59e0b' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Dark', value: '#222' }
]

export default function ColorPicker({ value, onChange }) {
  return (
    <div className="panel">
      <h3>Accent Color</h3>
      <div className="color-picker">
        <div className="color-presets">
          {presetColors.map((color) => (
            <button
              key={color.value}
              className={`color-swatch ${value === color.value ? 'active' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => onChange(color.value)}
              title={color.name}
              aria-label={color.name}
            />
          ))}
        </div>
        <div className="custom-color">
          <label>
            <span>Custom:</span>
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
