import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from '../brands/Brands.js'
import { DocsCallout } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <DocsCallout
        name="KaKaQ Icons"
        href="components/chart"
        content="KaKaQ Icons. KaKaQ Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. KaKaQ Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app."
      />
      <CCard className="mb-4">
        <CCardHeader>Free Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
