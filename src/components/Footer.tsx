import * as React from 'react'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => <footer className={className}>Footer</footer>

export default Footer
