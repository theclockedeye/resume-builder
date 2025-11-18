import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export async function exportToPdf(element, fileName = 'resume') {
  if (!element) {
    alert('Preview not available. Please wait for the preview to load.')
    return
  }

  try {
    // Show loading state
    const originalContent = element.innerHTML
    
    // Create canvas with high quality settings
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        // Ensure all styles are applied in the cloned document
        const clonedElement = clonedDoc.getElementById('resume-preview')
        if (clonedElement) {
          clonedElement.style.transform = 'scale(1)'
          clonedElement.style.transformOrigin = 'top left'
        }
      }
    })

    const imgData = canvas.toDataURL('image/png', 1.0)

    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    // Calculate dimensions to fit the page
    const imgWidth = pageWidth
    const imgHeight = (canvas.height * pageWidth) / canvas.width

    // Add image to PDF
    if (imgHeight <= pageHeight) {
      // Single page
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST')
    } else {
      // Multiple pages
      let heightLeft = imgHeight
      let position = 0

      // First page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST')
      heightLeft -= pageHeight

      // Additional pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST')
        heightLeft -= pageHeight
      }
    }

    // Save the PDF
    const sanitizedFileName = fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase()
    pdf.save(`${sanitizedFileName}_resume.pdf`)

  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Failed to generate PDF. Please try again.')
  }
}
