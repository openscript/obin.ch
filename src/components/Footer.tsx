import * as React from 'react'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => <footer className={className}>{new Date().toISOString()}</footer>

export default Footer
