import React from 'react'
import { ulid } from 'ulid'

type Props = {
  rootClassName?: string
  initialExpanded?: boolean
  summaryContent: React.ReactNode
  detailsId?: string
}

export const Disclosure: React.SFC<Props> = ({
  rootClassName = '',
  initialExpanded = false,
  summaryContent,
  detailsId = ulid(),
  children,
}) => {
  return (
    <div className={`Disclosure ${rootClassName}`} role="group">
      <button
        className="Disclosure__summary"
        type="button"
        aria-expanded={initialExpanded}
        aria-controls={detailsId}
      >
        {summaryContent}
      </button>
      <div
        id={detailsId}
        className="Disclosure__details"
        hidden={!initialExpanded}
      >
        {children}
      </div>
    </div>
  )
}
