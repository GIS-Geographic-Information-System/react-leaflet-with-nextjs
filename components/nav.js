import React from "react";
import Link from "next/link";

const links = [
  {
    href: "https://github.com/rajeshdh/react-leaflet-with-nextjs",
    label: "Github",
  },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Link prefetch href="/smartseeds">
          <a>SmartSeeds</a>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Link prefetch href="/countries">
          <a>Countries</a>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Link prefetch href="/farms">
          <a>Farms</a>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Link prefetch href="/farms1">
          <a>Farms1</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
