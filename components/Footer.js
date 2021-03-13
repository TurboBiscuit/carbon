import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { COLORS } from '../lib/constants'

const EmailSubscribe = dynamic(() => import('./EmailSubscribe'), {
  loading: () => null,
})

const Footer = () => (
  <footer role="contentinfo" className="mt3">
    <nav className="mt3">
      <Link href="/about" prefetch={false}>
        <a className="link" href="/about">
          about
        </a>
      </Link>
      <a className="link" href="https://github.com/carbon-app/carbon">
        source
      </a>
      <a className="link" href="https://www.notion.so/TERMS-OF-USE-ff2ce22a7e9848c89c6be46b44297583">
        terms
      </a>
      <a className="link" href="https://www.notion.so/PRIVACY-POLICY-e9847a7777714eb08ba15a7a8eaee937">
        privacy
      </a>
      <EmailSubscribe />
      <a className="link" href="https://www.wren.co/join/carbon?utm_medium=profile_referral_link&utm_campaign=share">
        offsets
      </a>
      {/* <span className="new">New</span> */}
    </nav>

    <div className="mt2 mb2">
      created by{' '}
      <a className="author-link" href="https://twitter.com/carbon_app">
        @carbon_app
      </a>{' '}
      and modified by{' '}<a className="author-link" href="https://twitter.com/turbobiscuit_">
        @turbobiscuit_ 
      </a>{' '}for use on cloudflare pages
      ¬
    </div>
    <style jsx>
      {`
        footer {
          font-size: 14px;
          text-align: center;
        }

        footer > div {
          text-align: center;
          color: ${COLORS.GRAY};
        }

        nav {
          margin: 0 auto;
        }

        a {
          margin-right: 1rem;
        }

        a:last-child {
          margin-right: 0;
        }

        .new {
          position: absolute;
          margin: -4px 0 0 -12px;
          padding: 1px 3px;
          color: ${COLORS.SECONDARY};
          background: #cd3f45; /* COLORS.DARK_RED? */
          border-radius: 3px;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          text-transform: uppercase;
          user-select: none;
        }

        .author-link {
          color: ${COLORS.PRIMARY};
          text-decoration: none;
        }

        .author-link:hover {
          color: #fff;
        }
      `}
    </style>
  </footer>
)

export default Footer
